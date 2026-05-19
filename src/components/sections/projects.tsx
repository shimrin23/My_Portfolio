// src/components/sections/projects.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import ProjectCard from "@/components/shared/project-card";
import ProjectFilter from "@/components/shared/project-filter";
import ProjectModal from "@/components/shared/project-modal";
import { projects } from "@/lib/data";
import type { Project, ProjectCategory } from "@/lib/data";
import { sectionStagger } from "@/lib/motion";

export function Projects() {
    const [activeFilter, setActiveFilter] = React.useState<ProjectCategory | "all">("all");
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const filteredProjects = React.useMemo(() => {
        if (activeFilter === "all") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    const handleSelectProject = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <motion.section id="projects" className="section-padding relative">
            <div className="container">
                <SectionHeading
                    eyebrow="Projects"
                    title={<>Featured projects spanning full-stack, cloud, security, and AI</>}
                    description={
                        <>
                            A selection of engineering work showcasing full-stack development, DevOps,
                            cybersecurity, machine learning, networking, and real-time systems. Click any
                            project to explore.
                        </>
                    }
                />

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8"
                >
                    <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

                    <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={sectionStagger}>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                onSelect={handleSelectProject}
                            />
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 ? (
                        <motion.p className="mt-12 text-center text-muted-foreground">
                            No projects found in this category.
                        </motion.p>
                    ) : null}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.section>
    );
}

export default Projects;
