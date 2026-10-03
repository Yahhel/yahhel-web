"use client"

import * as React from "react"
import { Mail, MessageSquare } from "lucide-react"
import { Sheet, SheetContent } from "@repo/ui/components/ui/sheet"
import { formatNaira } from "@/lib/utils"
import { TIMELINE_DOT_COLORS } from "@/lib/timeline-styles"
import type { Contact, TimelineEvent } from "@/lib/contacts"

function initialsOf(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

type ContactDetailSheetProps = {
    contact: Contact | null
    open: boolean
    onOpenChange: (open: boolean) => void
  }

export function ContactDetailSheet({ contact, open, onOpenChange }: ContactDetailSheetProps) {
  const [message, setMessage] = React.useState("")

  React.useEffect(() => {
    if (contact) setMessage(`Hi ${contact.name.split(" ")[0]}, thanks for reading...`)
  }, [contact])

  if (!contact) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full gap-0 p-0 sm:max-w-104.75 bg-[#FFFFFF]">
        <div className="flex items-start gap-3 border-b border-[#F0EBE4] p-6">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#B0693A] text-sm font-semibold text-white">
            {initialsOf(contact.name)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-lg font-semibold text-[#1F1A17]">{contact.name}</p>
            <p className="text-sm text-[#6B5B4E]">{contact.email}</p>
            {contact.city && (
              <p className="mt-1 flex items-center gap-1 text-xs text-[#8A7B6E]">
                <span className="size-1.5 rounded-full bg-[#1A6B52]" /> {contact.city} · mobile
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-[#F0EBE4] border-b border-[#F0EBE4]">
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1F1A17]">{contact.purchases}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#8A7B6E]">Purchases</p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1F1A17]">{formatNaira(contact.ltv)}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#8A7B6E]">LTV</p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1F1A17]">{contact.sinceDays}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#8A7B6E]">Since</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-[#8A7B6E]">Timeline</p>
          <div className="mt-4 space-y-4">
            {contact.timeline.map((event) => (
              <div key={event.id} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: TIMELINE_DOT_COLORS[event.type] }}
                />
                <div>
                  <p className="text-sm text-[#1F1A17]">{event.label}</p>
                  <p className="text-xs text-[#8A7B6E]">{formatDate(event.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#F0EBE4] p-4">
          <div className="flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#1F1A17] py-2.5 text-sm font-medium text-white">
              <Mail className="size-3.5" /> Email
            </button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#E5E0DC] bg-white py-2.5 text-sm font-medium text-[#1F1A17]">
              <MessageSquare className="size-3.5" /> SMS
            </button>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            className="mt-3 w-full resize-none rounded-lg border border-[#E5E0DC] bg-[#FAF8F5] px-3 py-2.5 text-sm text-[#1F1A17] placeholder:text-[#8A7B6E] focus-visible:border-[#BD7828] focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-[#BD7828]"
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}