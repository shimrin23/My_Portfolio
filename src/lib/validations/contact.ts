import { z } from 'zod';

export const sanitizeContactText = (value: string) =>
    value
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

export const contactFormSchema = z
    .object({
        name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(80, 'Name must be at most 80 characters.'),
        email: z.string().trim().email('Enter a valid email address.').max(254, 'Email must be at most 254 characters.'),
        message: z.string().trim().min(20, 'Message must be at least 20 characters.').max(3000, 'Message must be at most 3000 characters.'),
        honeypot: z.string().default('')
    })
    .superRefine((value, ctx) => {
        if (value.honeypot.trim().length > 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Spam detected.',
                path: ['honeypot']
            });
        }
    });

export type ContactFormValues = z.input<typeof contactFormSchema>;

