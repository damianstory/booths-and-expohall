import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'desktop': '1024px',
      },
      colors: {
        'primary-blue': '#0092FF',
        'brand-navy': '#22224C',
        'background-light': '#F9FAFB',
        'secondary-blue-pale': '#E6F4FF',
        'light-blue': '#C6E7FF',
        'off-white': '#F6F6FF',
        'neutral-1': '#E5E9F1',
        'neutral-2': '#D9DFEA',
        'neutral-3': '#AAB7CB',
        'neutral-4': '#65738B',
        'neutral-5': '#485163',
        'neutral-6': '#252A33',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'black': '900',
      },
      fontSize: {
        'header-1': ['4rem', { lineHeight: '5rem' }],
        'header-2': ['2.5rem', { lineHeight: '3.5rem' }],
        'header-3': ['2rem', { lineHeight: '3rem' }],
        'header-4': ['1.5rem', { lineHeight: '2.25rem' }],
        'subheader': ['1.375rem', { lineHeight: '2rem' }],
        'body-1': ['1.25rem', { lineHeight: '2rem' }],
        'body-2': ['1rem', { lineHeight: '1.75rem' }],
        'compact': ['0.875rem', { lineHeight: '1.25rem' }],
        'subtitle-1': ['0.75rem', { lineHeight: '1.25rem' }],
        'subtitle-2': ['0.625rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
}
export default config