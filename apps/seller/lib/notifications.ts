export type NotificationCategory = "purchase" | "affiliate" | "support" | "payout" | "system"

export type Notification = {
  id: string
  category: NotificationCategory
  title: string
  description: string
  timestamp: string
  read: boolean
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    category: "support",
    title: "New support request",
    description: 'A buyer asked about a refund for "The Naira Playbook" — reply within 24h.',
    timestamp: "2h ago",
    read: false,
  },
  {
    id: "2",
    category: "payout",
    title: "Payout processed",
    description: "₦150,000 sent to GTBank ****4231 · PAY_A002",
    timestamp: "8h ago",
    read: true,
  },
  {
    id: "3",
    category: "system",
    title: "Weekly performance summary",
    description: "Your storefront had 1,240 visits and 87 buyers this week — up 12% from last week.",
    timestamp: "1d ago",
    read: true,
  },
  {
    id: "4",
    category: "purchase",
    title: "New purchase: The Quiet Engineer",
    description: "cxxcbcxb bought for ₦1,800 via mobile",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "5",
    category: "purchase",
    title: "New purchase: Building for Nigeria",
    description: "dsbsdfbs bought for ₦2,400 via mobile",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "6",
    category: "purchase",
    title: "New purchase: Building for Nigeria",
    description: "Amara Eze bought for ₦2,400 via transfer",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "7",
    category: "purchase",
    title: "New purchase: Building for Nigeria",
    description: "Funke Adebayo bought for ₦2,400 via card",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "8",
    category: "purchase",
    title: "New purchase: Naira, Dust, and Time",
    description: "Zainab Bello bought for ₦3,200 via mobile",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "9",
    category: "purchase",
    title: "New purchase: The Quiet Engineer",
    description: "Ngozi Okafor bought for ₦1,800 via transfer",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "10",
    category: "purchase",
    title: "New purchase: The Quiet Engineer",
    description: "Chika Okonkwo bought for ₦1,800 via transfer",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "11",
    category: "purchase",
    title: "New purchase: Building for Nigeria",
    description: "Kemi Adeleke bought for ₦2,400 via ussd",
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "12",
    category: "affiliate",
    title: "Affiliate link created: Instagram launch · self-promo",
    description: 'Ada Nwosu (self) is promoting "Naira, Dust, and Time" at 0% commission',
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "13",
    category: "affiliate",
    title: "Affiliate link created: WhatsApp group · general",
    description: 'Chika Okonkwo is promoting "Letters to a Young Writer" at 10% commission',
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "14",
    category: "affiliate",
    title: "Affiliate link created: Chika · Newsletter feature",
    description: 'Chika Okonkwo is promoting "The Quiet Engineer" at 15% commission',
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "15",
    category: "affiliate",
    title: "Affiliate link created: Chika · WhatsApp launch",
    description: 'Chika Okonkwo is promoting "Building for Nigeria" at 20% commission',
    timestamp: "3d ago",
    read: false,
  },
  {
    id: "16",
    category: "affiliate",
    title: "Affiliate link created: TechCabal editorial · Ifeoma",
    description: 'Ifeoma Nwafor is promoting "Building for Nigeria" at 0% commission',
    timestamp: "3d ago",
    read: false,
  },
]