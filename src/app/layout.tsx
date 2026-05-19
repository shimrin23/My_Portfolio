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

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Computer Engineering Undergraduate',
    sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean)
};

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
            <body className={`${displayFont.variable} ${bodyFont.variable} font-[family:var(--font-body)]`}>
                <a
                    href="#top"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg"
                >
                    Skip to content
                </a>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}