import z from "zod";

export const ResetPasswordFormSchema = z.object({
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Please enter a valid email address.')
  });

  export type ResetPasswordFormInput = z.infer<typeof ResetPasswordFormSchema>;