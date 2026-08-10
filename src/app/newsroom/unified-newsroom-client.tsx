'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ImgSlot } from '@/components/ui/img-slot';
import type { NewsroomCategory, NewsroomItem } from '@/lib/newsroom';

const FILTERS: { id: 'all' | NewsroomCategory; label: string }[] = [
  { id: 'all', label: 'All' }, { id: 'press', label: 'Press' }, { id: 'company', label: 'Company' },
  { id: 'industry-policy', label: 'Industry & Policy' }, { id: 'sustainability', label: 'Sustainability' },
  { id: 'operations', label: 'Operations' }, { id: 'videos', label: 'Videos' }, { id: 'officials', label: 'Officials' },
];
const label = (category: NewsroomCategory) => FILTERS.find((filter) => filter.id === category)?.label ?? category;
const date = (iso: string) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso));

function EditorialCard({ item }: { item: NewsroomItem }) {
  const external = item.href.startsWith('http');
  const content = <>
    {item.image ? <img src={item.image} alt="" style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }} /> : <ImgSlot tone="plant" height={190} />}
    <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <span className="k2-editorial-meta">{label(item.category)}{item.source ? ` · ${item.source}` : ''}</span>
      <h3>{item.title}</h3><p>{item.excerpt}</p>
      <div className="k2-editorial-footer"><span>{date(item.publishedAt)}{item.readTime ? ` · ${item.readTime}` : ''}{item.author ? ` · ${item.author}` : ''}</span><b>{item.category === 'videos' ? 'Watch' : 'Read'} →</b></div>
    </div>
  </>;
  const className = 'k2-editorial-card';
  return external ? <a className={className} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a> : <Link className={className} href={item.href}>{content}</Link>;
}

export function UnifiedNewsroomClient({ items }: { items: NewsroomItem[] }) {
  const [active, setActive] = useState<'all' | NewsroomCategory>('all');
  const sorted = [...items].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const featured = [...sorted.filter((item) => item.featured), ...sorted.filter((item) => !item.featured)].slice(0, 3);
  const visible = active === 'all' ? sorted : sorted.filter((item) => item.category === active);
  return <>
    <section className="k2-editorial-featured"><div><span className="k2-editorial-section-label">— Featured</span><div className="k2-editorial-featured-grid">{featured.map((item, index) => <div className={index === 0 ? 'k2-editorial-lead' : ''} key={item.id}><EditorialCard item={item} /></div>)}</div></div></section>
    <section className="k2-editorial-list"><div><div className="k2-editorial-filters">{FILTERS.map((filter) => <button key={filter.id} className={active === filter.id ? 'active' : ''} onClick={() => setActive(filter.id)}>{filter.label}</button>)}</div><div className="k2-editorial-grid">{visible.map((item) => <EditorialCard key={item.id} item={item} />)}</div></div></section>
  </>;
}
