'use client';

import { ArrowRight, Check, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { AnimatedHeading } from '@/components/motion/animated-heading';
import { FadeIn } from '@/components/motion/fade-in';
import { hero1, logo } from '@/constants/assets.constants';

const CHECKS = ['No setup fee', 'Instant payouts', 'NDPR-compliant'];

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
      <div>
        <FadeIn>
          <div className="inline-flex items-center gap-1 rounded-full bg-[#F7F0E9] px-2.5 py-1 text-xs font-medium text-[#BD7828]">
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
            Creator commerce for the Naira economy
          </div>
        </FadeIn>

        <AnimatedHeading
          as="h1"
          className="mt-5 font-serif text-4xl font-semibold text-[#1D1816] sm:text-5xl lg:text-6xl"
          delay={0.15}
        >
          Turn raw knowledge into a{' '}
          <span className="text-[#BD7828] italic">live, protected</span>{' '}
          product.
        </AnimatedHeading>

        <FadeIn delay={0.5}>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#766860]">
            Pager Sell is the creator-commerce platform built for Africa.
            Publish digital products, protect them with watermarks, and let
            promoters earn — all in Naira, all inspectable.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/store"
              className="flex items-center gap-1.5 rounded-xl bg-[#1D1816] px-5 py-3 text-sm font-medium text-[#FAF8F5]"
            >
              Browse the store <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-1.5 rounded-lg border-[0.8px] border-[#E5E0DC] bg-white px-5 py-3 text-sm font-medium text-[#1D1816]"
            >
              Start selling <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-6 flex flex-wrap gap-5">
            {CHECKS.map((c) => (
              <span
                key={c}
                className="flex items-center gap-1.5 text-xs text-[#766860]"
              >
                <Check className="size-3.5 text-[#3D7A5F]" /> {c}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="p-3 bg-white overflow-hidden rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
          <Image
            src={hero1}
            alt="Creator working on a laptop"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -bottom-8 -left-6 flex items-center gap-3 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white px-4 py-3 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-[#29654F1A]">
            <TrendingUp className="size-5 text-[#29654F]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1D1816]">₦2.47M</p>
            <p className="text-[11px] text-[#766860]">Lifetime GMV</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
