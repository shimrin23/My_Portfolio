'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Github, Globe, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { fadeScale, fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

type GitHubProfileCardProps = {
    username: string;
    profileUrl: string;
    quote: string;
    publicRepos: number;
    techCount: number;
    categoryCount: number;
    focusAreaCount: number;
    activityNotes: string[];
    className?: string;
};

export function GitHubProfileCard({
    username,
    profileUrl,
    quote,
    publicRepos,
    techCount,
    categoryCount,
    focusAreaCount,
    activityNotes,
    className
}: GitHubProfileCardProps) {
    return (
        <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className={cn('h-full', className)}
        >
            <Card className="glass-panel relative h-full overflow-hidden border border-white/10 bg-card/80 shadow-premium backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <CardContent className="relative flex h-full flex-col gap-6 p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-background/80 text-lg font-semibold text-foreground shadow-sm">
                                SS
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">GitHub profile</p>
                                <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">@{username}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Computer Engineering undergraduate</p>
                            </div>
                        </div>

                        <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                            <span className="mr-2 inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)]" />
                            Open source ready
                        </Badge>
                    </div>

                    <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
                        {[
                            { label: 'Public repos', value: publicRepos },
                            { label: 'Tech stacks', value: techCount },
                            { label: 'Project categories', value: categoryCount },
                            { label: 'Focus areas', value: focusAreaCount }
                        ].map((item) => (
                            <div key={item.label} className="rounded-2xl border border-white/10 bg-background/65 p-4 backdrop-blur">
                                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{item.label}</p>
                                <p className="mt-2 font-display text-2xl font-semibold text-foreground">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    <div className="rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <Sparkles className="size-4 text-primary" />
                            Open-source mindset
                        </div>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{quote}</p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Activity indicators</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-3">
                            {activityNotes.map((note) => (
                                <div key={note} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/65 px-4 py-3 text-sm text-muted-foreground backdrop-blur">
                                    <Code2 className="size-4 shrink-0 text-secondary" />
                                    <span>{note}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg" className="rounded-full px-6">
                            <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                                <Github className="mr-2 size-4" />
                                GitHub Profile
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 px-6 backdrop-blur-xl dark:border-white/10">
                            <Link href="#projects" aria-label="View all projects">
                                View All Projects
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button asChild variant="ghost" size="lg" className="rounded-full px-6 sm:ml-auto">
                            <a href="https://github.com/shimrin23?tab=repositories" target="_blank" rel="noreferrer" aria-label="Browse repositories">
                                <Globe className="mr-2 size-4" />
                                Repositories
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default GitHubProfileCard;
