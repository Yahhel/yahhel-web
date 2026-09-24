'use client';

import React from 'react';

import { ExternalLink, Plus, SlidersVertical, X } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { Separator } from '@repo/ui/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';

import { products } from '@/utils/dummy';

import AddProduct from './add-product.modal';
import ProductLists from './product-lists';

type Tab = 'all' | 'live' | 'retired';

const ProductsScreen = () => {
  const [tab, setTab] = React.useState<Tab>('all');
  const [openAddProduct, setOpenAddProduct] = React.useState(false);
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  const visible = React.useMemo(
    () => (tab === 'all' ? products : products.filter((p) => p.status === tab)),
    [tab],
  );

  const selectedCount = visible.filter((p) => selected.has(p.id)).length;
  const allSelected = visible.length > 0 && selectedCount === visible.length;
  const someSelected = selectedCount > 0 && !allSelected;

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAll = () =>
    setSelected((prev) => {
      const next = new Set(prev);
      visible.forEach((p) =>
        allSelected ? next.delete(p.id) : next.add(p.id),
      );
      return next;
    });

  const dismissAllToggle = () => setSelected(new Set());

  const handleTabChange = (value: string) => {
    setTab(value as Tab);
    setSelected(new Set());
  };

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
            <Button className="h-10 border-[0.8px] border-[#E5E0DC99]/60 bg-white hover:bg-white text-sm font-medium text-[#1D1816]">
              <ExternalLink />
              Storefront preview
            </Button>
            <Button
              className="h-10 rounded-xl bg-[#1D1816] text-sm font-medium text-[#FAF8F5]"
              onClick={() => setOpenAddProduct(true)}
            >
              <Plus /> New product
            </Button>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue={tab}
        onValueChange={handleTabChange}
        className="w-full mt-7"
      >
        <div className="flex items-center justify-between gap-4">
          <TabsList className="gap-x-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="retired">Retired</TabsTrigger>
          </TabsList>

          <Button
            type="button"
            role="checkbox"
            aria-checked={allSelected ? true : someSelected ? 'mixed' : false}
            disabled={visible.length === 0}
            onClick={toggleAll}
            className="h-[33.6px] flex items-center gap-2.5 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white px-5 py-3 text-[#1D1816] text-xs font-medium  disabled:opacity-50 hover:bg-transparent"
          >
            <span
              className={`flex h-4.5 w-4.5 items-center justify-center rounded-sm border-[0.8px] ${
                allSelected || someSelected
                  ? 'border-[#1a1a1a] bg-[#1a1a1a]'
                  : 'border-[#d9d5cf] bg-white'
              }`}
            >
              {allSelected && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 5 5 9-10" />
                </svg>
              )}
              {someSelected && <span className="h-px w-2 rounded bg-white" />}
            </span>
            Select all ({visible.length})
          </Button>
        </div>
        {(['all', 'live', 'retired'] as const).map((t) => (
          <TabsContent key={t} value={t} className="mt-6">
            <ProductLists
              products={visible}
              selected={selected}
              onToggle={toggle}
            />
          </TabsContent>
        ))}

        {selected?.size && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/12">
            <div className="flex items-center px-4 w-[288px] h-13 bg-[#1D1816] shadow-[0px_1px_2px_0px_#0000000D] rounded-xl gap-x-2.5">
              <p className="text-sm text-[#FAF8F5] font-medium">
                {selected?.size} selected{' '}
              </p>

              <Separator
                className="border border-[#FAF8F533] h-4"
                orientation="vertical"
              />

              <div className="flex flex-row items-center justify-center gap-x-1 bg-[#BD7828] h-7 w-30.75 rounded-xl px-2 cursor-pointer">
                <SlidersVertical className="text-white" size={14} />
                <span className="text-[#FFFFFF] text-xs font-medium">
                  Edit selected
                </span>
              </div>

              <div className="absolute right-3" onClick={dismissAllToggle}>
                <X className="text-[#FAF8F5]" size={18} />
              </div>
            </div>
          </div>
        )}
      </Tabs>

      {openAddProduct && (
        <AddProduct open onClose={() => setOpenAddProduct(false)} />
      )}
    </div>
  );
};

export default ProductsScreen;
