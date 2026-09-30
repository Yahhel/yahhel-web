"use client"

import * as React from "react"
import { Camera } from "lucide-react"
import { cn } from "@repo/ui/lib/utils"
import Image from "next/image"

type AvatarUploadProps = {
  id: string
  initials: string
  value: File | null
  onChange: (file: File | null) => void
  className?: string
}

export function AvatarUpload({ id, initials, value, onChange, className }: AvatarUploadProps) {
  const previewUrl = React.useMemo(() => (value ? URL.createObjectURL(value) : null), [value])

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <div className={cn("relative size-20 shrink-0", className)}>
      <input
        id={id}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onChange(file)
          e.target.value = ""
        }}
      />
      <label
        htmlFor={id}
        className="flex size-20 cursor-pointer items-center justify-center overflow-hidden rounded-full text-lg font-semibold text-white"
        style={
          previewUrl
            ? undefined
            : { backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)" }
        }
      >
        {previewUrl ? (
          <Image src={previewUrl} alt="" className="size-full object-cover"  height={64} width={64}/>
        ) : (
          initials
        )}
      </label>
      <label
        htmlFor={id}
        className="absolute -bottom-0.5 -right-0.5 flex size-6 cursor-pointer items-center justify-center rounded-full bg-[#1F1A17] text-white ring-2 ring-white"
      >
        <Camera className="size-3" />
      </label>
    </div>
  )
}