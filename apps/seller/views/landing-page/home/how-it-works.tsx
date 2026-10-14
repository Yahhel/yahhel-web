import { AnimatedHeading } from "@/components/motion/animated-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const STEPS = [
  {
    number: "01",
    title: "Create your product",
    description:
      "Use the no-code editor to add a title, cover, price, and chapters. Choose protected or download delivery.",
  },
  {
    number: "02",
    title: "Share your storefront",
    description: "Publish to your public storefront and generate affiliate links for promoters in seconds.",
  },
  {
    number: "03",
    title: "Get paid instantly",
    description:
      "Every sale splits automatically — creator take, platform fee, promoter commission — and lands in your wallet.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-[#F1EEE94D] border-y-[0.8px] border-[#E5E0DC99] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#BD7828]">How it works</p>
        </FadeIn>
        <AnimatedHeading
          as="h2"
          className="mt-3 font-serif text-3xl font-semibold text-[#1D1816] sm:text-4xl"
        >
          From idea to payout in three steps.
        </AnimatedHeading>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem key={s.number}>
              <div className="h-full rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
                <p className="font-serif text-3xl font-semibold text-[#BD78284D]">{s.number}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-[#1D1816]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#766860]">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}