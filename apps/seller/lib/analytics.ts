import { CheckCircle2, Eye, MessageCircle, ShoppingCart } from "lucide-react"

export type TimeRange = "7d" | "30d" | "90d" | "all"

export const SUMMARY_STATS = {
  visits: { value: 21480, change: 12.4 },
  buyers: { value: 1293, change: 8.7 },
  conversion: { value: 6.0, change: 0.3 },
  revenue: { value: 2_470_000, change: 15.2 },
}

export const TRAFFIC_SERIES = [
  { date: "29 Jul", visits: 420, buyers: 18 },
  { date: "2 Aug", visits: 610, buyers: 22 },
  { date: "6 Aug", visits: 540, buyers: 20 },
  { date: "10 Aug", visits: 580, buyers: 24 },
  { date: "14 Aug", visits: 460, buyers: 19 },
  { date: "18 Aug", visits: 720, buyers: 28 },
  { date: "22 Aug", visits: 810, buyers: 31 },
  { date: "26 Aug", visits: 790, buyers: 30 },
  { date: "28 Aug", visits: 770, buyers: 29 },
]

export const BUYER_FUNNEL = [
  { label: "Storefront", value: 21480, pct: 100, dropoff: 58, color: "#1A6B52" },
  { label: "Product page", value: 9120, pct: 42.5, dropoff: 62, color: "#C8893A" },
  { label: "Checkout", value: 3480, pct: 16.2, dropoff: 63, color: "#C8893A" },
  { label: "Paid", value: 1293, pct: 6, dropoff: null, color: "#A0522D" },
]

export const AI_CHAT_FUNNEL = [
  { label: "Product views", value: 21504, pct: 100, dropoff: 78, color: "#1A6B52" },
  { label: "Chatted with AI", value: 4730, pct: 22, dropoff: 64, color: "#7C5CBF" },
  { label: "Opened checkout", value: 1726, pct: 8, dropoff: 48, color: "#C8893A" },
  { label: "Purchased", value: 898, pct: 4.2, dropoff: null, color: "#1A6B52" },
]

export const AI_CHAT_FUNNEL_ICONS = [
  {
    iconName: Eye,
    tagColor: '#1A6B52',
    tagBg: '#1A6B5215',
  },
  {
    iconName: MessageCircle,
    tagColor: '#7C5CBF',
    tagBg: '#7C5CBF15',
  },
  {
    iconName: ShoppingCart,
    tagColor: '#C8893A',
    tagBg: '#C8893A15',
  },
  {
    iconName: CheckCircle2,
    tagColor: '#1A6B52',
    tagBg: '#1A6B5215',
  },
];

export const AI_CHAT_SUMMARY = {
  lift: 2.7,
  chatAssistedRate: 19.0,
  chatAssistedOf: { count: 898, total: 4730 },
  withoutChatRate: 3.6,
  withoutChatOf: { count: 597, total: 16774 },
  chatRevenue: 3_771_600,
}

export const TRAFFIC_SOURCES = [
  { label: "WhatsApp", value: 6840, pct: 31.9 },
  { label: "Twitter", value: 5120, pct: 23.8 },
  { label: "Direct", value: 4280, pct: 19.9 },
  { label: "Instagram", value: 2640, pct: 12.3 },
  { label: "Newsletter", value: 1600, pct: 7.5 },
  { label: "Search", value: 720, pct: 3.4 },
  { label: "Paid", value: 280, pct: 1.2 },
]

export const CHANNEL_SOURCE = [
  { label: "Social", value: 9480 },
  { label: "Direct", value: 4280 },
  { label: "Referral", value: 3840 },
  { label: "Email", value: 2800 },
  { label: "Search", value: 800 },
  { label: "Paid", value: 280 },
]

export const DEVICE_BREAKDOWN = [
  { label: "Mobile", value: 68, color: "#C8893A" },
  { label: "Desktop", value: 24, color: "#1A6B52" },
  { label: "Tablet", value: 8, color: "#D6CFC4" },
]

export const BROWSER_BREAKDOWN = [
  { label: "Chrome", pct: 52 },
  { label: "Safari", pct: 31 },
  { label: "Others", pct: 17 },
]

export const TOP_LOCATIONS = [
  { city: "Lagos", value: 8920 },
  { city: "Abuja", value: 3640 },
  { city: "Port Harcourt", value: 2480 },
  { city: "Kano", value: 1920 },
  { city: "Ibadan", value: 1640 },
  { city: "Enugu", value: 880 },
]

export const TOP_REFERRERS = [
  { host: "t.co", source: "Twitter", visits: 5120, buyers: 312 },
  { host: "wa.me", source: "WhatsApp", visits: 6840, buyers: 487 },
  { host: "fluxa.ng", source: "Newsletter", visits: 1600, buyers: 124 },
  { host: "google.com", source: "Search", visits: 720, buyers: 38 },
  { host: "instagram.com", source: "Instagram", visits: 2640, buyers: 156 },
]

export const TOP_LINKS = [
  { product: "Building for Nigeria", views: 8434, conversion: 5.8, revenue: 1_171_200 },
  { product: "The Quiet Engineer", views: 5214, conversion: 6.0, revenue: 563_400 },
  { product: "Naira, Dust, and Time", views: 2893, conversion: 5.4, revenue: 499_200 },
  { product: "Letters to a Young Writer", views: 3141, conversion: 6.3, revenue: 237_600 },
  { product: "How to become a billionaire", views: 2, conversion: 0.0, revenue: 0 },
]

export const TOP_AFFILIATE_LINKS = [
  { ref: "?ref=wa-group-3b2", promoter: "Chika Okonkwo", conversion: 3.9, commission: 240 },
  { ref: "?ref=chika-nl-2a1", promoter: "Chika Okonkwo", conversion: 5.4, commission: 1260 },
  { ref: "?ref=chika-wa-8f3", promoter: "Chika Okonkwo", conversion: 5.6, commission: 21432 },
  { ref: "?ref=techcabal-editorial", promoter: "Ifeoma Nwafor", conversion: 5.3, commission: 0 },
]