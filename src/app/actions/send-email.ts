'use server';

import { randomUUID } from 'crypto';
import { Resend } from 'resend';

import { contactFormSchema, sanitizeContactText, type ContactFormValues } from '@/lib/validations/contact';

export type ContactActionState = {
    status: 'idle' | 'success' | 'error';
    message: string;
    submissionId: string;
    fieldErrors: Partial<Record<keyof ContactFormValues, string>>;
};

export const initialContactActionState: ContactActionState = {
    status: 'idle',
    message: '',
    submissionId: '',
    fieldErrors: {}
};

const escapeHtml = (value: string) =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

const mapFieldErrors = (fieldErrors: Partial<Record<keyof ContactFormValues, string[] | undefined>>) => {
    const mapped: Partial<Record<keyof ContactFormValues, string>> = {};

    (Object.keys(fieldErrors) as Array<keyof ContactFormValues>).forEach((field) => {
        const message = fieldErrors[field]?.[0];

        if (message) {
            mapped[field] = message;
        }
    });

    return mapped;
};

export async function sendEmail(
    _previousState: ContactActionState,
    formData: FormData
): Promise<ContactActionState> {
    const submissionId = randomUUID();
    const parsed = contactFormSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!parsed.success) {
        return {
            status: 'error',
            message: 'Please correct the highlighted fields and try again.',
            submissionId,
            fieldErrors: mapFieldErrors(parsed.error.flatten().fieldErrors)
        };
    }

    const { honeypot } = parsed.data;
    const name = sanitizeContactText(parsed.data.name);
    const email = sanitizeContactText(parsed.data.email).toLowerCase();
    const message = sanitizeContactText(parsed.data.message);

    if (honeypot.trim().length > 0) {
        return {
            status: 'error',
            message: 'Unable to process this submission.',
            submissionId,
            fieldErrors: {}
        };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
        console.error('Missing RESEND_API_KEY or CONTACT_EMAIL environment variables.');

        return {
            status: 'error',
            message: 'Email service is temporarily unavailable. Please try again later.',
            submissionId,
            fieldErrors: {}
        };
    }

    try {
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [contactEmail],
            replyTo: email,
            subject: `Portfolio inquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                '',
                message
            ].join('\n'),
            html: `
                <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
                  <h2 style="margin: 0 0 12px; font-size: 20px;">New portfolio inquiry</h2>
                  <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
                  <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
                  <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc; white-space: pre-wrap;">${escapeHtml(message)}</div>
                </div>
            `
        });

        return {
            status: 'success',
            message: 'Message sent successfully. I will get back to you soon.',
            submissionId,
            fieldErrors: {}
        };
    } catch (error) {
        console.error('Failed to send contact email:', error);

        return {
            status: 'error',
            message: 'Something went wrong while sending your message. Please try again.',
            submissionId,
            fieldErrors: {}
        };
    }
}
