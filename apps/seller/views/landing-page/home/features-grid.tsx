import { BarChart3, Globe, Lock, Shield, Sparkles, Wallet } from "lucide-react"
import { AnimatedHeading } from "@/components/motion/animated-heading"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const FEATURES = [
  {
    icon: Shield,
    title: "Built for trust",
    description:
      "Every protected title is watermarked with the buyer email, tile-overlaid, and copy-blocked. Refunds within 48 hours, no questions.",
  },
  {
    icon: Wallet,
    title: "Naira-native payments",
    description:
      "Paystack and Flutterwave with automatic failover. Transfer, USSD, mobile, and card — the way Nigerians actually pay.",
  },
  {
    icon: BarChart3,
    title: "Inspectable by both sides",
    description:
      "Every visit, every referral, every payout is visible to both the creator and the promoter. No hidden numbers.",
  },
  {
    icon: Sparkles,
    title: "Grounded AI assistant",
    description:
      "A content-aware AI chat grounded in the actual chapters of your product — it answers from the book, not the internet.",
  },
  {
    icon: Lock,
    title: "Anti-piracy deterrents",
    description:
      "Rotating email watermarks, disabled copy/select, and screenshot-resistant rendering keep your work yours.",
  },
  {
    icon: Globe,
    title: "Made for Africa",
    description:
      "Designed in Lagos for the Naira economy. Local categories, local payment rails, local promoter networks.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#BD7828]">Why Pager Sell</p>
        </FadeIn>
        <AnimatedHeading
          as="h2"
          className="mt-3 mx-auto font-serif text-3xl font-semibold text-[#1D1816] sm:text-4xl max-w-xl"
        >
          Premium protection, transparent economics.
        </AnimatedHeading>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="h-full rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#F7F0E9]">
                  <f.icon className="size-5 text-[#BD7828]" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#1D1816]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#766860]">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}