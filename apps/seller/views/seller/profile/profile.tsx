'use client';

import {
  ArrowLeft,
  BookOpen,
  Eye,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/constants/assets.constants';
import { getCreatorStats } from '@/lib/creator';
import { products } from '@/lib/dummy';
import { formatCompactNumber } from '@/lib/utils';

import { Button } from '@repo/ui/components/ui/button';

import { StorefrontProductCard } from '../storefront-preview/preview-product-card';

const SOCIALS = [
  { icon: Twitter, label: '@oopeoluwa', href: '#' },
  { icon: Instagram, label: '@oopeoluwa', href: '#' },
  { icon: Linkedin, label: 'O-Opeoluwa', href: '#' },
  { icon: Globe, label: 'oopeoluwa.com', href: '#' },
];

const ProfileScreen = () => {
  const stats = getCreatorStats();
  const liveProducts = products.filter((p) => p.status === 'live');

  const Stats = [
    {
      icon: BookOpen,
      value: formatCompactNumber(stats.productCount),
      label: 'Products',
      color: '#BD7828',
    },
    {
      icon: Users,
      value: formatCompactNumber(stats.buyerCount),
      label: 'Buyers',
      color: '#29654F',
    },
    {
      icon: Eye,
      value: formatCompactNumber(stats.viewCount),
      label: 'Views',
      color: '#BD7828',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="sticky top-0 z-50 w-full h-[64.8px] border-b-[0.8px] border-b-[#E5E0DC99] bg-white/95">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 h-16">
          <Link
            href="/seller/analytics"
            className="flex items-center gap-1.5 text-sm text-[#766860] hover:text-[#1F1A17]"
          >
            <ArrowLeft className="size-4" /> Back to dashboard
          </Link>
          <div className="flex items-center gap-3.5">
            <Link
              href="/seller/storefront-preview"
              className="flex items-center gap-1.5 text-xs text-[#766860] hover:text-[#1F1A17]"
            >
              <Eye className="size-4" /> Storefront preview
            </Link>
            <Button className="rounded-xl bg-[#1D1816] py-2 text-xs font-medium text-[#FAF8F5] h-8">
              Edit profile
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-start gap-5">
          <div className="flex size-32 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <span className="text-white text-4xl font-semibold font-serif">
              OO
            </span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-[#F7F0E9] px-2.5 py-1 text-[11px] font-medium text-[#BD7828]">
              <Image
                alt="logo"
                height={10}
                width={10}
                src={logo}
                style={{
                  filter:
                    'invert(50%) sepia(57%) saturate(584%) hue-rotate(352deg) brightness(89%) contrast(91%)',
                }}
              />
              Creator
            </div>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-[#1D1816]">
              O. Opeoluwa
            </h1>
            <p className="mt-1 max-w-lg text-sm text-[#766860]">
              Writer, builder, and creator of digital playbooks for the Naira
              economy. I turn hard-won lessons into books that actually ship.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="flex items-center gap-1.5 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white px-3 py-1.5 hover:bg-[#FAF8F5]"
                >
                  <Icon className="size-3.5 text-[#766860]" />{' '}
                  <span className="text-xs text-[#1D1816] font-medium">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {Stats.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-xl border-[0.8px] h-27 border-[#E5E0DC99] bg-white text-center shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A]"
            >
              <Icon className="mx-auto mb-2 size-4" style={{ color }} />
              <p className="font-serif text-2xl font-semibold text-[#1D1816]">
                {value}
              </p>
              <p className="text-[11px] text-[#766860]">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-[#1D1816]">
            All products
          </h2>
          <Link
            href="/seller/storefront-preview"
            className="text-xs text-[#BD7828] hover:underline"
          >
            View storefront ↗
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {liveProducts.map((product) => (
            <StorefrontProductCard
              key={product.id}
              product={product}
              showLike={false}
              actionLabel="View details"
              actionIcon="external"
            />
          ))}
        </div>
      </div>

      <div className="border-t-[0.8px] border-[#E5E0DC99] px-6 py-10 text-center bg-[#F3F0ED33]">
        <p className="text-sm text-[#766860]">
          Want books like these in your inbox?
        </p>
        <Link
          href="/seller/storefront-preview"
          className="mt-3 inline-block rounded-xl bg-[#1D1816] px-5 py-3  text-sm font-medium text-[#FAF8F5]"
        >
          Browse the storefront
        </Link>
      </div>
    </div>
  );
};

export default ProfileScreen;
