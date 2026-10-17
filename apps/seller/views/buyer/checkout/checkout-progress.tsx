import { cn } from "@repo/ui/lib/utils";

export function CheckoutProgress({ step, totalSteps = 4 }: { step: number; totalSteps?: number }) {
  return (
    <div className="flex gap-1.5 px-6 py-4">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={cn("h-1 flex-1 rounded-full", i < step ? "bg-[#BD7828]" : "bg-[#F3F0ED]")}
        />
      ))}
    </div>
  )
}