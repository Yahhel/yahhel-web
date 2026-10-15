import z from 'zod';

const NAME_PART = /^[\p{L}]+(?:[-'’.][\p{L}]+)*$/u;

export const SignupSchema = z
  .object({
    fullname: z
      .string('Full name is required.')
      .trim()
      .min(1, 'Full name is required.')
      .refine((val) => val.split(/\s+/).length >= 2, {
        message: 'Please enter your first and last name.',
      })
      .refine((val) => val.split(/\s+/).every((part) => NAME_PART.test(part)), {
        message: 'Names can only contain letters, hyphens, and apostrophes.',
      }),

    email: z.email('Please enter a valid email address.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
      .regex(/[0-9]/, 'Password must contain at least one number.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

export type SignupFormInput = z.infer<typeof SignupSchema>;
