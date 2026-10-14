import Link from "next/link"
import { ArrowRight, BookOpen, Check, Megaphone, Users } from "lucide-react"
import { AnimatedHeading } from "@/components/motion/animated-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const AUDIENCES = [
  {
    icon: BookOpen,
    title: "For Buyers",
    description:
      "Discover premium digital products from African creators. Read protected, watermarked content on any device with a 48-hour refund guarantee.",
    points: ["Instant access after payment", "Watermarked, copy-protected reader", "Pay with transfer, USSD, or card"],
  },
  {
    icon: Users,
    title: "For Creators",
    description:
      "Turn raw knowledge into a live, protected product. Build your storefront, track every visit, and withdraw earnings straight to your Nigerian bank account.",
    points: ["No-code product editor", "Full analytics & conversion funnel", "Instant payouts via NIP transfer"],
  },
  {
    icon: Megaphone,
    title: "For Promoters",
    description:
      "Earn commission on every sale you drive. Get unique tracking links, real-time attribution, and transparent payouts — no minimums, no gatekeeping.",
    points: ["Up to 30% commission", "30-day attribution window", "Fraud-protected tracking"],
  },
]

export function AudienceCards() {
  return (
    <section className="bg-[#F1EEE94D] border-y-[0.8px] border-[#E5E0DC99] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#BD7828]">Built for everyone</p>
        </FadeIn>
        <AnimatedHeading
          as="h2"
          className="mt-3 font-serif text-3xl font-semibold text-[#1D1816] sm:text-4xl"
        >
          One platform. Three ways to win.
        </AnimatedHeading>
        <FadeIn delay={0.3}>
          <p className="mx-auto text-base mt-3 max-w-2xl text-[#766860]">
            Whether you&apos;re buying knowledge, selling it, or spreading the word — Pager Sell has a
            role for you.
          </p>
        </FadeIn>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {AUDIENCES.map((a) => (
            <StaggerItem key={a.title}>
              <div className="flex h-full flex-col rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#F7F0E9]">
                  <a.icon className="size-5 text-[#BD7828]" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1D1816]">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#766860]">{a.description}</p>
                <ul className="mt-4 space-y-2">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#766860]">
                      <Check className="mt-1.5 size-3 shrink-0 rounded-full text-[#29654F]" /> {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="mt-7 flex items-center gap-1 text-sm font-medium text-[#BD7828] hover:underline"
                >
                  Learn more <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}