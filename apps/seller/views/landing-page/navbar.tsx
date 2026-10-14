import { Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/constants/assets.constants';

const NAV_LINKS = [
  { label: 'For Buyers', href: '#' },
  { label: 'For Creators', href: '#' },
  { label: 'For Promoters', href: '#' },
  { label: 'Storefront', href: '#' },
  { label: 'Support', href: '#' },
];

export function Navbar() {
  return (
    <header className="flex items-center justify-between border-b-[0.8px] border-[#E5E0DC66] bg-[#FAF8F5D9] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-[#1D1816]">
          <Image alt="logo" src={logo} />
        </div>
        <span className="font-serif text-lg font-semibold text-[#1D1816]">
          Pager Sell
        </span>
      </Link>

      <nav className="hidden items-center gap-7 lg:flex">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              i === 0
                ? 'text-sm font-medium text-[#BD7828]'
                : 'text-sm text-[#766860] hover:text-[#1D1816]'
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/signin" className="hidden text-sm text-[#766860] sm:inline">
          Log in
        </Link>
        <Link
          href="/store"
          className="flex items-center gap-1.5 rounded-xl bg-[#1D1816] px-4 py-2 text-sm font-medium text-[#FAF8F5]"
        >
          <Store className="size-3.5" /> Browse the store
        </Link>
      </div>
    </header>
  );
}
