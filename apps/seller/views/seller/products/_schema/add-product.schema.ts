import { z } from 'zod';

const numericString = (label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .refine((v) => !isNaN(Number(v)), `${label} must be a number`);

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(100, 'Title must be 100 characters or fewer'),

  subtitle: z
    .string()
    .trim()
    .max(150, 'Subtitle must be 150 characters or fewer')
    .optional()
    .or(z.literal('')),

  // URL slug (e.g. "opeoluwa-the-super-hero"), not a full website URL
  urlSlug: z
    .string()
    .trim()
    .min(1, 'URL slug is required')
    .max(80, 'Slug must be 80 characters or fewer')
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Use lowercase letters, numbers, and hyphens only (e.g. my-product-name)',
    ),

  price: numericString('Price').refine(
    (v) => Number(v) > 0,
    'Price must be greater than 0',
  ),

  category: z.string().trim().min(1, 'Category is required'),

  chapters: numericString('Chapters')
    .refine(
      (v) => Number.isInteger(Number(v)),
      'Chapters must be a whole number',
    )
    .refine((v) => Number(v) >= 1, 'Must have at least 1 chapter'),

  salesCopy: z
    .string()
    .trim()
    .max(2000, 'Sales copy must be 2000 characters or fewer')
    .optional()
    .or(z.literal('')),
});

export type ProductFormValues = z.infer<typeof productSchema>;
