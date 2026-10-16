'use client';

import * as React from 'react';

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Eye,
  Heart,
  Lock,
  RefreshCw,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

import type { Product } from '@/lib/dummy';
import { formatCompactNumber, formatNaira } from '@/lib/utils';

export function ProductHeader({ product }: { product: Product }) {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-8">
      <Link
        href="/store-front"
        className="flex w-fit items-center gap-1.5 text-xs text-[#766860] hover:text-[#1D1816]"
      >
        <ArrowLeft className="size-3" /> Back to storefront
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-[200px_1fr]">
        <div
          className="flex aspect-3/4 w-full max-w-56 flex-col h-full rounded-xl p-4 text-white border-[0.8px] border-[#0000000D] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${product.coverColors[0]}, ${product.coverColors[1]})`,
          }}
        >
          {product.delivery === 'protected' && (
            <Lock className="ml-auto size-4 text-white/50" />
          )}
          <div className="flex flex-col justify-between h-full">
            <p className="font-serif text-base font-semibold leading-tight">
              {product.title}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#FFFFFF73] font-medium">
              {product.category}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#766860]">
            {product.category}
          </p>
          <h1 className="mt-1 font-serif text-3xl font-semibold text-[#1D1816] sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-2 text-base text-[#766860] font-normal">
            {product.description}
          </p>

          {product.author && (
            <div className="mt-3 flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] text-[9px] font-semibold text-white">
                {product.author.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')}
              </div>
              <Link
                href={`/creators/${product.author.id}`}
                className="text-xs text-[#766860] underline hover:text-[#1D1816]"
              >
                by {product.author.name}
              </Link>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-5 text-xs text-[#766860]">
            <span className="flex items-center gap-1.5">
              <Users className="size-4" /> {formatCompactNumber(product.buyers)}{' '}
              buyers
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="size-4" /> {formatCompactNumber(product.views)}{' '}
              views
            </span>
            {product.chapters && (
              <span className="flex items-center gap-1.5">
                <BookOpen className="size-4" /> {product.chapters} chapters
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <span className="font-serif text-3xl font-semibold text-[#1D1816]">
              {formatNaira(product.price)}
            </span>
            <Button size="cta" className="text-white">
              Buy now <ArrowRight className="size-3.5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setSaved((v) => !v)}
            className={cn(
              'mt-3 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
              saved
                ? 'border-[0.8px] border-[#D3222233] bg-[#D322221A] text-[#D32222]'
                : 'border-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED80] text-[#1D1816] hover:bg-[#FAF8F5]',
            )}
          >
            <Heart className={cn('size-4', saved ? 'fill-current' : "text-[#766860]")} />
            {saved ? 'Saved to favorites' : 'Add to favorites'}
          </button>

          <div className="mt-3 flex flex-wrap gap-5 text-xs text-[#766860]">
            {product.delivery === 'protected' && (
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5 text-[#BD7828]" /> Protected
                in-browser reader
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <RefreshCw className="size-3.5 text-[#29654F]" /> 48h refunds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
