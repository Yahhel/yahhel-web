import { z } from "zod"

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type ChangePasswordValues = z.infer<typeof changePasswordSchema>

export const changeEmailSchema = z.object({
  newEmail: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
})

export type ChangeEmailValues = z.infer<typeof changeEmailSchema>