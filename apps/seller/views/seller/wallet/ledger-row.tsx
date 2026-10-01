import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

import type { LedgerEntry } from "@/lib/wallet"
import { cn } from "@repo/ui/lib/utils"
import { formatNaira } from "@/lib/utils"

export function LedgerRow({ entry }: { entry: LedgerEntry }) {
  const isCredit = entry.amount > 0

  return (
    <div className="flex items-center justify-between gap-4 py-4 px-6">
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full",
            isCredit ? "bg-[#29654F1A] text-[#29654F]" : "bg-[#D322221A] text-[#D32222]"
          )}
        >
          {isCredit ? <ArrowDownLeft className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#1D1816]">{entry.title}</p>
          <p className="text-xs text-[#766860]">
            {entry.reference} · {entry.date}
          </p>
        </div>
      </div>

      <span
        className={cn(
          "shrink-0 text-sm font-semibold",
          isCredit ? "text-[#29654F]" : "text-[#D32222] line-through decoration-[1.5px]"
        )}
      >
        {isCredit ? "+" : "−"}
        {formatNaira(Math.abs(entry.amount))}
      </span>
    </div>
  )
}