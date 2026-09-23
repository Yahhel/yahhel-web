'use client';

import React from 'react';

import { ProductCard } from './product-card';
import type { Product } from '@/utils/dummy';


interface ProductListsProps {
  products: Product[];
  selected: Set<string>;
  onToggle: (id: string) => void;
}


const ProductLists = ({ products, selected, onToggle }: ProductListsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          selected={selected.has(p.id)}
          onSelect={onToggle}
          onMenuClick={(id) => console.log('menu', id)}
        />
      ))}
    </div>
  );
};

export default ProductLists;
