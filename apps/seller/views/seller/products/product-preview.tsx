"use client"

import * as React from "react"
import { Eye, Lock } from "lucide-react"
import Image from "next/image"
import { cn } from "@repo/ui/lib/utils"
import { getCoverGradient } from "@/lib/utils"

type ProductPreviewProps = {
  cover: File | null
  color: string
  protectedMode?: boolean
  category?: string
  title?: string
  subtitle?: string
  price?: number | string
  className?: string
}

export function ProductPreview({
  cover,
  color,
  protectedMode = true,
  category = "Business",
  title = "Your title here",
  subtitle = "Your subtitle goes here",
  price = 0,
  className,
}: ProductPreviewProps) {
  const coverUrl = React.useMemo(
    () => (cover ? URL.createObjectURL(cover) : null),
    [cover]
  )

  React.useEffect(() => {
    return () => {
      if (coverUrl) URL.revokeObjectURL(coverUrl)
    }
  }, [coverUrl])

  const formattedPrice = `₦${(Number(price) || 0).toLocaleString("en-NG")}`

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#766860]">
        <Eye className="size-3.5" /> Live preview
      </span>

      <div className="w-45">
        <div
          className="relative aspect-3/4 w-full overflow-hidden rounded-2xl text-white shadow-[0px_8px_24px_0px_#0000001F]"
          style={coverUrl ? undefined : { backgroundImage: getCoverGradient(color) }}
        >
          {coverUrl && (
            <>
              <Image
                src={coverUrl}
                alt=""
                width={100}
                height={100}          
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/20" />
            </>
          )}

          <div className="relative flex h-full flex-col justify-between p-4">
            <div className="flex items-start justify-between">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/70 font-medium">
                {category}
              </span>
              {protectedMode && <Lock className="size-3.5 text-white/50" />}
            </div>

            <div className="space-y-1">
              <h3 className="line-clamp-2 font-serif text-sm text-white font-semibold leading-tight">
                {title}
              </h3>
              <p className="line-clamp-2 text-[9px] leading-snug text-white/60">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-base font-semibold text-[#1D1816]">
          {formattedPrice}
        </p>
      </div>
    </div>
  )
}