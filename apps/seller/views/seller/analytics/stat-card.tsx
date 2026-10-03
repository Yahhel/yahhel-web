import { TrendingUp, type LucideIcon } from "lucide-react"

export function StatCard({
  icon: Icon,
  value,
  label,
  sublabel,
  change,
}: {
  icon: LucideIcon
  value: string
  label: string
  sublabel: string
  change: number
}) {
  return (
    <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex size-9 items-center justify-center rounded-xl bg-[#F7F0E9]">
          <Icon className="size-4 text-[#BD7828]" />
        </div>
        <span className="flex items-center gap-0.5 text-xs font-medium text-[#29654F]">
          <TrendingUp className="size-3" /> +{change}%
        </span>
      </div>
      <p className="mt-3 font-serif text-2xl font-semibold text-[#1D1816]">{value}</p>
      <p className="text-xs text-[#766860]">{label}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#766860B2]">{sublabel}</p>
    </div>
  )
}