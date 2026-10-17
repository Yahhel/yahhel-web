import type { Product } from "@/lib/dummy"
import { formatNaira } from "@/lib/utils"

export function CheckoutProductSummary({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-3 border-b-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED4D] px-6 py-4">
      <div
        className="flex h-14 w-10 shrink-0 items-center justify-center rounded-md p-1.5 text-[7px] font-semibold leading-tight text-white"
        style={{ backgroundImage: `linear-gradient(135deg, ${product.coverColors[0]}, ${product.coverColors[1]})` }}
      >
        {product.title}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-[#1D1816]">{product.title}</p>
        <p className="text-xs text-[#766860]">
          {product.category} · {product.delivery === "protected" ? "Protected reader" : "Download"}
        </p>
      </div>
      <span className="font-serif text-lg font-semibold text-[#1D1816]">{formatNaira(product.price)}</span>
    </div>
  )
}