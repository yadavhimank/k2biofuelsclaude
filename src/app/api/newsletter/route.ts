import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/google-sheets';
import { checkRateLimit } from '@/lib/rate-limit';

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
  if (!origin) return true;

  const host = req.headers.get('host') ?? '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const allowed = [`https://${host}`, `http://${host}`, siteUrl].filter(Boolean);
  return allowed.some((o) => origin === o || origin.startsWith(o));
}

export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!allowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // 3 subscriptions per IP per hour
  if (!checkRateLimit(`newsletter:${clientIp(req)}`, 3, 60 * 60 * 1000)) {
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

  // Honeypot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email  = typeof body.email  === 'string' ? body.email.trim().slice(0, 254) : '';
  const source = typeof body.source === 'string' ? body.source.trim().slice(0, 50) : 'unknown';

  if (!email || !validEmail(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 422 });
  }

  const sheetName = process.env.SUBSCRIBERS_SHEET_NAME ?? 'Subscribers';

  try {
    await appendRow(sheetName, [new Date().toISOString(), email, source]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] Sheet append failed:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
