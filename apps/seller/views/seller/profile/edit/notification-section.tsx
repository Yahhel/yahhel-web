"use client"

import * as React from "react"
import { Switch } from "@repo/ui/components/ui/switch"
import { cn } from "@repo/ui/lib/utils"
import { Button } from "@repo/ui/components/ui/button"

type NotificationSetting = {
  key: "purchaseNotifications" | "marketingUpdates"
  title: string
  description: string
}

const NOTIFICATION_SETTINGS: NotificationSetting[] = [
  {
    key: "purchaseNotifications",
    title: "Purchase notifications",
    description: "Email me when a reader buys one of my products.",
  },
  {
    key: "marketingUpdates",
    title: "Marketing & product updates",
    description: "Tips, feature announcements, and platform news. No more than one email per week.",
  },
]

export function NotificationsSection() {
  const [preferences, setPreferences] = React.useState<Record<NotificationSetting["key"], boolean>>({
    purchaseNotifications: true,
    marketingUpdates: false,
  })

  const [isSaving, setIsSaving] = React.useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // await your API call with `preferences`
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
        {NOTIFICATION_SETTINGS.map((setting, i) => (
          <div
            key={setting.key}
            className={cn(
              "flex items-start justify-between gap-4 p-6",
              i !== NOTIFICATION_SETTINGS.length - 1 && "border-b-[0.8px] border-[#E5E0DC99]"
            )}
          >
            <div>
              <h3 className="font-serif text-base font-semibold text-[#1D1816]">{setting.title}</h3>
              <p className="mt-1 max-w-md text-xs text-[#766860]">{setting.description}</p>
            </div>
            <Switch
              checked={preferences[setting.key]}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, [setting.key]: checked }))
              }
              aria-label={setting.title}
              className='data-[state=checked]:bg-[#29654F]'
            />
          </div>
        ))}
      </div>

      <Button
        type="button"
        onClick={handleSave}
        disabled={isSaving}
        className="rounded-xl bg-[#1D1816] px-5 py-2.5 disabled:opacity-50 h-10"
      >
        {isSaving ? "Saving…" : "Save preferences"}
      </Button>
    </div>
  )
}