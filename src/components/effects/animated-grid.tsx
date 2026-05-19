"use client";

import { motion } from 'framer-motion';

export function AnimatedGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <motion.div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 animated-grid opacity-50 dark:opacity-30" />
      </motion.div>

      <motion.div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
        animate={{ x: [0, 24, -18, 0], y: [0, -12, 14, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-secondary/15 blur-3xl dark:bg-secondary/20"
        animate={{ x: [0, -18, 14, 0], y: [0, 10, -8, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15"
        animate={{ x: [0, 12, -16, 0], y: [0, -10, 6, 0], scale: [1, 1.03, 0.99, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}