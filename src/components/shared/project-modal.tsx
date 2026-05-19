// src/components/shared/project-modal.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export function ProjectModal({
    project,
    isOpen,
    onClose,
}: {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl border-white/10 bg-slate-950/95 backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-foreground">
                        {project.title}
                    </DialogTitle>
                </DialogHeader>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    <div>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <Badge key={t} variant="secondary" className="text-xs">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Key Highlights</h4>
                        <ul className="space-y-2">
                            {project.features.map((f, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                    <span className="mt-1 inline-block size-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Button asChild size="sm" className="gap-2 rounded-lg">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <Github className="size-4" />
                                View on GitHub
                            </a>
                        </Button>

                        {project.liveUrl ? (
                            <Button asChild size="sm" variant="outline" className="gap-2 rounded-lg">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <ExternalLink className="size-4" />
                                    Live Demo
                                </a>
                            </Button>
                        ) : null}
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectModal;
