"use client"
import { useState } from "react"

import { ArrowRight, Download, Heart, Lock } from "lucide-react"
import { cn } from "@repo/ui/lib/utils"
import type { Product } from "@/lib/dummy"
import { Button } from "@repo/ui/components/ui/button"

export function StorefrontProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false)
  
    return (
      <div className="flex gap-4">
        <div
          className="flex h-60 w-44 shrink-0 flex-col justify-between rounded-lg p-3 text-white shadow-sm"
          style={{
            backgroundImage: `linear-gradient(135deg, ${product.coverColors[0]}, ${product.coverColors[1]})`,
          }}
        >
          {product.delivery === "protected" && <Lock className="ml-auto size-3.5 text-white/70" />}
          <div className="flex flex-col justify-between h-full">
            <p className="font-serif text-sm font-semibold leading-tight">{product.title}</p>
            <p className="text-[9px] font-medium uppercase tracking-wider text-white/45">{product.category}</p>
          </div>
        </div>
  
        <div className="flex min-w-0 flex-1 flex-col pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#766860]">{product.category}</p>
              <h3 className="font-serif text-lg font-semibold leading-snug text-[#1D1816]">
                {product.title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Save"
              aria-pressed={liked}
              onClick={() => setLiked((v) => !v)}
              className={cn("shrink-0 text-[#766860]",
                liked && "rounded-full p-2.5 bg-[#D3222226]"
              )}
            >
              <Heart className={cn("size-4", liked && "text-[#D32222] fill-[#D32222]")} />
            </button>
          </div>
  
          <p className="mt-1.5 line-clamp-2 text-xs text-[#766860]">{product.description}</p>
  
          <div className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-[#1D1816]">
            ₦{product.price.toLocaleString("en-NG")}
            <span className="flex items-center gap-1 text-xs font-normal text-[#766860]">
              {product.delivery === "protected" ? (
                <>
                  <Lock className="size-3" /> protected
                </>
              ) : (
                <>
                  <Download className="size-3" /> download
                </>
              )}
            </span>
          </div>
  
          <Button
            type="button"
            variant="ghost"
            className="mt-1.5 p-0! h-auto w-fit justify-start gap-1 text-xs text-[#766860] hover:text-[#1F1A17]"
          >
            Read summary <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    )
  }