'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { fadeScale } from '@/lib/motion';
import { cn } from '@/lib/utils';

function useCountUp(target: number, shouldAnimate: boolean) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        if (!shouldAnimate) {
            return;
        }

        let rafId = 0;
        const duration = 900;
        const start = performance.now();

        const step = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));

            if (progress < 1) {
                rafId = window.requestAnimationFrame(step);
            }
        };

        rafId = window.requestAnimationFrame(step);

        return () => {
            window.cancelAnimationFrame(rafId);
        };
    }, [shouldAnimate, target]);

    return value;
}

type GitHubStatCardProps = {
    label: string;
    value: number;
    description: string;
    icon: LucideIcon;
    suffix?: string;
    accentClassName?: string;
    delay?: number;
};

export function GitHubStatCard({
    label,
    value,
    description,
    icon: Icon,
    suffix = '',
    accentClassName = 'from-primary/15 via-primary/5 to-transparent',
    delay = 0
}: GitHubStatCardProps) {
    const [shouldAnimate, setShouldAnimate] = React.useState(false);
    const count = useCountUp(value, shouldAnimate);

    return (
        <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setShouldAnimate(true)}
            transition={{ delay }}
            className="h-full"
        >
            <Card className="glass-panel relative h-full overflow-hidden border border-white/10 bg-card/80 shadow-premium backdrop-blur-xl">
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80', accentClassName)} />
                <CardContent className="relative flex h-full flex-col justify-between gap-5 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">{label}</p>
                            <div className="mt-2 flex items-end gap-1">
                                <span className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                    {count}
                                </span>
                                {suffix ? <span className="pb-1 text-sm font-medium text-muted-foreground">{suffix}</span> : null}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-background/70 p-3 text-primary shadow-sm backdrop-blur">
                            <Icon className="size-5" />
                        </div>
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default GitHubStatCard;
