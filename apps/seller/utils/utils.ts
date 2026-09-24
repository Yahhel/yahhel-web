import { Download, Lock } from 'lucide-react';

export const naira = (n: number) => `₦${n.toLocaleString('en-NG')}`;

export const conversion = (buyers: number, views: number) =>
  views === 0 ? '0.0%' : `${((buyers / views) * 100).toFixed(1)}%`;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const COVER_COLORS = [
  { name: 'Gold', value: '#C8893A' },
  { name: 'Green', value: '#1A6B52' },
  { name: 'Charcoal', value: '#2B2B2B' },
  { name: 'Maroon', value: '#7C2D3A' },
  { name: 'Navy', value: '#1E3A5F' },
  { name: 'Copper', value: '#A0522D' },
  { name: 'Plum', value: '#5D3A5E' },
  { name: 'Forest', value: '#2D4A2B' },
] as const;

export function getCoverGradient(hex: string) {
  return `linear-gradient(135deg, ${hex} 0%, ${hex}DD 100%)`;
}

export const STATUS_OPTIONS = [
  { value: 'draft', label: 'Save as draft' },
  { value: 'published', label: 'Publish to storefront' },
] as const;

export const DELIVERY_OPTIONS = [
  {
    value: 'protected',
    icon: Lock,
    title: 'Protected reader',
    desc: 'Watermarked, in-browser only',
  },
  {
    value: 'download',
    icon: Download,
    title: 'Download',
    desc: 'Direct file download',
  },
] as const;
