import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/google-sheets';
import { checkRateLimit } from '@/lib/rate-limit';

const LIMITS = { name: 100, company: 100, email: 254, phone: 30, volume: 100, application: 200, message: 2000 };

function sanitize(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

function allowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // server-to-server or same-origin non-CORS requests

  const host = req.headers.get('host') ?? '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const allowed = [
    `https://${host}`,
    `http://${host}`,
    siteUrl,
  ].filter(Boolean);

  return allowed.some((o) => origin === o || origin.startsWith(o));
}

export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!allowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // 5 submissions per IP per 15 minutes
  if (!checkRateLimit(`contact:${clientIp(req)}`, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field — silently succeed without saving
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name        = sanitize(body.name,        LIMITS.name);
  const company     = sanitize(body.company,     LIMITS.company);
  const email       = sanitize(body.email,       LIMITS.email);
  const phone       = sanitize(body.phone,       LIMITS.phone);
  const volume      = sanitize(body.volume,      LIMITS.volume);
  const application = sanitize(body.application, LIMITS.application);
  const message     = sanitize(body.message,     LIMITS.message);

  if (!name)                     return NextResponse.json({ error: 'Name is required' },          { status: 422 });
  if (!email || !validEmail(email)) return NextResponse.json({ error: 'Valid email is required' }, { status: 422 });
  if (!message)                  return NextResponse.json({ error: 'Message is required' },       { status: 422 });

  const sheetName = process.env.ENQUIRIES_SHEET_NAME ?? 'Enquiries';

  try {
    await appendRow(sheetName, [
      new Date().toISOString(),
      name, company, email, phone, volume, application, message,
    ]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Sheet append failed:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please email us directly at info@k2biofuels.com' },
      { status: 500 },
    );
  }
}
