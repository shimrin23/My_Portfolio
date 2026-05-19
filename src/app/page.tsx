import React from 'react';
import { Hero } from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import GitHubStats from '@/components/sections/github-stats';
import Footer from '@/components/layout/footer';

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
                <GitHubStats />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}