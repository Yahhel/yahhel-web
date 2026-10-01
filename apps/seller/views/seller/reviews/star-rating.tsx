import { cn } from "@repo/ui/lib/utils";
import { Star } from "lucide-react"

export function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size === "sm" ? "size-3.5" : "size-5",
            i < Math.round(rating) ? "fill-[#BD7828] text-[#BD7828]" : "text-[#D8D2CB]"
          )}
        />
      ))}
    </div>
  )
}