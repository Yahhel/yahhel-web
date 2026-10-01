"use client"

import { Eye, EyeOff, Reply } from "lucide-react"
import { StarRating } from "./star-rating"
import type { Review } from "@/lib/reviews"
import { cn } from "@repo/ui/lib/utils"
import { Button } from "@repo/ui/components/ui/button"

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function ReviewCard({
  review,
  onToggleVisibility,
  onReply,
}: {
  review: Review
  onToggleVisibility: (id: string) => void
  onReply: (id: string) => void
}) {
  return (
    <div className={cn("flex items-start justify-between gap-6 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A] p-6",
        !review.visible && "opacity-40"
    )}>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] text-xs font-semibold text-white">
            {initialsOf(review.buyerName)}
          </div>
          <span className="font-medium text-[#1D1816] text-sm">{review.buyerName}</span>
          <StarRating rating={review.rating} />
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-medium",
              review.visible ? "bg-[#29654F1A] text-[#29654F]" : "bg-[#F3F0ED] text-[#766860]"
            )}
          >
            {review.visible ? "visible" : "hidden"}
          </span>
        </div>

        <p className="mt-1 pl-11.5 text-xs text-[#766860]">
          on <span className="font-medium text-[#1D1816CC]">{review.productTitle}</span> · {review.date}
        </p>

        <div className="mt-3 pl-[46px]">
          <h3 className="text-sm font-semibold text-[#1D1816] font-serif">{review.title}</h3>
          <p
            className={cn(
              "mt-1.5 text-sm leading-relaxed text-[#766860]",
              review.visible ? "text-[#766860]" : "text-[#766860]"
            )}
          >
            {review.body}
          </p>

          {review.reply && (
            <div className="mt-3 border-l-[1.6px] border-[#BD78284D] pl-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#BD7828]">
                Your reply
              </p>
              <p className="mt-1 text-sm text-[#1D1816CC]">{review.reply}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <Button
          type="button"
          onClick={() => onReply(review.id)}
          className="h-[29.6px] gap-1.5 rounded-xl text-xs border-[0.8px] border-[#E5E0DC99] bg-white px-3.5 py-2  text-[#1D1816] hover:bg-[#FAF8F5]"
        >
          <Reply className="size-3.5" /> {review.reply ? "Edit" : "Reply"}
        </Button>
        <Button
          type="button"
          onClick={() => onToggleVisibility(review.id)}
          className={cn(
            "h-7 flex gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium",
            review.visible
              ? "bg-[#F3F0ED] text-[#766860] hover:bg-[#F0EBE4]"
              : "bg-[#29654F1A] text-[#29654F] hover:bg-[#E1EEE6]"
          )}
        >
          {review.visible ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
          {review.visible ? "Hide" : "Show"}
        </Button>
      </div>
    </div>
  )
}