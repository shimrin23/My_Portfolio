// src/components/shared/skill-category.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './skill-card';
import { sectionStagger, fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function SkillCategory({ title, skills }: { title: string; skills: readonly string[] }) {
    return (
        <motion.section variants={sectionStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h3 variants={fadeUp} className="mb-4 text-lg font-semibold text-foreground">
                {title}
            </motion.h3>

            <motion.ul variants={sectionStagger} className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-3')} role="list">
                {skills.map((s) => (
                    <SkillCard key={s} name={s} />
                ))}
            </motion.ul>
        </motion.section>
    );
}

export default SkillCategory;
