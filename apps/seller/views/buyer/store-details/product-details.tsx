import { BookOpen, Lock, RefreshCw, Shield } from 'lucide-react';
import Link from 'next/link';

import type { Product } from '@/lib/dummy';
import { formatNaira } from '@/lib/utils';

const FEATURE_CARDS = (product: Product) => [
  {
    icon: BookOpen,
    title: 'Full access',
    tagColor: '#BD7828',
    tagBg: '#F7F0E9',
    desc: `${product.chapters ?? ''} chapters, instantly available after payment.`.trim(),
  },
  {
    icon: Shield,
    tagColor: '#29654F',
    tagBg: '#29654F1A',
    title: 'Watermarked',
    desc: 'Each page stamped with your email. Share-proof.',
  },
  {
    icon: RefreshCw,
    tagColor: '#BD7828',
    tagBg: '#F7F0E9',
    title: '48h refund',
    desc: 'Not what you expected? Full refund within 48 hours.',
  },
];

export function ProductDetails({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {product.about && (
        <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-7 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <h2 className="font-serif text-xl font-semibold text-[#1D1816]">
            About this book
          </h2>
          <p className="mt-3 leading-relaxed text-[#1D1816CC] text-sm">
            {product.about}
          </p>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {FEATURE_CARDS(product).map((f) => (
          <div
            key={f.title}
            className="rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
          >
            <div
              className="flex size-9 items-center justify-center rounded-xl bg-[#FBE8DD]"
              style={{ backgroundColor: f?.tagBg }}
            >
              <f.icon className="size-4" style={{ color: f.tagColor }} />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-[#1D1816]">
              {f.title}
            </h3>
            <p className="mt-1 text-xs text-[#766860]">{f.desc}</p>
          </div>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="font-serif text-lg font-semibold text-[#1D1816]">
            More in {product.category}
          </h2>
          <div className="mt-4 flex gap-5 overflow-x-auto pb-2">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/store/${r.id}`}
                className="flex shrink-0 items-start gap-3 w-55"
              >
                <div
                  className="flex h-24 w-16 shrink-0 flex-col justify-between rounded-xl p-2 text-white border-[0.8px] border-[#0000000D] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${r.coverColors[0]}, ${r.coverColors[1]})`,
                  }}
                >
                  <div className="flex">
                    <p className="font-serif text-[7px] font-semibold leading-tight">
                      {r.title}
                    </p>
                    {r.delivery === 'protected' && (
                      <div><Lock className="ml-auto size-2.5 text-white/50" /></div>
                    )}
                  </div>

                    <p className="text-[5px] font-semibold leading-tight text-white/45">
                      {r.category}
                    </p>
                </div>
                <div>
                  <p className="font-serif text-sm font-medium leading-snug text-[#1D1816]">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm text-[#1D1816] font-medium">
                    {formatNaira(r.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
