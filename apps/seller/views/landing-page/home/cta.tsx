import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedHeading } from "@/components/motion/animated-heading"
import { FadeIn } from "@/components/motion/fade-in"

export function CTA() {
  return (
    <section className="px-6 pb-20 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-2xl border-[0.8px] border-[#E5E0DC99] [background:linear-gradient(135deg,rgba(247,240,233,0.6)_0%,rgba(252,249,247,0.8)_50%,#FFFFFF_100%),linear-gradient(0deg,#FFFFFF,#FFFFFF)] shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)] px-6 py-16 text-center">
        <AnimatedHeading
          as="h2"
          className="font-serif text-3xl font-semibold leading-tight text-[#1D1816] sm:text-4xl max-w-lg mx-auto"
        >
          Ready to turn your knowledge into income?
        </AnimatedHeading>
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-3 text-base max-w-lg text-[#766860]">
            Join the creator-commerce platform built for the Naira economy. Publish your first
            product today.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="flex items-center gap-1.5 rounded-xl bg-[#1D1816] px-4 py-2 text-sm font-medium text-[#FAF8F5]"
            >
              Get started free <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/store"
              className="flex items-center gap-1.5 rounded-xl border-[0.8px] border-[#E5E0DC] bg-white px-4 py-2 text-sm font-medium text-[#1D1816]"
            >
              Explore the store
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}