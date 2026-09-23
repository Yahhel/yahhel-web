'use client';

import {
  Check,
  Download,
  EllipsisVertical,
  ExternalLink,
  Eye,
  Lock,
  Pencil,
  ShoppingBag,
  Trash,
  Trash2,
} from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import { cn } from '@repo/ui/lib/utils';

import { conversion, formatDate, naira } from '@/utils/utils';

import ProductStat from './product-stat';

export type ProductStatus = 'live' | 'retired';
export type ProductDelivery = 'protected' | 'download';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  coverColors: [string, string];
  status: ProductStatus;
  price: number;
  views: number;
  buyers: number;
  delivery: ProductDelivery;
  revenue: number;
  publishedAt: string;
}

interface ProductCardProps {
  product: Product;
  selected?: boolean;
  onSelect?: (id: string) => void;
  onMenuClick?: (id: string) => void;
}

export function ProductCard({
  product,
  selected = false,
  onSelect,
  onMenuClick,
}: ProductCardProps) {
  const p = product;
  const isProtected = p.delivery === 'protected';

  return (
    <DropdownMenu>
      <article
        className={cn(
          'relative box-border rounded-[20px] bg-white px-6 pb-5 pt-6 font-sans text-[#1a1a1a] shadow-[0_1px_2px_rgba(20,20,20,.04),0_6px_20px_rgba(20,20,20,.06)]',
          selected && 'border-2 border-[#BD7828]',
        )}
      >
        <button
          type="button"
          role="checkbox"
          aria-checked={selected}
          aria-label={`Select ${p.title}`}
          onClick={() => onSelect?.(p.id)}
          className={`absolute flex items-center justify-center left-4 top-4 h-3.5 w-3.5 cursor-pointer rounded-full border-[1.5px] p-0 ${
            !selected
              ? 'border-[#E5E0DCCC] bg-white'
              : 'border-[#BD7828] bg-[#BD7828]'
          }`}
        >
          {selected && <Check className="text-white h-2 w-2" />}
        </button>

        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            aria-label={`More actions for ${p.title}`}
            onClick={() => onMenuClick?.(p.id)}
            className="p-0! m-0! absolute right-6 top-2 cursor-pointer  leading-none text-[#6b6560]"
          >
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border-[#E5E0DC] w-44 min-w-32">
          <DropdownMenuGroup>
            <DropdownMenuItem variant="default" className='hover:bg-[#BD7828] hover:text-white text-sm'>
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem variant="default" className='hover:bg-[#BD7828] hover:text-white text-sm'>
              <ExternalLink />
              View storefront
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="border border-[#F3F0ED]" />
          <DropdownMenuItem variant="destructive">
            <Trash2 />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>

        <div className="flex gap-6 pb-5 pl-10">
          <div
            className="relative box-border h-37 w-26.25 shrink-0 overflow-hidden rounded-[14px] p-3 text-white shadow-[0_6px_14px_rgba(0,0,0,.18)]"
            style={{
              backgroundImage: `linear-gradient(160deg, ${p.coverColors[0]}, ${p.coverColors[1]})`,
            }}
          >
            <span className="block max-w-17.5 font-serif text-[8px] text-white font-semibold leading-tight">
              {p.title}
            </span>
            {isProtected && (
              <span className="absolute right-2.5 top-2.5 leading-none opacity-60">
                <Lock className="h-3.5 w-3.5" />
              </span>
            )}
            <span className="absolute bottom-2.5 left-3 text-[6px] text-white/50 uppercase tracking-[0.08em] opacity-55">
              {p.category}
            </span>
          </div>

          <div className="min-w-0 flex-1 pr-7">
            <h3 className="m-0 font-serif text-sm font-semibold text-[#1D1816] leading-tight">
              {p.title}
            </h3>
            <p className="mb-3 mt-1.5 text-xs leading-[1.4] text-[#766860]">
              {p.description}
            </p>
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  `rounded-full px-3 py-1.25 text-[10px] font-medium`,
                  p.status === 'live' && 'bg-[#29654F1A] text-[#29654F]',
                  p.status === 'retired' && 'bg-[#F3F0ED] text-[#766860]',
                )}
              >
                {p.status === 'live' ? 'Live' : 'Retired'}
              </span>
              <span className="text-xs text-[#1D1816] font-semibold">
                {naira(p.price)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-y border-[#eeeae5] py-4">
          <ProductStat
            icon={<Eye size={14} />}
            value={p.views.toLocaleString('en-NG')}
            label="Views"
          />
          <ProductStat
            icon={<ShoppingBag size={14} />}
            value={p.buyers.toLocaleString('en-NG')}
            label="Buyers"
          />
          <ProductStat
            icon={isProtected ? <Lock size={14} /> : <Download size={14} />}
            value={isProtected ? 'Protected' : 'Download'}
            label="Delivery"
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="mb-1 text-[10px] text-[#766860]">
              Revenue · Conv
            </div>
            <div className="text-sm text-[#1D1816] font-semibold">
              {naira(p.revenue)} · {conversion(p.buyers, p.views)}
            </div>
          </div>
          <div className="text-right text-sm leading-normal text-[#7a736c]">
            <p className="text-[10px] text-[#766860]">Published</p>
            <p className="text-[10px] text-[#766860]">
              {formatDate(p.publishedAt)}
            </p>
          </div>
        </div>
      </article>
    </DropdownMenu>
  );
}
