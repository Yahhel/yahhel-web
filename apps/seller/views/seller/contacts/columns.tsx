"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Contact } from "@/lib/contacts"
import { formatNaira } from "@/lib/utils"

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export const contactColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "Contact",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] text-xs font-semibold text-white">
          {initialsOf(row.original.name)}
        </div>
        <div>
          <p className="text-sm font-medium text-[#1D1816]">{row.original.name}</p>
          <p className="text-xs text-[#766860]">{row.original.email}</p>
        </div>
      </div>
    ),
    filterFn: (row, _id, value: string) => {
      const q = value.toLowerCase()
      return (
        row.original.name.toLowerCase().includes(q) || row.original.email.toLowerCase().includes(q)
      )
    },
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => <span className="text-sm text-[#766860]">{row.original.city ?? "—"}</span>,
  },
  {
    accessorKey: "purchases",
    header: () => <div className="text-right">Purchases</div>,
    cell: ({ row }) => <div className="text-right text-sm text-[#1D1816]">{row.original.purchases}</div>,
  },
  {
    accessorKey: "ltv",
    header: () => <div className="text-right">LTV</div>,
    cell: ({ row }) => (
      <div className="text-right text-sm font-semibold text-[#1D1816]">
        {row.original.ltv === 0 ? (
          <span className="line-through decoration-[1.5px]">₦0</span>
        ) : (
          formatNaira(row.original.ltv)
        )}
      </div>
    ),
  },
  {
    accessorKey: "lastActive",
    header: () => <div className="text-right">Last Active</div>,
    cell: ({ row }) => (
      <div className="text-right text-xs text-[#766860]">{formatDate(row.original.lastActive)}</div>
    ),
  },
]