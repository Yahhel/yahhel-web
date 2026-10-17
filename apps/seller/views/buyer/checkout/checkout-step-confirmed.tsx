"use client"

import { Check, Shield } from "lucide-react"
import type { Product } from "@/lib/dummy"
import { formatNaira } from "@/lib/utils"
import { Button } from "@repo/ui/components/ui/button"

export function CheckoutStepConfirmed({
  product,
  email,
  orderRef,
  onDone,
}: {
  product: Product
  email: string
  orderRef: string
  onDone: () => void
}) {
  return (
    <div className="px-6 pb-6">
      <div className="flex flex-col items-center pt-5 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-[#29654F1A]">
          <Check className="size-6 text-[#29654F]" />
        </div>
        <h2 className="mt-4 font-serif text-xl font-semibold text-[#1D1816]">Payment confirmed</h2>
        <p className="mt-1 text-sm text-[#766860]">
          A receipt and access link were sent to <span className="font-medium text-[#1D1816]">{email}</span>
        </p>
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-[#F3F0ED66] p-4 text-xs">
        <div className="flex justify-between text-[#766860]">
          <span>Order ref</span>
          <span className="font-mono text-[#1D1816]">{orderRef}</span>
        </div>
        <div className="flex justify-between text-[766860]">
          <span>Product</span>
          <span className="text-[#1D1816] font-medium">{product.title}</span>
        </div>
        <div className="flex justify-between text-[766860]">
          <span>Amount</span>
          <span className="text-[#1D1816] font-medium decoration-[1.5px]">{formatNaira(product.price)}</span>
        </div>
        <div className="flex justify-between text-[766860]">
          <span>Delivery</span>
          <span className="text-[#1D1816] font-medium">{product.delivery === "protected" ? "Protected Reader" : "Download"}</span>
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#29654F]">
        <Shield className="size-3" /> 48-hour refund window active
      </p>

      <Button
        type="button"
        onClick={onDone}
        className="mt-5 w-full"
      >
        Done
      </Button>
    </div>
  )
}