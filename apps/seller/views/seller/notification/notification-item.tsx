import { CATEGORY_STYLES } from "@/lib/notification-style"
import type { Notification } from "@/lib/notifications"
import { cn } from "@repo/ui/lib/utils"

export function NotificationItem({ notification }: { notification: Notification }) {
  const style = CATEGORY_STYLES[notification.category]
  const Icon = style.icon

  return (
    <div className={cn("flex items-start gap-4 rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(189,120,40,0.2)]",
      notification.read && "shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
    )}>
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: style.iconBg }}
      >
        <Icon className="size-4" style={{ color: style.iconColor }} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-sm font-semibold text-[#1D1816]">{notification.title}</h3>
        <p className="mt-1 text-xs text-[#766860]">{notification.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[10px] text-[#766860B2]">{notification.timestamp}</span>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-medium"
            style={{ backgroundColor: style.tagBg, color: style.tagColor }}
          >
            {style.tagLabel}
          </span>
        </div>
      </div>

      {!notification.read && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#BD7828]" />}
    </div>
  )
}