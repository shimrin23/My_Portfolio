import type { Variants } from 'framer-motion';

export const pageFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.45, ease: 'easeOut' }
    }
};

export const sectionStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08
        }
    }
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const fadeScale: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 12 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

export const floatingOrb: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
};

export const heroGlow = {
    animate: {
        x: [0, 18, -12, 0],
        y: [0, -10, 12, 0],
        scale: [1, 1.05, 0.98, 1],
        transition: {
            duration: 12,
            repeat: Infinity,
            repeatType: 'mirror' as const,
            ease: 'easeInOut'
        }
    }
};

export const floatingIcon = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 10, scale: 0.85 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay,
            ease: 'easeOut'
        }
    }
});

export const scrollPulse: Variants = {
    hidden: { opacity: 0 },
    animate: {
        y: [0, 10, 0],
        opacity: [0.9, 1, 0.9],
        transition: {
            duration: 1.8,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};