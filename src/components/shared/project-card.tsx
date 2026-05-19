// src/components/shared/project-card.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { fadeScale } from "@/lib/motion";
import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCard({
    project,
    onSelect,
}: {
    project: Project;
    onSelect: (project: Project) => void;
}) {
    return (
        <motion.article
            variants={fadeScale}
            whileHover={{ translateY: -8, scale: 1.02 }}
            className={cn(
                "glass-panel group relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300",
                "hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
            )}
            onClick={() => onSelect(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onSelect(project);
                }
            }}
        >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            </div>

            <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {project.bannerLabel}
                    </p>
                </div>
                <Badge variant="secondary" className="shrink-0 text-xs">
                    {project.category}
                </Badge>
            </div>

            <p className="text-sm leading-6 text-muted-foreground line-clamp-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                        {t}
                    </Badge>
                ))}
                {project.tech.length > 3 ? (
                    <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                    </Badge>
                ) : null}
            </div>

            <div className="mt-2 flex items-center gap-2 pt-2">
                <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="h-8 gap-1.5 rounded-lg px-2 text-xs"
                    onClick={(e) => e.stopPropagation()}
                >
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="size-3.5" />
                        <span>Code</span>
                    </a>
                </Button>

                {project.liveUrl ? (
                    <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="h-8 gap-1.5 rounded-lg px-2 text-xs"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="size-3.5" />
                            <span>Live</span>
                        </a>
                    </Button>
                ) : null}

                <span className="ml-auto text-xs text-muted-foreground">Click to expand →</span>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
