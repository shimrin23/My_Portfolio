// src/components/sections/about.tsx
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import StatCard from '@/components/shared/stat-card';
import { fadeUp, sectionStagger } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function About() {
    const yearsExperience = 3; // hands-on projects and coursework
    const projectsCompleted = 12;
    const technologies = 30;

    const focusCards = [
        {
            title: 'Full-Stack Engineering',
            body: 'Design and deliver end-to-end web applications with a focus on maintainability, testing, and scalability.'
        },
        {
            title: 'Cloud & DevOps',
            body: 'Infrastructure-as-code, CI/CD, containerization, and cloud-native deployment practices.'
        },
        {
            title: 'Cybersecurity',
            body: 'Hands-on vulnerability testing, secure authentication, RBAC, and threat-aware architecture.'
        },
        {
            title: 'AI / Research',
            body: 'Applied ML for perception and prediction, reproducible experiments, and model evaluation.'
        }
    ];

    return (
        <motion.section id="about" className="section-padding relative">
            <div className="container">
                <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <SectionHeading
                        eyebrow="About"
                        title={<>Engineering discipline, research mindset, and team leadership</>}
                        description={
                            <>
                                I am a Computer Engineering undergraduate at the University of Ruhuna (Sri Lanka) focused on building
                                secure, scalable systems. My work spans full-stack development, cloud infrastructure, DevOps, cybersecurity,
                                AI/ML, networking, and real-time systems. I bring a research-oriented mindset and a leadership approach to
                                engineering problems — prioritizing measurable outcomes, reproducibility, and collaboration.
                            </>
                        }
                    />

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <motion.div className="space-y-6" variants={fadeUp}>
                            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                                I focus on producing practical solutions that balance system correctness, security, and performance. I
                                value clear API boundaries, comprehensive testing, and deployment practices that make services easy to
                                operate. In team settings I emphasize mentorship, cross-functional collaboration, and documenting
                                decisions so knowledge is shared and technical debt is minimized.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <Badge variant="default">University of Ruhuna</Badge>
                                <Badge variant="secondary">Sri Lanka</Badge>
                                <Badge variant="outline">Research & Projects</Badge>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3">
                                <StatCard label="Years of experience" value={yearsExperience} suffix="+" />
                                <StatCard label="Projects completed" value={projectsCompleted} suffix="+" />
                                <StatCard label="Technologies" value={technologies} suffix="+" />
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="space-y-4">
                            {focusCards.map((c) => (
                                <motion.article
                                    key={c.title}
                                    whileHover={{ translateY: -6 }}
                                    className={cn('glass-panel rounded-2xl border-white/10 p-5')}
                                >
                                    <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.body}</p>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
