import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.25rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem'
            },
            boxShadow: {
                premium: '0 20px 60px rgba(15, 23, 42, 0.12)',
                glass: '0 16px 48px rgba(15, 23, 42, 0.18)'
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.24), transparent 36%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.18), transparent 28%), linear-gradient(180deg, rgba(15, 23, 42, 0.08), transparent)'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                shine: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                reveal: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                shine: 'shine 2.8s linear infinite',
                reveal: 'reveal 0.7s ease-out both'
            }
        }
    },
    plugins: []
};

export default config;