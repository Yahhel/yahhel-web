'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

import { logo } from '@/constants/assets.constants';
import {
  getStorefrontCategories,
  getStorefrontProducts,
} from '@/lib/storefront';
import { TRUST_ITEMS } from '@/lib/utils';
import { StorefrontProductCard } from '@/views/seller/storefront-preview/preview-product-card';

import { StorefrontNavbar } from './storefront-navbar';

const StoreFrontScreen = () => {
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
      <StorefrontNavbar />

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
            <StorefrontProductCard
              key={product.id}
              product={product}
              showLike
              actionLabel="Read summary"
              actionIcon="arrow"
            />
          ))}
        </div>
      </div>

      <div className="border-t-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED33] px-5 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {TRUST_ITEMS.map(
            ({ icon: Icon, title, desc, bgColor, iconColor }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="size-4" style={{ color: iconColor }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1D1816]">
                    {title}
                  </p>
                  <p className="text-xs text-[#766860]">{desc}</p>
                </div>
              </div>
            ),
          )}
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
};

export default StoreFrontScreen;
