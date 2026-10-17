import { z } from "zod"

export const checkoutEmailSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
})

export type CheckoutEmailValues = z.infer<typeof checkoutEmailSchema>

export const PAYMENT_METHODS = [
  { value: "bank_transfer", label: "Bank Transfer", desc: "Pay via transfer to a virtual account", icon: "building" },
  { value: "ussd", label: "USSD", desc: "Dial a short code on any phone", icon: "hash" },
  { value: "mobile_money", label: "Mobile Money", desc: "OPay, PalmPay, Moniepoint", icon: "smartphone" },
  { value: "card", label: "Card", desc: "Verve, Visa, Mastercard", icon: "card" },
] as const

export type PaymentMethod = (typeof PAYMENT_METHODS)[number]["value"]