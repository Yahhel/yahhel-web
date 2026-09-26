'use client';

import * as React from 'react';

import {
  ArrowLeft,
  ExternalLink,
  Eye,
  Lock,
  Monitor,
  RefreshCw,
  Shield,
  Smartphone,
  Tablet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

import { logo } from '@/constants/assets.constants';
import {
  getStorefrontCategories,
  getStorefrontProducts,
} from '@/lib/storefront';

import { StorefrontProductCard } from './preview-product-card';

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: 'Watermarked reader',
    desc: 'Every page stamped with your email. Share-proof.',
    iconColor: '#BD7828',
    bgColor: '#F7F0E9',
  },
  {
    icon: RefreshCw,
    title: '48-hour refunds',
    desc: 'Not what you expected? Full refund, no questions.',
    iconColor: '#29654F',
    bgColor: '#29654F1A',
  },
  {
    icon: Lock,
    title: 'Paystack secured',
    desc: 'Transfer, USSD, card. Flutterwave fallback.',
    iconColor: '#BD7828',
    bgColor: '#F7F0E9',
  },
];

export default function StorefrontPreviewScreen() {
  const storefrontProducts = React.useMemo(() => getStorefrontProducts(), []);
  const categories = React.useMemo(
    () => getStorefrontCategories(storefrontProducts),
    [storefrontProducts],
  );

  const [category, setCategory] = React.useState('All');

  const visibleProducts =
    category === 'All'
      ? storefrontProducts
      : storefrontProducts.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="sticky top-0 z-50 w-full h-[64.8px] border-b-[0.8px] border-b-[#E5E0DC99] bg-white/95">
        <div className="flex items-center justify-between py-3 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/seller/products"
              className="flex items-center gap-1.5 text-[#766860] hover:text-[#1F1A17] text-sm"
            >
              <ArrowLeft className="size-4" /> Back to Products
            </Link>
            <span className="text-[#D8D2CB]">/</span>
            <span className="flex items-center gap-1.5 font-serif font-semibold text-base text-[#1D1816]">
              <Eye className="size-4 text-[#BD7828]" /> Storefront Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg border-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED99] p-1">
              <button
                className="rounded-md p-1.5 text-[#766860] hover:bg-[#FAF8F5]"
                aria-label="Mobile view"
              >
                <Smartphone className="size-4" />
              </button>
              <button
                className="rounded-md p-1.5 text-[#766860] hover:bg-[#FAF8F5]"
                aria-label="Tablet view"
              >
                <Tablet className="size-4" />
              </button>
              <button
                className="rounded-xl bg-white p-1.5 text-[#BD7828] shadow-[0px_1px_2px_0px_#0000000D]"
                aria-label="Desktop view"
              >
                <Monitor className="size-4" />
              </button>
            </div>
            <Button className="flex px-3 rounded-xl bg-[#1F1A17] text-xs font-medium text-white h-8">
              <ExternalLink className="size-3.5" /> Open live store
            </Button>
          </div>
        </div>
      </div>
      <div className="border-b-[0.8px] border-b-[#BD782833] bg-[#F7F0E966] px-6 py-2.5 text-center text-xs text-[#BD7828]">
        <Eye className="mr-1.5 inline size-3.5" />
        This is how buyers see your storefront. Drafts and retired products are
        hidden from the public.
      </div>

      <div className="px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#766860]">
          Ada Nwosu&apos;s Shelf
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-[#1D1816] sm:text-5xl">
          Knowledge worth{' '}
          <span className="italic text-[#B0693A]">paying for</span>.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[#766860] text-base">
          Premium digital books and playbooks from a creator who actually
          shipped them. Instant access, watermarked reading, 48-hour refunds.
        </p>
      </div>

      <div className="mx-auto border-b-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5D9] h-[54.4px]">
        <div className="flex py-2  max-w-5xl mx-auto">
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList className="gap-x-2">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c}>
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-10">
        <p className="mb-5 text-xs text-[#766860]">
          {visibleProducts.length} titles
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <StorefrontProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="border-t-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED33] px-5 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc, bgColor, iconColor }) => (
            <div key={title} className="flex items-start gap-3">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: bgColor }}
              >
                <Icon className="size-4" style={{ color: iconColor }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D1816]">{title}</p>
                <p className="text-xs text-[#766860]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5]">
        <div className="mx-auto max-w-5xl flex items-center justify-between py-5 text-sm">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center h-7 w-7 rounded-xl bg-[#1D1816] p-1.5">
              <Image alt="logo" src={logo} />
            </div>
            <h2 className="font-serif font-semibold text-sm text-[#1D1816] ">
              Pager Sell
            </h2>
          </div>
          <div className="flex gap-6 text-[#766860] text-xs">
            <Link href="#">Creator</Link>
            <Link href="#">Support</Link>
            <Link href="#">My Library</Link>
            <Link href="#">Preview</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
