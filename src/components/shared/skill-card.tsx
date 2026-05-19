// src/components/shared/skill-card.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeScale } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function SkillCard({ name }: { name: string }) {
    return (
        <motion.li
            variants={fadeScale}
            whileHover={{ translateY: -6, scale: 1.02 }}
            className={cn(
                'glass-panel flex items-center justify-center rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-foreground shadow-sm',
                'min-h-[56px]'
            )}
            role="listitem"
            aria-label={name}
        >
            {name}
        </motion.li>
    );
}

export default SkillCard;
