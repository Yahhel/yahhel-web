import type { LucideIcon } from "lucide-react"


export type FunnelStep = {
  label: string
  value: number
  pct: number
  dropoff: number | null
  color: string
  icon?: {
    iconName: LucideIcon;
    tagColor: string;
    tagBg: string;
  }
}

export function FunnelBar({ step, large }: { step: FunnelStep; large?: boolean }) {
  const Icon = step.icon?.iconName

  return (
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{backgroundColor: step.icon?.tagBg}}>
          <Icon className="size-4" style={{color: step.icon?.tagColor}} />
        </div>
      )}
      <span className={large ? "w-24.5 shrink-0 text-xs font-medium text-[#1D1816]" : "w-26 shrink-0 text-xs font-medium text-[#1D1816]"}>
        {step.label}
      </span>
      <div className="h-9 flex-1 overflow-hidden rounded-xl bg-[#F3F0ED80]">
        <div
          className="flex h-full items-center justify-end-safe rounded-xl px-3 text-[11px] font-medium text-white"
          style={{ width: `${Math.max(step.pct, 6)}%`, backgroundColor: step.color }}
        >
          {step.value.toLocaleString("en-NG")}
        </div>
      </div>
      <span className="w-8 shrink-0 text-right text-xs text-[#766860]">{step.pct}%</span>
    </div>
  )
}