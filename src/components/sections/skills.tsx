// src/components/sections/skills.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/section-heading';
import SkillCategory from '@/components/shared/skill-category';
import { skills as skillsData } from '@/lib/data';
import { sectionStagger, fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps & Cloud' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'aiMl', label: 'AI/ML & Data' },
    { key: 'networking', label: 'Networking' }
] as const;

export function Skills() {
    const [active, setActive] = React.useState<typeof CATEGORIES[number]['key']>('frontend');

    return (
        <motion.section id="skills" className="section-padding relative">
            <div className="container">
                <SectionHeading
                    eyebrow="Skills"
                    title={<>Categorized technical skills and tools</>}
                    description={<>Interactive overview of technologies grouped by area. Click a category to explore.</>}
                />

                <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        {CATEGORIES.map((c) => (
                            <Button
                                key={c.key}
                                size="sm"
                                variant={active === c.key ? 'secondary' : 'outline'}
                                onClick={() => setActive(c.key as any)}
                                className="rounded-full"
                                aria-pressed={active === c.key}
                            >
                                {c.label}
                            </Button>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-2">
                        <motion.div variants={fadeUp} className={cn('space-y-6')}>
                            {/* Left column: active category details */}
                            <SkillCategory title={CATEGORIES.find((c) => c.key === active)!.label} skills={(skillsData as any)[active]} />
                        </motion.div>

                        <motion.div variants={fadeUp} className="space-y-6">
                            {/* Right column: summary and badges */}
                            <div className="glass-panel rounded-2xl border-white/10 p-6">
                                <h4 className="text-lg font-semibold text-foreground">Depth & Context</h4>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Each category emphasizes practical competency: from prototyping and testing in frontend stacks,
                                    to designing robust backend services and building secure, containerized deployment pipelines.
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    {((skillsData as any).frontend as string[]).slice(0, 4).map((s) => (
                                        <div key={s} className="rounded-lg border border-white/8 px-3 py-2 text-sm text-foreground">
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-panel rounded-2xl border-white/10 p-6">
                                <h4 className="text-lg font-semibold text-foreground">Learning & Research</h4>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    I prioritize reproducible experiments and informed trade-offs when integrating ML, networking,
                                    and security into production systems.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Skills;
