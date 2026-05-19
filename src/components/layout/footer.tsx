'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Orbit, BookOpenText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/lib/seo';
import { fadeScale, fadeUp, pageFadeIn, sectionStagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const navigationLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub Stats', href: '#github-stats' },
  { label: 'Contact', href: '#contact' }
] as const;

const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, icon: Github, external: true },
  { label: 'Email', href: siteConfig.email, icon: Mail, external: false },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Linkedin, external: true }
] as const;

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative overflow-hidden border-t border-border/60 bg-background"
      variants={pageFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      aria-label="Site footer"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-24 bottom-0 -z-10 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 top-10 -z-10 size-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container section-padding py-16 sm:py-20">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-premium sm:p-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <motion.div variants={fadeUp} className="space-y-6">
              <Link href="#top" className="inline-flex items-center gap-3 text-foreground">
                <span className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-background/70 text-sm font-semibold shadow-sm backdrop-blur">
                  SS
                </span>
                <span>
                  <span className="block text-base font-semibold tracking-tight">Shimrin Sirajudeen</span>
                  <span className="block text-xs uppercase tracking-[0.28em] text-muted-foreground">Portfolio</span>
                </span>
              </Link>

              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Computer Engineering undergraduate focused on secure software, cloud-native delivery, AI-driven
                systems, networking, and practical full-stack engineering.
              </p>

              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                <Orbit className="mr-2 size-3.5" />
                Built with Next.js + Tailwind + Framer Motion
              </Badge>
            </motion.div>

            <motion.nav variants={fadeUp} aria-label="Footer navigation" className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Quick Links</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {navigationLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-background/90 dark:bg-slate-950/30"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </motion.nav>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Connect</p>

              <div className="grid gap-3">
                {socialLinks
                  .filter((item) => item.label !== 'LinkedIn' || Boolean(siteConfig.linkedin))
                  .map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        aria-label={item.label}
                        className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-background/90 dark:bg-slate-950/30"
                      >
                        <span className="inline-flex items-center gap-3">
                          <Icon className="size-4 text-primary" />
                          {item.label}
                        </span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </a>
                    );
                  })}
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur dark:bg-slate-950/30">
                <p className="text-sm font-medium text-foreground">Resume</p>
                <p className="mt-1 text-sm text-muted-foreground">Access the latest version of my CV for opportunities and review.</p>
                <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-white/15 px-4 backdrop-blur-xl dark:border-white/10">
                  <a
                    href={siteConfig.resumeUrl || '#contact'}
                    target={siteConfig.resumeUrl ? '_blank' : undefined}
                    rel={siteConfig.resumeUrl ? 'noreferrer' : undefined}
                    aria-label="Open resume"
                  >
                    <BookOpenText className="mr-2 size-4" />
                    View Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <Separator className="my-8 bg-border/70" />

          <motion.div variants={fadeScale} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Shimrin Sirajudeen. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Designed for thoughtful engineering roles with a focus on security, reliability, and clarity.
              </p>
            </div>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className={cn('rounded-full px-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5')}
            >
              <a href="#top" aria-label="Back to top">
                Back to top
                <ArrowUpRight className="ml-2 size-4 rotate-[-45deg] transition-transform duration-300 group-hover:translate-y-[-1px]" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
