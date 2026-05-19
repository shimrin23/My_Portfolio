// src/components/shared/timeline-item.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
    Briefcase,
    Trophy,
    Cloud,
    Brain,
    Lock,
    Code,
} from "lucide-react";

const typeConfig = {
    exhibition: {
        label: "Exhibition",
        icon: Trophy,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    engineering: {
        label: "Engineering",
        icon: Code,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    devops: {
        label: "DevOps",
        icon: Cloud,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
    },
    research: {
        label: "Research",
        icon: Brain,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    cybersecurity: {
        label: "Cybersecurity",
        icon: Lock,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
} as const;

export function TimelineItem({
    experience,
    isLast,
    index,
}: {
    experience: Experience;
    isLast: boolean;
    index: number;
}) {
    const config = typeConfig[experience.type];
    const IconComp = config.icon;

    return (
        <motion.div
            variants={fadeUp}
            className="relative flex gap-4 sm:gap-6"
        >
            {/* Timeline connector line */}
            <div className="relative flex flex-col items-center">
                {/* Icon circle */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                        "flex size-12 items-center justify-center rounded-full border-2 border-background bg-card ring-4 ring-background",
                        config.bgColor
                    )}
                >
                    <IconComp className={cn("size-5", config.color)} />
                </motion.div>

                {/* Vertical line connector */}
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="mt-4 w-1 bg-gradient-to-b from-primary via-secondary to-transparent"
                        style={{ minHeight: "120px" }}
                    />
                )}
            </div>

            {/* Content */}
            <motion.div
                whileHover={{ x: 8 }}
                className="glass-panel flex-1 rounded-2xl border border-white/10 p-5 sm:p-6"
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:flex-row">
                            <h3 className="text-lg font-semibold text-foreground">
                                {experience.title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                                {experience.period}
                            </Badge>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {experience.organization}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {experience.summary}
                        </p>

                        {experience.highlights.length > 0 && (
                            <ul className="mt-4 space-y-2">
                                {experience.highlights.map((highlight, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                                        <span className="mt-1.5 inline-block size-1 rounded-full bg-primary shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <Badge variant="outline" className={cn("shrink-0 text-xs mt-2 sm:mt-0")}>
                        {config.label}
                    </Badge>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default TimelineItem;
