/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        maincolor: {
          800: '#18293c',
        },
        newpink: {
          100: '#FCEFFA', // 3
          200: '#efa2b4',
          500: '#e02f6b',
        },
        bluegrad: {
          50: '#F0FBF4', // 5
          100: '#E8E9FB', // 2
          200: '#EAFBFB', // 4
          300: '#BFE0FB', // 1
        },
      },
    },
  },
  plugins: [],
}
