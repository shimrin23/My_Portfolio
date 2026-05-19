import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Sora, Geist } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { siteConfig } from '@/lib/seo';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const displayFont = Sora({
    subsets: ['latin'],
    variable: '--font-display'
});

const bodyFont = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        type: 'website',
        locale: 'en_US'
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
        }
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
            <body className={`${displayFont.variable} ${bodyFont.variable} font-[family:var(--font-body)]`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}