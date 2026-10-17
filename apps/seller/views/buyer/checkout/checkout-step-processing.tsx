"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export function CheckoutStepProcessing({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(onComplete, 1500) // replace with real payment confirmation polling
    return () => clearTimeout(timeout)
  }, [onComplete])

  return (
    <div className="flex flex-col items-center gap-4 px-6 pb-12 pt-6 text-center">
      <Loader2 className="size-8 animate-spin text-[#BD7828]" />
      <div>
        <p className="font-semibold text-[#1D1816]">Confirming payment…</p>
        <p className="mt-1 text-xs text-[#766860]">This usually takes a few seconds.</p>
      </div>
    </div>
  )
}