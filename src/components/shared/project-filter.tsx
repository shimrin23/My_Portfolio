// src/components/shared/project-filter.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ProjectCategory } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

const CATEGORIES: { key: ProjectCategory; label: string }[] = [
    { key: "web", label: "All" as any },
    { key: "ai-ml", label: "AI/ML" },
    { key: "devops", label: "DevOps" },
    { key: "web", label: "Web" },
    { key: "cybersecurity", label: "Cybersecurity" },
    { key: "networking", label: "Networking" },
    { key: "embedded", label: "Embedded" },
];

export function ProjectFilter({
    active,
    onChange,
}: {
    active: ProjectCategory | "all";
    onChange: (category: ProjectCategory | "all") => void;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
            role="group"
            aria-label="Filter projects by category"
        >
            <Button
                size="sm"
                variant={active === "all" ? "secondary" : "outline"}
                onClick={() => onChange("all")}
                className="rounded-full"
                aria-pressed={active === "all"}
            >
                All
            </Button>

            {[
                { key: "ai-ml", label: "AI/ML" },
                { key: "devops", label: "DevOps" },
                { key: "web", label: "Web" },
                { key: "cybersecurity", label: "Cybersecurity" },
                { key: "networking", label: "Networking" },
                { key: "embedded", label: "Embedded" },
            ].map((c) => (
                <Button
                    key={c.key}
                    size="sm"
                    variant={active === c.key ? "secondary" : "outline"}
                    onClick={() => onChange(c.key as ProjectCategory)}
                    className="rounded-full"
                    aria-pressed={active === c.key}
                >
                    {c.label}
                </Button>
            ))}
        </motion.div>
    );
}

export default ProjectFilter;
