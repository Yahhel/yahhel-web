"use client"

import { useState } from "react"
import { ArrowLeft, Building2, CreditCard, Hash, Shield, Smartphone } from "lucide-react"
import type { Product } from "@/lib/dummy"
import { PAYMENT_METHODS, type PaymentMethod } from "./_schema/checkout.schema"
import { formatNaira } from "@/lib/utils"
import { cn } from "@repo/ui/lib/utils"
import { Button } from "@repo/ui/components/ui/button"

const ICONS = { building: Building2, hash: Hash, smartphone: Smartphone, card: CreditCard }

export function CheckoutStepPayment({
  product,
  onBack,
  onPay,
}: {
  product: Product
  onBack: () => void
  onPay: (method: PaymentMethod) => void
}) {
  const [method, setMethod] = useState<PaymentMethod>("bank_transfer")

  const platformFeePct = 4
  const platformFee = Math.round(product.price * (platformFeePct / 100))
  const youPay = product.price // fee is absorbed by the creator, not added on top — matches your screenshot's "You pay" equaling list price

  return (
    <div className="px-6 pb-6">
      <h2 className="font-serif text-base font-semibold text-[#1D1816]">Choose a payment method</h2>
      <p className="mt-1 text-xs text-[#766860]">Secured by Paystack · Flutterwave fallback</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {PAYMENT_METHODS.map((m) => {
          const Icon = ICONS[m.icon]
          const active = method === m.value
          return (
            <button
              key={m.value}
              type="button"
              onClick={() => setMethod(m.value)}
              className={cn(
                "flex flex-col items-start gap-1.5 rounded-xl border-[0.8px] p-4 text-left",
                active ? "border-[#BD7828] bg-[#F7F0E980] ring-1 ring-[#BD7828]/30" : "border-[#E5E0DC99] bg-white hover:bg-[#FAF8F5]"
              )}
            >
              <Icon className={cn("size-4.5", active ? "text-[#BD7828]" : "text-[#766860]")} />
              <span className="text-sm font-medium text-[#1D1816]">{m.label}</span>
              <span className="text-[10px] text-[#766860]">{m.desc}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-[#F3F0ED66] p-4 text-xs">
        <div className="flex justify-between text-[#766860]">
          <span>Price</span>
          <span className="text-[#1D1816]">{formatNaira(product.price)}</span>
        </div>
        <div className="flex justify-between text-[#6B5B4E]">
          <span>Platform fee ({platformFeePct}%)</span>
          <span className="text-[#1D1816]">{formatNaira(platformFee)}</span>
        </div>
        <div className="flex justify-between border-t-[0.8px] border-[#E5E0DC99] pt-1.5 text-sm font-semibold text-[#1D1816]">
          <span>You pay</span>
          <span>{formatNaira(youPay)}</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={() => onPay(method)}
        className="mt-4 w-full"
      >
        <Shield className="size-4" /> Pay {formatNaira(youPay)}
      </Button>

      <Button
        type="button"
        variant="ghost"
        onClick={onBack}
        className="w-full font-normal  text-[#766860] hover:text-[#1F1A17]"
      >
        <ArrowLeft className="size-3.5" /> Back to email
      </Button>
    </div>
  )
}