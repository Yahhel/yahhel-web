'use client'

import { Lock, RefreshCw, Shield } from 'lucide-react';
import { StorefrontNavbar } from '../shared/storefront-navbar';
import { AskAboutBookButton } from './ask-about-book-button';
import { ProductDetails } from './product-details';
import { ProductHeader } from './product-header';

import  type { Product } from '@/lib/dummy';
import StoreFrontFooter from '../shared/storefront-footer';


const TRUST_ITEMS = [
  {
    icon: Shield,
    title: 'Watermarked reader',
    desc: 'Every page stamped with your email. Share-proof.',
  },
  {
    icon: RefreshCw,
    title: '48-hour refunds',
    desc: 'Not what you expected? Full refund, no questions.',
  },
  {
    icon: Lock,
    title: 'Paystack secured',
    desc: 'Transfer, USSD, card. Flutterwave fallback.',
  },
];

type StoreProductDetailsProps = {
  product: Product;
  related: Product[];
};

export default function StoreProductDetails({
  product,
  related,
}: StoreProductDetailsProps) {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <StorefrontNavbar searchValue="" onSearchChange={() => {}} />

      <ProductHeader product={product} />
      <ProductDetails product={product} related={related} />

      <div className="border-t border-[#E5E0DC] px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
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

      <AskAboutBookButton />
      
      <StoreFrontFooter />
    </div>
    
  );
}
