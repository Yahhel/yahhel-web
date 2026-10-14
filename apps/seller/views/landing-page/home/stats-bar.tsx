import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const STATS = [
  { value: "₦2.4M+", label: "Creator GMV" },
  { value: "18,000", label: "Active buyers" },
  { value: "1,200+", label: "Promoters" },
  { value: "48h", label: "Refund window" },
]

export function StatsBar() {
  return (
    <section className="border-y-[0.8px] border-[#E5E0DC99] bg-[#F1EEE94D] px-6 py-10 lg:px-10">
      <StaggerGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <StaggerItem key={s.label}>
            <p className="font-serif text-3xl font-semibold text-[#BD7828]">{s.value}</p>
            <p className="mt-1 text-sm text-[#766860]">{s.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}