import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        teal: {
          DEFAULT: '#183D3D',
        },
        green: {
          DEFAULT: '#A7D397',
        },
        gray: {
          DEFAULT: '#F4F4F4',
        },
        yellow: {
          DEFAULT: '#FFA600',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
