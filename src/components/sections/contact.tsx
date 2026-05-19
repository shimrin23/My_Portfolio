'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Sparkles, ShieldCheck, Clock3 } from 'lucide-react';

import SectionHeading from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/forms/contact-form';
import { siteConfig } from '@/lib/seo';
import { fadeScale, fadeUp, pageFadeIn, sectionStagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const quickLinks = [
    {
        label: 'GitHub',
        href: siteConfig.github,
        icon: Github,
        external: true
    },
    {
        label: 'Email',
        href: siteConfig.email,
        icon: Mail,
        external: false
    }
] as const;

export function Contact() {
    return (
        <motion.section
            id="contact"
            className="section-padding relative overflow-hidden"
            variants={pageFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            <div className="absolute -left-20 top-24 -z-10 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-secondary/10 blur-3xl" />

            <div className="container relative">
                <SectionHeading
                    eyebrow="Contact"
                    title={<>Let&apos;s build something dependable, secure, and useful</>}
                    description={
                        <>
                            If you&apos;re hiring for engineering, cloud, DevOps, cybersecurity, or AI-focused roles,
                            send a message and I&apos;ll respond with context and clarity.
                        </>
                    }
                />

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <motion.aside variants={fadeUp} className="space-y-6">
                        <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8">
                            <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                                    <span className="mr-2 inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)]" />
                                    Available for internships and full-time roles
                                </Badge>
                            </div>

                            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                Responsive communication with engineering depth.
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                I prefer direct conversations about scope, constraints, and outcomes. Whether you need a
                                project collaborator or a candidate who can handle product, infrastructure, and security
                                concerns, I&apos;m happy to discuss fit.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur dark:bg-slate-950/35">
                                    <div className="flex items-center gap-3">
                                        <Clock3 className="size-4 text-primary" />
                                        <span className="text-sm font-medium text-foreground">Typical response time</span>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">1-2 business days</p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur dark:bg-slate-950/35">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="size-4 text-secondary" />
                                        <span className="text-sm font-medium text-foreground">Secure handling</span>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">Server-side submission only</p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {quickLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Button
                                            key={item.label}
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="rounded-full border-white/15 bg-white/60 px-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-950/35"
                                        >
                                            <a
                                                href={item.href}
                                                target={item.external ? '_blank' : undefined}
                                                rel={item.external ? 'noreferrer' : undefined}
                                                aria-label={item.label}
                                            >
                                                <Icon className="size-4" />
                                                <span className="ml-2">{item.label}</span>
                                            </a>
                                        </Button>
                                    );
                                })}

                                {siteConfig.linkedin ? (
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border-white/15 bg-white/60 px-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-950/35"
                                    >
                                        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="size-4" />
                                            <span className="ml-2">LinkedIn</span>
                                        </a>
                                    </Button>
                                ) : null}
                            </div>
                        </div>

                        <motion.div variants={fadeScale} className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8">
                            <div className="flex items-center gap-3">
                                <Sparkles className="size-4 text-primary" />
                                <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">Quick note</p>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                I value concise briefs. If possible, include your team context, preferred timeline, and any
                                constraints around technology, security, or deployment.
                            </p>
                        </motion.div>
                    </motion.aside>

                    <motion.div variants={fadeScale} className="relative">
                        <div className={cn('glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8')}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
                            <div className="relative">
                                <div className="mb-6">
                                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">Send a message</p>
                                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                        Start the conversation
                                    </h2>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Contact;
