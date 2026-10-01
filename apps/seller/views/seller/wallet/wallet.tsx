"use client"

import { ArrowUpRight } from "lucide-react"
import { LedgerRow } from "./ledger-row"
import { LEDGER_ENTRIES, getWalletSummary } from "@/lib/wallet"
import { formatNaira } from "@/lib/utils"
import { Button } from "@repo/ui/components/ui/button"

export default function WalletScreen() {
  const summary = getWalletSummary(LEDGER_ENTRIES)

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-2xl font-semibold text-[#1D1816]">Wallet</h1>
        <p className="mt-1 text-sm text-[#766860]">
          Ledger-based · balance = sum of all entries · payouts to Nigerian bank
        </p>

        <div className="mt-6 flex items-center justify-between rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-[linear-gradient(135deg,#FFFFFF_0%,rgba(253,252,250,0.65)_50%,rgba(251,248,245,0.475)_75%,rgba(247,240,233,0.3)_100%)] p-6 shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#766860]">Available balance</p>
            <p className="mt-1 font-serif text-4xl font-semibold text-[#1D1816]">
              {formatNaira(summary.balance)}
            </p>
            <p className="mt-2 text-sm text-[#766860]">
              Earned {formatNaira(summary.earned)} · Withdrawn {formatNaira(summary.withdrawn)} · Refunds{" "}
              {formatNaira(summary.refunds)}
            </p>
          </div>
          <Button className="h-11 text-sm font-medium">
            <ArrowUpRight className="size-4" /> Withdraw to bank
          </Button>
        </div>

        <div className="mt-6 rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A]">
          <div className="flex items-center justify-between border-b-[0.8px] border-[#F0EBE4] py-4 px-6">
            <h2 className="font-serif text-base font-semibold text-[#1D1816]">Ledger</h2>
            <span className="text-xs text-[#766860]">Immutable · append-only</span>
          </div>

          <div className="divide-y-[0.5px] divide-[#E5E0DC66]">
            {LEDGER_ENTRIES.map((entry) => (
              <LedgerRow key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}