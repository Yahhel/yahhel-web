import React from 'react';

import { ExternalLink, Plus } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import ProductsScreen from '@/views/seller/products/products';

const Products = () => {

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-[#1D1816] text-2xl font-semibold">
            Products
          </h3>
          <p className="text-sm text-[#766860] font-normal">
            6 products · 1,495 buyers · ₦2,675,400 lifetime GMV
          </p>
        </div>
        <div className="space-x-2">
          <Button className="h-10 border-[0.8px] border-[#E5E0DC99]/60 bg-white text-[#1D1816] text-sm font-medium">
            <ExternalLink />
            Storefront preview
          </Button>
          <Button className="bg-[#1D1816] h-10 text-[#FAF8F5] text-sm font-medium rounded-xl">
            <Plus /> New product
          </Button>
        </div>
      </div>

      <ProductsScreen />
    
    </div>
  );
};

export default Products;
