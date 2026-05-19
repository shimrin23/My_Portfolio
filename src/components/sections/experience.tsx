// src/components/sections/experience.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import TimelineItem from "@/components/shared/timeline-item";
import { experience } from "@/lib/data";
import { sectionStagger } from "@/lib/motion";

export function Experience() {
    return (
        <motion.section id="experience" className="section-padding relative">
            <div className="container">
                <SectionHeading
                    eyebrow="Experience"
                    title={<>Engineering journey spanning full-stack, cloud, security, and research</>}
                    description={
                        <>
                            A chronological view of my technical experience, projects, and areas of focus.
                            Each role emphasizes hands-on engineering with practical outcomes and measurable
                            contributions.
                        </>
                    }
                />

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-10 space-y-6 sm:space-y-8"
                >
                    {experience.map((item, index) => (
                        <TimelineItem
                            key={item.title}
                            experience={item}
                            index={index}
                            isLast={index === experience.length - 1}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Experience;
