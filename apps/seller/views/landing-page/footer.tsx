import { Lock, Mail, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/constants/assets.constants';

const PLATFORM_LINKS = [
  'For Buyers',
  'For Creators',
  'For Promoters',
  'Browse Store',
];
const ACCOUNT_LINKS = [
  'Log in',
  'Sign up',
  'Support',
  'Creator Studio',
  'Feedback Portal',
  'Terms & Policies',
];

export function Footer() {
  return (
    <footer className="border-t-[0.8px] border-[#E5E0DC99] px-6 py-14 lg:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-[#1D1816]">
              <Image alt="logo" src={logo} />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-[#1D1816]">
                Pager Sell
              </p>
              <p className="text-[10px] uppercase tracking-wide text-[#766860]">
                Creator Commerce · ₦
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#766860] font-normal">
            The creator-commerce platform built for the Naira economy, where
            knowledge becomes a protected, sellable product.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-[#766860]">
            <span className="flex items-center gap-1">
              <Shield className="size-3.5 text-[#29654F]" /> NDPR-compliant
            </span>
            <span className="flex items-center gap-1">
              <Lock className="size-3.5 text-[#BD7828]" /> Watermarked
            </span>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#766860]">
            Platform
          </p>
          <ul className="mt-3 space-y-2">
            {PLATFORM_LINKS.map((l) => (
              <li key={l}>
                <Link
                  href="#"
                  className="text-sm text-[#766860] hover:text-[#1D1816]"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#766860]">
            Account
          </p>
          <ul className="mt-3 space-y-2">
            {ACCOUNT_LINKS.map((l) => (
              <li key={l}>
                <Link
                  href="#"
                  className="text-sm text-[#766860] hover:text-[#1D1816]"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#766860]">
            Get in touch
          </p>
          <div className="mt-3 space-y-2 text-sm text-[#766860]">
            <p className="flex items-center gap-1.5">
              <Mail className="size-3.5" /> hello@pagersell.ng
            </p>
            <p>Lagos · Nigeria</p>
            <p>Mon – Fri · 9am – 6pm WAT</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl border-t border-[#F0EBE4] pt-6">
        <p className="text-xs text-[#766860]">
          © 2026 Pager Sell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
