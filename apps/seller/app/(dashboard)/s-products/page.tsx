import React from 'react';

import { ExternalLink, Plus } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import ProductsScreen from '@/views/seller/products/products';

const Products = () => {

  return (
    <div>
      <div className="sticky top-0 z-10 bg-[#FAF8F5] pb-4 pt-6">
        <div className="flex w-full items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#1D1816]">
              Products
            </h3>
            <p className="text-sm font-normal text-[#766860]">
              6 products · 1,495 buyers · ₦2,675,400 lifetime GMV
            </p>
          </div>
          <div className="space-x-2">
            <Button className="h-10 border-[0.8px] border-[#E5E0DC99]/60 bg-white text-sm font-medium text-[#1D1816]">
              <ExternalLink />
              Storefront preview
            </Button>
            <Button className="h-10 rounded-xl bg-[#1D1816] text-sm font-medium text-[#FAF8F5]">
              <Plus /> New product
            </Button>
          </div>
        </div>
      </div>

      <ProductsScreen />
    </div>
  );
};

export default Products;
