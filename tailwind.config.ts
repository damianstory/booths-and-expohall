import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}
export default config