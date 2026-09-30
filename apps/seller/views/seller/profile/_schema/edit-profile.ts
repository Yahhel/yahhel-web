import { z } from "zod"

export const editProfileSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\s-]{7,15}$/, "Enter a valid phone number"),
  bio: z.string().trim().max(300, "Bio must be 300 characters or fewer").optional().or(z.literal("")),
})

export type EditProfileFormValues = z.infer<typeof editProfileSchema>