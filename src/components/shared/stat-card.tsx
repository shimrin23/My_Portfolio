// src/components/shared/stat-card.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeScale } from '@/lib/motion';
import { cn } from '@/lib/utils';

function useCountUp(target: number, duration = 900) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        let start = Date.now();
        let raf = 0;

        function tick() {
            const now = Date.now();
            const elapsed = Math.min(now - start, duration);
            const progress = elapsed / duration;
            const current = Math.round(progress * target);
            setValue(current);
            if (elapsed < duration) raf = requestAnimationFrame(tick);
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
}

export function StatCard({
    label,
    value,
    suffix,
    className
}: {
    label: string;
    value: number;
    suffix?: string;
    className?: string;
}) {
    const count = useCountUp(value, 900);

    return (
        <motion.div
            variants={fadeScale}
            whileHover={{ translateY: -6 }}
            className={cn(
                'glass-panel flex flex-col gap-2 rounded-2xl border border-white/10 px-5 py-4 shadow-sm',
                className
            )}
            role="group"
            aria-label={`${label} statistic`}
        >
            <div className="text-2xl font-semibold text-foreground">
                {count}
                {suffix ? <span className="ml-1 text-base font-medium text-muted-foreground">{suffix}</span> : null}
            </div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </motion.div>
    );
}

export default StatCard;
