"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"
import { ReviewCard } from "./review-card"
import { StarRating } from "./star-rating"
import { REVIEWS, getReviewStats } from "@/lib/reviews"
import { Input } from "@repo/ui/components/ui/input"

type VisibilityFilter = "all" | "visible" | "hidden"

export default function ReviewsManagerScreen() {
  const [reviews, setReviews] = React.useState(REVIEWS)
  const [filter, setFilter] = React.useState<VisibilityFilter>("all")
  const [query, setQuery] = React.useState("")

  const stats = React.useMemo(() => getReviewStats(reviews), [reviews])

  const visibleReviews = reviews.filter((r) => {
    const matchesFilter =
      filter === "all" ? true : filter === "visible" ? r.visible : !r.visible
    const matchesQuery =
      query.trim() === "" ||
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.body.toLowerCase().includes(query.toLowerCase()) ||
      r.buyerName.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesQuery
  })

  const toggleVisibility = (id: string) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, visible: !r.visible } : r)))
  }

  const handleReply = (id: string) => {
    console.log(id)
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-2xl font-semibold text-[#1D1816]">Reviews Manager</h1>
        <p className="mt-1 text-sm text-[#766860]">
          Moderate, reply to, and manage buyer feedback across your storefronts
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A] bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-[#766860]">Avg. rating</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-[#1D1816]">
                {stats.avgRating.toFixed(1)}
              </span>
              <StarRating rating={stats.avgRating} />
            </div>
          </div>
          <div className="rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A] bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-[#766860]">Total reviews</p>
            <p className="mt-2 font-serif text-2xl font-semibold text-[#1D1816]">{stats.total}</p>
          </div>
          <div className="rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A] bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-[#766860]">Visible</p>
            <p className="mt-2 font-serif text-2xl font-semibold text-[#29654F]">{stats.visible}</p>
          </div>
          <div className="rounded-2xl border-[0.8px] border-[#E5E0DC99] shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A] bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-[#766860]">Awaiting reply</p>
            <p className="mt-2 font-serif text-2xl font-semibold text-[#BD7828]">{stats.awaitingReply}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Tabs value={filter} onValueChange={(v) => setFilter(v as VisibilityFilter)}>
            <TabsList className="gap-2 bg-transparent p-0">
              {(["all", "visible", "hidden"] as const).map((v) => (
                <TabsTrigger
                  key={v}
                  value={v}
                  className="px-4 py-1.5 capitalize"
                >
                  {v}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search reviews..."
            className="h-10 flex-1 rounded-lg border-[0.8px] border-[#E5E0DC99] bg-white px-4 text-sm placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-[0.8px] focus-visible:ring-[#BD7828]"
          />
        </div>

        <div className="mt-6 space-y-4">
          {visibleReviews.length === 0 ? (
            <p className="py-12 text-center text-sm text-[#8A7B6E]">No reviews match your filters.</p>
          ) : (
            visibleReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onToggleVisibility={toggleVisibility}
                onReply={handleReply}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}