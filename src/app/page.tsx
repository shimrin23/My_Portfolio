import React from 'react';
import { Hero } from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';

export default function HomePage() {
    return (
        <main id="top" className="min-h-dvh" aria-label="Shimrin Sirajudeen portfolio shell">
            <Hero />

            {/* Semantic spacing and smooth flow between sections */}
            <div className="bg-background">
                <About />
                <Skills />
                <Projects />
                <Experience />
            </div>
        </main>
    );
}