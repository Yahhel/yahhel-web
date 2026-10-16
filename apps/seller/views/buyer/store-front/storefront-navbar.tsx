'use client';

import {
  Bell,
  BookOpen,
  LayoutGrid,
  LifeBuoy,
  Search,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

import { Input } from '@repo/ui/components/ui/input';
import Image from 'next/image';
import { logo } from '@/constants/assets.constants';

export function StorefrontNavbar({
  hasUnread = true,
}: {
  hasUnread?: boolean;
}) {
  return (
    <header className="flex items-center gap-4 border-b-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5D9] px-6 py-3 lg:px-10">
      <Link href="/store" className="flex items-center gap-x-2 pl-4">
        <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-[#1D1816]">
          <Image alt="logo" src={logo} />
        </div>
        <div className="">
          <h2 className="font-serif font-semibold text-base text-[#1D1816] leading-5">
            Pager Sell
          </h2>
          <p className="text-[10px] text-[#766860] uppercase font-normal">
            Storefront
          </p>
        </div>
      </Link>

      <div className="relative mx-auto w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8A7B6E]" />
        <Input
          type="text"
          placeholder="Search titles, topics..."
          className="h-10 w-full rounded-lg border-[0.8px] border-[#E5E0DC99] bg-white pl-9 pr-4 text-sm placeholder:text-[] focus-visible:border-[#BD7828] focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-[#BD7828]"
        />
      </div>

      <nav className="flex shrink-0 items-center gap-5">
        <Link
          href="/library"
          className="hidden items-center gap-1.5 text-xs text-[#766860] font-medium hover:text-[#BD7828] sm:flex"
        >
          <BookOpen className="size-4" /> My Library
        </Link>

        <button
          type="button"
          aria-label="Notifications"
          className="relative text-[#766860] hover:text-[#BD7828]"
        >
          <Bell className="size-3.5" />
          {hasUnread && (
            <span className="absolute -right-1.5 -top-1 size-2 rounded-full bg-[#BD7828]" />
          )}
        </button>

        <Link
          href="/help"
          className="hidden items-center gap-1 text-xs font-medium text-[#766860] hover:text-[#BD7828] sm:flex"
        >
          <LifeBuoy className="size-4" /> Help
        </Link>

        <Link
          href="/seller/products"
          className="flex items-center gap-1.5 border-[0.8px] border-[#E5E0DC99] rounded-xl bg-white  px-4 py-2 text-xs font-medium text-[#1D1816]"
        >
          <LayoutGrid className="size-4" /> Become a Creator
        </Link>
      </nav>
    </header>
  );
}
