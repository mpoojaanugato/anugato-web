import { z } from 'zod'

export const leadSchema = z.object({
  first_name: z.string().trim().min(1, 'First name is required'),
  last_name: z.string().trim().min(1, 'Last name is required'),
  work_email: z.string().trim().email('Enter a valid work email'),
  phone: z.string().trim().optional().or(z.literal('')),
  company: z.string().trim().optional().or(z.literal('')),
  org_type: z.enum(['consulting_firm', 'in_house', 'other']).optional(),
  message: z.string().trim().optional().or(z.literal('')),
  source_page: z.string().trim().optional(),
  utm_source: z.string().trim().optional(),
  utm_medium: z.string().trim().optional(),
  utm_campaign: z.string().trim().optional()
})

export type LeadInput = z.infer<typeof leadSchema>

export const newsletterSchema = z.object({
  email: z.string().trim().email('Enter a valid email'),
  source_page: z.string().trim().optional()
})

export type NewsletterInput = z.infer<typeof newsletterSchema>
