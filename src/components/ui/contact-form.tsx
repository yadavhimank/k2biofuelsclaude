'use client';

import { useState } from 'react';
import { Em } from './em';
import { MonoCap } from './mono-cap';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  volume: string;
  application: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string | null>>;
type Status = 'idle' | 'submitting' | 'success';

interface FieldOpts {
  required?: boolean;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '',
    volume: '', application: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Tell us a bit about what you need';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--k2-surface)',
        border: '1px solid var(--k2-border-med)',
        padding: 48,
      }}>
        <div style={{
          width: 56, height: 56, background: 'var(--k2-eyebrow)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, marginBottom: 28,
        }}>
          ✓
        </div>
        <h2 style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}>
          Thanks, {form.name.split(' ')[0]}. <Em>We&apos;ll be in touch.</Em>
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 24px' }}>
          We&apos;ve received your enquiry. Our sales team will reach out within 24 hours, Mon-Sat. For urgent matters, please call <span style={{ fontFamily: 'var(--k2-mono)' }}>+91 88750 07733</span>.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ name: '', company: '', email: '', phone: '', volume: '', application: '', message: '' });
          }}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: 'inherit', fontSize: 15, fontWeight: 500,
            color: 'var(--k2-ink)', borderBottom: '1px solid var(--k2-ink)', paddingBottom: 2,
          }}
        >
          Submit another enquiry →
        </button>
      </div>
    );
  }

  const field = (k: keyof FormState, label: string, opts: FieldOpts = {}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--k2-text-2)', fontWeight: 500 }}>
        {label}{opts.required && <span style={{ color: 'var(--k2-cta)' }}> *</span>}
      </label>
      {opts.textarea ? (
        <textarea
          value={form[k]} onChange={update(k)}
          rows={4} placeholder={opts.placeholder}
          style={{
            background: 'var(--k2-surface)',
            border: `1px solid ${errors[k] ? 'var(--k2-cta)' : 'var(--k2-border-med)'}`,
            padding: '14px 16px', fontFamily: 'inherit', fontSize: 14, color: 'var(--k2-ink)',
            resize: 'vertical', minHeight: 100, outline: 'none', borderRadius: 2,
            transition: 'border-color .15s ease',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--k2-ink)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = errors[k] ? 'var(--k2-cta)' : 'var(--k2-border-med)'; }}
        />
      ) : (
        <input
          type={opts.type || 'text'} value={form[k]} onChange={update(k)}
          placeholder={opts.placeholder}
          style={{
            background: 'var(--k2-surface)',
            border: `1px solid ${errors[k] ? 'var(--k2-cta)' : 'var(--k2-border-med)'}`,
            padding: '14px 16px', fontFamily: 'inherit', fontSize: 14, color: 'var(--k2-ink)',
            outline: 'none', borderRadius: 2,
            transition: 'border-color .15s ease',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--k2-ink)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = errors[k] ? 'var(--k2-cta)' : 'var(--k2-border-med)'; }}
        />
      )}
      {errors[k] && (
        <span style={{ fontSize: 13, color: 'var(--k2-cta)', fontFamily: 'var(--k2-mono)' }}>
          ● {errors[k]}
        </span>
      )}
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--k2-eyebrow)', marginBottom: 14 }}>
        — Enquiry form
      </div>
      <h2 style={{ fontSize: 32, margin: '0 0 36px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        Tell us what your boiler<br />
        <Em>needs to burn.</Em>
      </h2>

      <div className="k2-form-grid" style={{ marginBottom: 24 }}>
        {field('name', 'Name', { required: true, placeholder: 'Your full name' })}
        {field('company', 'Company', { placeholder: 'Optional' })}
        {field('email', 'Email', { required: true, type: 'email', placeholder: 'name@company.com' })}
        {field('phone', 'Phone', { type: 'tel', placeholder: '+91 ...' })}
        {field('volume', 'Monthly volume', { placeholder: 'e.g. 500 MT / month' })}
        {field('application', 'Boiler / application', { placeholder: 'e.g. AFBC boiler, sugar cogen' })}
      </div>

      <div style={{ marginBottom: 32 }}>
        {field('message', 'Message', { required: true, textarea: true, placeholder: 'Boiler model, fuel handling system, anything we should know to recommend the right blend.' })}
      </div>

      <div className="k2-form-submit-row" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          type="submit" disabled={status === 'submitting'}
          style={{
            background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
            border: 'none', padding: '14px 28px', fontSize: 15, fontWeight: 500,
            letterSpacing: 0.2, cursor: status === 'submitting' ? 'wait' : 'pointer',
            fontFamily: 'inherit', borderRadius: 2,
            opacity: status === 'submitting' ? 0.6 : 1,
            transition: 'opacity .2s ease',
          }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send enquiry →'}
        </button>
        <MonoCap style={{ color: 'var(--k2-text-3)' }}>Or email info@k2biofuels.com</MonoCap>
      </div>
    </form>
  );
}
