import { z } from "zod"

export const generateLinkSchema = z.object({
  productId: z.string().min(1, "Select a product"),
  label: z.string().trim().min(1, "Label is required").max(60, "Label is too long"),
  promoterEmail: z.string().trim().min(1, "Promoter email is required").email("Enter a valid email"),
  promoterName: z.string().trim().min(1, "Promoter name is required"),
  commission: z.number().min(0).max(30, "Commission cannot exceed 30%"),
  attributionWindow: z.enum(["7d_first", "30d_first", "30d_last", "90d_first"]),
})

export type GenerateLinkValues = z.infer<typeof generateLinkSchema>