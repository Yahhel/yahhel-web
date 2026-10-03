"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Copy } from "lucide-react"
import type { AffiliateLink } from "@/lib/affiliate"
import { formatNaira } from "@/lib/utils"
import { cn } from "@repo/ui/lib/utils"

export const affiliateColumns: ColumnDef<AffiliateLink>[] = [
  {
    accessorKey: "label",
    header: "Link",
    cell: ({ row }) => (
      <div>
        <p className="text-xs font-medium text-[#1D1816]">{row.original.label}</p>
        <p className="font-mono text-[10px] text-[#766860]">{row.original.ref}</p>
      </div>
    ),
  },
  {
    accessorKey: "promoter",
    header: "Promoter",
    cell: ({ row }) => <span className="text-xs text-[#766860]">{row.original.promoter}</span>,
  },
  {
    accessorKey: "commission",
    header: () => <div className="text-right">Comm.</div>,
    cell: ({ row }) => (
      <div className="text-right text-xs font-semibold text-[#1D1816]">{row.original.commission}%</div>
    ),
  },
  {
    accessorKey: "clicks",
    header: () => <div className="text-right">Clicks</div>,
    cell: ({ row }) => <div className="text-right text-xs text-[#766860]">{row.original.clicks.toLocaleString("en-NG")}</div>,
  },
  {
    accessorKey: "conversions",
    header: () => <div className="text-right">Conv.</div>,
    cell: ({ row }) => <div className="text-right text-xs text-[#1D1816]">{row.original.conversions}</div>,
  },
  {
    accessorKey: "revenue",
    header: () => <div className="text-right">Revenue</div>,
    cell: ({ row }) => (
      <div className="text-right text-xs font-semibold text-[#1D1816]">{formatNaira(row.original.revenue)}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={cn(
          "rounded-full px-2.5 py-1 text-[10px] font-medium",
          row.original.status === "active" ? "bg-[#29654F1A] text-[#29654F]" : "bg-[#BD78281A] text-[#BD7828]"
        )}
      >
        {row.original.status === "active" ? "Active" : "Paused"}
      </span>
    ),
  },
  {
    id: "share",
    header: "",
    cell: ({ row }) => (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          navigator.clipboard.writeText(`https://oopeoluwa.pager.sell${row.original.ref}`)
        }}
        aria-label="Copy link"
        className="rounded-md p-1.5 text-[#766860] hover:bg-[#FAF8F5] hover:text-[#1F1A17]"
      >
        <Copy className="size-3.5" />
      </button>
    ),
  },
]