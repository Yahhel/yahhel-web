import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-xl border-[0.8px] border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D]  bg-transparent px-3 py-2 text-sm  transition-[color,box-shadow] outline-none placeholder:text-[#766860] placeholder:text-sm focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
