"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowDown,
    ArrowRight,
    Cloud,
    Code2,
    Github,
    Globe,
    Linkedin,
    Mail,
    ShieldCheck,
    Sparkles,
    TerminalSquare
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedGrid } from '@/components/effects/animated-grid';
import {
    fadeScale,
    fadeUp,
    floatingIcon,
    pageFadeIn,
    scrollPulse,
    sectionStagger
} from '@/lib/motion';
import { siteConfig } from '@/lib/seo';
import { cn } from '@/lib/utils';

type SocialLink = {
    label: string;
    href: string;
    icon: typeof Github;
};

const floatingTech = [
    { icon: Code2, label: 'Full-Stack', className: 'left-8 top-10' },
    { icon: ShieldCheck, label: 'Security', className: 'right-10 top-20' },
    { icon: Cloud, label: 'Cloud', className: 'left-12 bottom-24' },
    { icon: TerminalSquare, label: 'DevOps', className: 'right-16 bottom-14' }
] as const;

const socialLinks: SocialLink[] = [
    {
        label: 'GitHub',
        href: siteConfig.github,
        icon: Github
    },
    {
        label: 'Email',
        href: siteConfig.email,
        icon: Mail
    }
];

const resumeHref = siteConfig.resumeUrl;

function TechOrb({
    icon: Icon,
    label,
    className,
    delay
}: {
    icon: typeof Code2;
    label: string;
    className: string;
    delay: number;
}) {
    return (
        <motion.div
            variants={floatingIcon(delay)}
            className={cn(
                'absolute flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-slate-50 shadow-lg shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/25',
                className
            )}
            aria-hidden="true"
        >
            <Icon className="size-3.5 text-cyan-300" />
            <span>{label}</span>
        </motion.div>
    );
}

export function Hero() {
    return (
        <motion.section
            id="hero"
            className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
            variants={pageFadeIn}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute inset-0 -z-10 bg-background" />
            <AnimatedGrid />

            <div className="container relative z-10">
                <motion.div
                    className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
                    variants={sectionStagger}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col items-start">
                        <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-medium">
                                <span className="mr-2 inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]" />
                                Available for internships and full-time opportunities
                            </Badge>
                            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                                University of Ruhuna, Sri Lanka
                            </Badge>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur"
                        >
                            <Sparkles className="size-4" />
                            Computer Engineering Undergraduate | Full-Stack Developer | Cybersecurity & AI Enthusiast
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
                        >
                            Building secure, scalable systems with modern web, cloud, and intelligent software engineering.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
                        >
                            Passionate Computer Engineering undergraduate focused on building scalable software systems,
                            secure applications, AI-powered solutions, and cloud-native infrastructures.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base"
                        >
                            I combine full-stack engineering discipline, cybersecurity awareness, DevOps thinking, and a
                            research-driven mindset to deliver work that is practical, resilient, and easy for teams to trust.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Button asChild size="lg" className="group rounded-full px-6 shadow-[0_18px_40px_rgba(37,99,235,0.25)]">
                                <Link href="#projects" aria-label="View featured projects">
                                    View Projects
                                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="group rounded-full border-white/15 px-6 backdrop-blur-xl dark:border-white/10">
                                <Link href={resumeHref || '#contact'} target="_blank" rel="noreferrer" aria-label="Download resume">
                                    Download Resume
                                    <ArrowDown className="ml-2 size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" size="lg" className="rounded-full px-6">
                                <Link href="#contact" aria-label="Jump to contact section">
                                    Contact Me
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Button
                                        key={social.label}
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full border-white/15 bg-white/60 px-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-950/40"
                                    >
                                        <a href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={social.label}>
                                            <Icon className="size-4" />
                                            <span className="ml-2">{social.label}</span>
                                        </a>
                                    </Button>
                                );
                            })}
                            {siteConfig.linkedin ? (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full border-white/15 bg-white/60 px-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-950/40"
                                >
                                    <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <Linkedin className="size-4" />
                                        <span className="ml-2">LinkedIn</span>
                                    </a>
                                </Button>
                            ) : null}
                        </motion.div>
                    </div>

                    <motion.div variants={fadeScale} className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/70 p-5 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/50 sm:p-7">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                            <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-slate-300">Shimrin Sirajudeen</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio snapshot</p>
                                    </div>
                                    <Badge className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-200 hover:bg-emerald-500/20">
                                        Open to opportunities
                                    </Badge>
                                </div>

                                <div className="mt-8 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Focus Areas</p>
                                                <p className="mt-2 text-lg font-semibold text-white">Secure systems and resilient delivery</p>
                                            </div>
                                            <div className="rounded-2xl bg-primary/15 p-2 text-primary">
                                                <Globe className="size-5" />
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm leading-6 text-slate-300">
                                            Full-stack engineering, DevOps, cybersecurity, AI/ML, networking, and cloud-native workflows.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Engineering Approach</p>
                                        <div className="mt-4 space-y-3 text-sm text-slate-300">
                                            <p>• Clean interfaces with measurable technical depth</p>
                                            <p>• Practical implementation over superficial complexity</p>
                                            <p>• Security and performance considered early</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    {['Full-Stack', 'Cybersecurity', 'Cloud & DevOps'].map((label) => (
                                        <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {floatingTech.map((item, index) => (
                                <TechOrb key={item.label} icon={item.icon} label={item.label} className={item.className} delay={0.15 * index} />
                            ))}
                        </div>

                        <motion.div
                            className="absolute -left-4 top-8 hidden rounded-2xl border border-white/12 bg-white/80 px-4 py-3 shadow-premium backdrop-blur-xl md:flex dark:bg-slate-950/60"
                            variants={fadeScale}
                        >
                            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="size-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Availability</p>
                                <p className="mt-1 text-sm font-medium">Internships, research, and engineering roles</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 right-2 hidden rounded-2xl border border-white/12 bg-white/80 px-4 py-3 shadow-premium backdrop-blur-xl sm:block dark:bg-slate-950/60"
                            variants={fadeScale}
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Current stack</p>
                            <p className="mt-1 text-sm font-medium">Next.js, TypeScript, Tailwind, Framer Motion</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-14 flex justify-center pb-2"
                    variants={scrollPulse}
                    animate="animate"
                >
                    <Button
                        asChild
                        variant="ghost"
                        size="icon-lg"
                        className="rounded-full border border-white/15 bg-white/70 shadow-lg backdrop-blur-xl hover:bg-white/90 dark:border-white/10 dark:bg-slate-950/50 dark:hover:bg-slate-950/70"
                    >
                        <Link href="#about" aria-label="Scroll to the next section">
                            <ArrowDown className="size-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
}