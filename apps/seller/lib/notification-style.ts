import { Bell, LifeBuoy, ShoppingBag, UserPlus, Wallet, type LucideIcon } from "lucide-react"
import type { NotificationCategory } from "@/lib/notifications"

type CategoryStyle = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  tagLabel: string
  tagBg: string
  tagColor: string
}

export const CATEGORY_STYLES: Record<NotificationCategory, CategoryStyle> = {
  support: {
    icon: LifeBuoy,
    iconBg: "#BD78281A",
    iconColor: "#B0693A",
    tagLabel: "Support",
    tagBg: "#BD78281A",
    tagColor: "#B0693A",
  },
  payout: {
    icon: Wallet,
    iconBg: "#29654F1A",
    iconColor: "#29654F",
    tagLabel: "Payout",
    tagBg: "#29654F1A",
    tagColor: "#29654F",
  },
  system: {
    icon: Bell,
    iconBg: "#BD78281A",
    iconColor: "#BD7828",
    tagLabel: "System",
    tagBg: "#29654F1A",
    tagColor: "#29654F",
  },
  purchase: {
    icon: ShoppingBag,
    iconBg: "#29654F1A",
    iconColor: "#29654F",
    tagLabel: "Purchase",
    tagBg: "#29654F1A",
    tagColor: "#29654F",
  },
  affiliate: {
    icon: UserPlus,
    iconBg: "#BD78281A",
    iconColor: "#BD7828",
    tagLabel: "Affiliate",
    tagBg: "#BD78281A",
    tagColor: "#BD7828",
  },
}

export const FILTER_TABS: { label: string; value: "all" | NotificationCategory }[] = [
  { label: "All", value: "all" },
  { label: "Purchases", value: "purchase" },
  { label: "Affiliate", value: "affiliate" },
  { label: "Support", value: "support" },
  { label: "Payouts", value: "payout" },
]