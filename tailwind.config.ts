/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/modules/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      nokia: '360px',
      phone: '480px',
      tablet: '768px',
      laptop: '1440px',
      desktop: '1920px',
    },
  },
  plugins: [typography],

}
export default config
