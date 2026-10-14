import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { hero3 } from "@/constants/assets.constants"

export function Testimonial() {
  return (
    <section className="grid grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
      <FadeIn>
        <div className="overflow-hidden p-3 rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
          <Image
            src={hero3}
            alt="The Pager Sell team collaborating"
            width={800}
            height={650}
            className="h-full w-full object-cover"
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Quote className="font-serif size-8 text-[#E9C89A]" />
        <blockquote className="mt-4 font-serif text-2xl font-medium leading-snug text-[#1D1816] sm:text-3xl">
          &quot;We built Pager Sell so that every naira earned by a creator is traceable, every referral
          is fair, and every buyer is protected. No black boxes, just honest commerce.&quot;
        </blockquote>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] text-sm font-semibold text-white">
            PS
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1D1816]">The Pager Sell Team</p>
            <p className="text-xs text-[#766860]">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-[#BD7828] text-[#BD7828]" />
            ))}
          </div>
          <span className="text-sm text-[#766860]">Trusted by 1,200+ African creators</span>
        </div>
      </FadeIn>
    </section>
  )
}