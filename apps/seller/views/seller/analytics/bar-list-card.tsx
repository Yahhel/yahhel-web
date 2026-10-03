export type BarListItem = {
    label: string
    value: number
    pct?: number
    rank?: number
  }
  
  export function BarListCard({
    title,
    subtitle,
    items,
    barColor = "#BD7828CC",
    maxValue,
    formatValue = (v: number) => v.toLocaleString("en-NG"),
  }: {
    title: string
    subtitle: string
    items: BarListItem[]
    barColor?: string
    maxValue?: number
    formatValue?: (v: number) => string
  }) {
    const max = maxValue ?? Math.max(...items.map((i) => i.value))
  
    return (
      <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
        <h3 className="font-serif text-base font-semibold text-[#1D1816]">{title}</h3>
        <p className="mt-0.5 text-xs text-[#766860]">{subtitle}</p>
  
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              {item.rank && (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F3F0ED] text-[10px] font-semibold text-[#766860]">
                  {item.rank}
                </span>
              )}
              <span className="w-16 shrink-0 text-xs text-[#1D1816] font-medium">{item.label}</span>
              <div className="h-6 flex-1 overflow-hidden rounded-[10px] bg-[#F3F0ED80]">
                <div
                  className="h-full rounded-[10px]"
                  style={{ width: `${(item.value / max) * 100}%`, backgroundColor: barColor }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-xs font-semibold text-[#1D1816]">
                {formatValue(item.value)}
              </span>
              {item.pct !== undefined && (
                <span className="shrink-0 text-right text-xs text-[#766860]">{item.pct}%</span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }