'use client';

import React from 'react';

import { Button } from '@repo/ui/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';

import ProductLists from './product-lists';
import { products } from '@/utils/dummy';

type Tab = "all" | "live" | "retired";

const ProductsScreen = () => {
  const [tab, setTab] = React.useState<Tab>('all');
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

  const handleTabChange = (value: string) => {
    setTab(value as Tab);
    setSelected(new Set());
  };

  return (
    <div>
      <Tabs defaultValue={tab} onValueChange={handleTabChange}  className="w-full mt-7">
        <div className="flex items-center justify-between gap-4">
          <TabsList className='gap-x-2'>
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
              {someSelected && (
                <span className="h-px w-2 rounded bg-white" />
              )}
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
      </Tabs>
    </div>
  );
};

export default ProductsScreen;
