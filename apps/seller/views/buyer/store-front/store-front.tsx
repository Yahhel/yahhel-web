'use client';

import React from 'react';

import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

import { useDebouncedValue } from '@/hooks/use-debounced-value';
import {
  getStorefrontCategories,
  getStorefrontProducts,
  searchProducts,
} from '@/lib/storefront';
import { TRUST_ITEMS } from '@/lib/utils';
import { StorefrontProductCard } from '@/views/seller/storefront-preview/preview-product-card';

import StoreFrontFooter from '../shared/storefront-footer';
import { StorefrontNavbar } from '../shared/storefront-navbar';

const StoreFrontScreen = () => {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebouncedValue(search, 250);

  const storefrontProducts = React.useMemo(() => getStorefrontProducts(), []);
  const categories = React.useMemo(
    () => getStorefrontCategories(storefrontProducts),
    [storefrontProducts],
  );
  const [category, setCategory] = React.useState('All');

  const visibleProducts = React.useMemo(() => {
    const byCategory =
      category === 'All'
        ? storefrontProducts
        : storefrontProducts.filter((p) => p.category === category);
    return searchProducts(byCategory, debouncedSearch);
  }, [storefrontProducts, category, debouncedSearch]);
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <StorefrontNavbar searchValue={search} onSearchChange={setSearch} />

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
          {visibleProducts.length}{' '}
          {visibleProducts.length === 1 ? 'title' : 'titles'}
          {debouncedSearch && (
            <>
              {' '}
              for{' '}
              <span className="font-medium text-[#1D1816]">
                &ldquo;{debouncedSearch}&rdquo;
              </span>
            </>
          )}
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

      <div className="border-t-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED33] px-8 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
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

      <StoreFrontFooter />
    </div>
  );
};

export default StoreFrontScreen;
