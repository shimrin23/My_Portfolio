'use client';

import { motion } from 'framer-motion';
import {
    BarChart3,
    BookOpen,
    GitFork,
    GitPullRequest,
    Github,
    Layers3,
    Zap
} from 'lucide-react';

import SectionHeading from '@/components/shared/section-heading';
import GitHubProfileCard from '@/components/shared/github-profile-card';
import GitHubStatCard from '@/components/shared/github-stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills } from '@/lib/data';
import { siteConfig } from '@/lib/seo';
import { fadeScale, fadeUp, pageFadeIn, sectionStagger } from '@/lib/motion';

const uniqueTechnologies = Array.from(new Set(projects.flatMap((project) => project.tech))).sort();
const projectCategories = Array.from(new Set(projects.map((project) => project.category))).length;
const focusAreas = Object.keys(skills).length;
const publicRepos = projects.length;

const activityNotes = ['Consistent project delivery', 'Security-first engineering', 'Cloud and DevOps workflows'];

const streakBars = [
    22, 34, 18, 42, 55, 48, 36, 28, 60, 52, 40, 66
];

export function GitHubStats() {
    return (
        <motion.section
            id="github-stats"
            className="section-padding relative overflow-hidden"
            variants={pageFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute -left-24 top-16 -z-10 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-secondary/10 blur-3xl" />

            <div className="container relative">
                <SectionHeading
                    eyebrow="GitHub Stats"
                    title={<>A portfolio-backed view of engineering breadth and consistency</>}
                    description={
                        <>
                            These metrics are derived from the portfolio content in this site so the dashboard stays
                            fast, reliable, and ready for a future live GitHub API connection.
                        </>
                    }
                />

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
                >
                    <GitHubProfileCard
                        username="shimrin23"
                        profileUrl={siteConfig.github}
                        quote="I build with the assumption that reliability, security, and maintainability matter as much as shipping features."
                        publicRepos={publicRepos}
                        techCount={uniqueTechnologies.length}
                        categoryCount={projectCategories}
                        focusAreaCount={focusAreas}
                        activityNotes={activityNotes}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                        <GitHubStatCard
                            label="Public repositories"
                            value={publicRepos}
                            description="Portfolio projects currently represented in the showcase, spanning software, cloud, AI, networking, and security."
                            icon={Github}
                            accentClassName="from-primary/15 via-primary/5 to-transparent"
                        />
                        <GitHubStatCard
                            label="Unique technologies"
                            value={uniqueTechnologies.length}
                            description="Distinct tools and frameworks used across the portfolio, from frontend stacks to infrastructure and machine learning."
                            icon={Layers3}
                            accentClassName="from-secondary/15 via-secondary/5 to-transparent"
                            delay={0.05}
                        />
                        <GitHubStatCard
                            label="Project categories"
                            value={projectCategories}
                            description="Engineering tracks covered in the portfolio, including AI/ML, DevOps, web, cybersecurity, networking, and embedded systems."
                            icon={GitFork}
                            accentClassName="from-cyan-500/15 via-cyan-500/5 to-transparent"
                            delay={0.1}
                        />
                        <GitHubStatCard
                            label="Focus areas"
                            value={focusAreas}
                            description="Core technical areas reflected in the skills map and project work across the site."
                            icon={BarChart3}
                            accentClassName="from-emerald-500/15 via-emerald-500/5 to-transparent"
                            delay={0.15}
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
                >
                    <motion.article variants={fadeScale} className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Contribution streak</p>
                                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Consistent shipping rhythm</h3>
                            </div>
                            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                                Stable output
                            </Badge>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-2">
                            {streakBars.map((height, index) => (
                                <div key={index} className="flex h-28 items-end rounded-xl bg-background/40 p-1 backdrop-blur">
                                    <div
                                        className="w-full rounded-lg bg-gradient-to-t from-primary via-secondary to-accent shadow-sm"
                                        style={{ height: `${height}%` }}
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="mt-5 text-sm leading-7 text-muted-foreground">
                            The visual streak emphasizes steady activity across semesters and portfolio cycles rather than
                            a fabricated live GitHub API count.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                'Weekly feature work',
                                'Iterative refactoring',
                                'Security-focused reviews',
                                'Deployment readiness'
                            ].map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-muted-foreground backdrop-blur">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.article>

                    <motion.article variants={fadeUp} className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8">
                        <div className="flex items-center gap-3">
                            <GitPullRequest className="size-4 text-primary" />
                            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Open source highlights</p>
                        </div>

                        <Card className="mt-5 border border-white/10 bg-background/55 shadow-none backdrop-blur">
                            <CardHeader className="border-b border-white/10 px-4 py-4">
                                <CardTitle className="text-base">What the profile reflects</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 px-4 py-4">
                                {[
                                    'Reusable, production-ready UI components with strong typing',
                                    'Cloud, DevOps, and infrastructure automation with deployment discipline',
                                    'Security-minded engineering across auth, access control, and hardening',
                                    'AI and networking work that balances practical outcomes with technical depth'
                                ].map((item) => (
                                    <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                                        <BookOpen className="mt-1 size-4 shrink-0 text-secondary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <div className="mt-5 flex flex-wrap gap-3">
                            {uniqueTechnologies.slice(0, 10).map((tech) => (
                                <Badge key={tech} variant="outline" className="rounded-full px-3 py-1 text-xs font-medium">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur">
                            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                                <Zap className="size-4 text-primary" />
                                Engineering philosophy
                            </div>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                Build secure defaults, ship clean interfaces, and leave the codebase easier to trust than
                                when you found it.
                            </p>
                        </div>
                    </motion.article>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default GitHubStats;
