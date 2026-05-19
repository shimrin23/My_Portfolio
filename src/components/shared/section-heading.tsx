// src/components/shared/section-heading.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, sectionStagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function SectionHeading({
    eyebrow,
    title,
    description,
    className
}: {
    eyebrow?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.header
            className={cn('mx-auto max-w-3xl', className)}
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {eyebrow ? (
                <motion.p variants={fadeUp} className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {eyebrow}
                </motion.p>
            ) : null}

            <motion.h2 variants={fadeUp} className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {title}
            </motion.h2>

            {description ? (
                <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
                    {description}
                </motion.p>
            ) : null}
        </motion.header>
    );
}

export default SectionHeading;
