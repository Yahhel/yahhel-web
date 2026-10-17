'use client'

import { useState } from 'react';

import { StorefrontNavbar } from '../shared/storefront-navbar';
import { AskAboutBookButton } from './ask-about-book-button';
import { ProductDetails } from './product-details';
import { ProductHeader } from './product-header';

import  type { Product } from '@/lib/dummy';
import StoreFrontFooter from '../shared/storefront-footer';
import { TRUST_ITEMS } from '@/lib/utils';
import { BookBriefingPanel } from './book-briefing-panel';


type StoreProductDetailsProps = {
  product: Product;
  related: Product[];
};

export default function StoreProductDetails({
  product,
  related,
}: StoreProductDetailsProps) {
  const [briefingOpen, setBriefingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <StorefrontNavbar searchValue="" onSearchChange={() => {}} />

      <ProductHeader product={product} />
      <ProductDetails product={product} related={related} />

      <div className="border-t border-[#E5E0DC] px-8 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#F3ECE3]">
                <Icon className="size-4 text-[#B0693A]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1F1A17]">{title}</p>
                <p className="text-xs text-[#8A7B6E]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AskAboutBookButton onClick={() => setBriefingOpen(true)} />
      <BookBriefingPanel product={product} open={briefingOpen} onClose={() => setBriefingOpen(false)} />
      <StoreFrontFooter />
    </div>
    
  );
}
