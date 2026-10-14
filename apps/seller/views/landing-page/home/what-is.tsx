import { Shield, Zap } from 'lucide-react';
import Image from 'next/image';

import { AnimatedHeading } from '@/components/motion/animated-heading';
import { FadeIn } from '@/components/motion/fade-in';
import { hero2 } from '@/constants/assets.constants';

export function WhatIsSection() {
  return (
    <section className="grid grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
      <FadeIn>
        <div className="overflow-hidden bg-white p-3 rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
          <Image
            src={hero2}
            alt="Creator's desk setup"
            width={800}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </FadeIn>

      <div>
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#BD7828]">
            What is Pager Sell?
          </p>
        </FadeIn>

        <AnimatedHeading
          as="h2"
          className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#1D1816] sm:text-4xl"
        >
          A marketplace, a studio, and a payout rail, in one platform.
        </AnimatedHeading>

        <FadeIn delay={0.3}>
          <p className="mt-5 text-base leading-relaxed text-[#766860]">
            Pager Sell lets African creators package their knowledge — essays,
            business playbooks, career guides, fiction — into digital products
            that buyers can purchase and read securely. Creators keep the
            lion&apos;s share of every sale, promoters earn commission for
            driving traffic, and buyers get protected, refundable content.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#766860]">
            Every transaction is recorded in a transparent ledger. Every
            referral is attributed. Every payout is inspectable by both sides of
            the deal.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex items-start gap-2.5">
              <div className="size-8 rounded-xl bg-[#F7F0E9] flex items-center justify-center">
                <Zap className="size-4 text-[#BD7828]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D1816]">
                  Publish in minutes
                </p>
                <p className="text-xs text-[#766860]">
                  No-code editor, instant storefront
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="size-8 rounded-xl bg-[#EBF4F1] flex items-center justify-center">
                <Shield className="size-4 text-[#29654F]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D1816]">
                  Protected by default
                </p>
                <p className="text-xs text-[#766860]">
                  Watermarks + copy-blocking
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
