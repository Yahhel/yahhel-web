"use client"

import * as React from "react"
import { X, type LucideIcon } from "lucide-react"
import { cn } from "@repo/ui/lib/utils"
import Image from "next/image"

type FileUploadProps = {
  id: string
  icon: LucideIcon
  title: string
  hint?: string
  accept?: string
  value: File | null
  onChange: (file: File | null) => void
  preview?: boolean
  className?: string
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function FileUpload({
  id,
  icon: Icon,
  title,
  hint,
  accept,
  value,
  onChange,
  preview = false,
  className,
}: FileUploadProps) {
  const [dragging, setDragging] = React.useState(false)

  const previewUrl = React.useMemo(
    () => (preview && value ? URL.createObjectURL(value) : null),
    [preview, value]
  )

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        type="file"
        accept={accept}
        className="peer sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onChange(file)
          e.target.value = "" 
        }}
      />

      <label
        htmlFor={id}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          const file = e.dataTransfer.files?.[0]
          if (file) onChange(file)
        }}
        className={cn(
          "flex h-27.5 w-full cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-xl border-[1.6px] border-dashed border-[#E5E0DC99] px-4 text-center transition-colors",
          "hover:bg-[#FAF8F5] peer-focus-visible:ring-[3px] peer-focus-visible:ring-ring/50",
          dragging && "border-[#C8873A] bg-[#FDF8F2]",
          value && "border-solid"
        )}
      >
        {previewUrl ? (
          <Image src={previewUrl} alt="" height={100} width={100} className="h-full w-full object-cover" />
        ) : value ? (
          <>
            <Icon className="size-5 text-[#6B5B4E]" />
            <span className="max-w-full truncate text-xs font-medium text-[#3A2F27]">
              {value.name}
            </span>
            <span className="text-[10px] text-[#8A7B6E]">{formatSize(value.size)}</span>
          </>
        ) : (
          <>
            <Icon className="size-5 text-[#766860]" />
            <span className="text-xs font-medium text-[#766860]">{title}</span>
            {hint && <span className="text-[10px] text-[#766860]">{hint}</span>}
          </>
        )}
      </label>

      {value && (
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-label="Remove file"
          className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  )
}