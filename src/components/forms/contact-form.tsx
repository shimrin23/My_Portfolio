'use client';

import * as React from 'react';
import { useActionState, useEffect, useId, useRef } from 'react';
import { Loader2, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    initialContactActionState,
    sendEmail,
    type ContactActionState
} from '@/app/actions/send-email';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { cn } from '@/lib/utils';

const defaultValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
    honeypot: ''
};

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) {
        return null;
    }

    return (
        <p id={id} className="mt-1 text-xs text-destructive" role="alert">
            {message}
        </p>
    );
}

export function ContactForm() {
    const nameId = useId();
    const emailId = useId();
    const messageId = useId();
    const honeypotId = useId();
    const formRef = useRef<HTMLFormElement | null>(null);
    const lastSubmissionIdRef = useRef('');

    const [actionState, formAction, isPending] = useActionState<ContactActionState, FormData>(
        sendEmail,
        initialContactActionState
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
        reset
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues,
        mode: 'onTouched'
    });

    useEffect(() => {
        if (!actionState.submissionId || actionState.submissionId === lastSubmissionIdRef.current) {
            return;
        }

        lastSubmissionIdRef.current = actionState.submissionId;
        clearErrors();

        Object.entries(actionState.fieldErrors).forEach(([field, message]) => {
            if (message) {
                setError(field as keyof ContactFormValues, {
                    type: 'server',
                    message
                });
            }
        });

        if (actionState.status === 'success') {
            toast.success(actionState.message);
            reset(defaultValues);
            formRef.current?.reset();
            return;
        }

        toast.error(actionState.message);
    }, [actionState, clearErrors, reset, setError]);

    const submitForm = handleSubmit((values) => {
        const formData = new FormData();

        formData.set('name', values.name);
        formData.set('email', values.email);
        formData.set('message', values.message);
        formData.set('honeypot', values.honeypot ?? '');

        formAction(formData);
    });

    return (
        <form
            ref={formRef}
            action={formAction}
            onSubmit={(event) => {
                event.preventDefault();
                void submitForm(event);
            }}
            className="space-y-5"
            noValidate
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor={nameId} className="text-sm font-medium text-foreground">
                        Name
                    </label>
                    <Input
                        id={nameId}
                        {...register('name')}
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? `${nameId}-error` : undefined}
                    />
                    <FieldError id={`${nameId}-error`} message={errors.name?.message} />
                </div>

                <div className="space-y-2">
                    <label htmlFor={emailId} className="text-sm font-medium text-foreground">
                        Email
                    </label>
                    <Input
                        id={emailId}
                        {...register('email')}
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? `${emailId}-error` : undefined}
                    />
                    <FieldError id={`${emailId}-error`} message={errors.email?.message} />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor={messageId} className="text-sm font-medium text-foreground">
                    Message
                </label>
                <Textarea
                    id={messageId}
                    {...register('message')}
                    rows={7}
                    placeholder="Tell me about your project, role, or collaboration idea..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? `${messageId}-error` : undefined}
                    className="resize-none"
                />
                <FieldError id={`${messageId}-error`} message={errors.message?.message} />
            </div>

            <div className="sr-only" aria-hidden="true">
                <label htmlFor={honeypotId}>Leave this field empty</label>
                <Input id={honeypotId} tabIndex={-1} autoComplete="off" {...register('honeypot')} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className={cn('text-sm text-muted-foreground', actionState.status === 'error' && !Object.keys(actionState.fieldErrors).length ? 'text-destructive' : '')}>
                    {actionState.status === 'error' && !Object.keys(actionState.fieldErrors).length
                        ? actionState.message
                        : 'I typically respond within 1-2 business days.'}
                </p>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="group rounded-full px-6 shadow-[0_18px_40px_rgba(37,99,235,0.22)]"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 size-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send message
                            <Send className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}

export default ContactForm;
