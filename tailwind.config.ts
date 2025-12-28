import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './index.tsx',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config