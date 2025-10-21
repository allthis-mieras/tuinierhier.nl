/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['new-spirit-condensed', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
        'heading-2': ['new-spirit', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'], 
        'body': ['Manrope', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
        'extra': ['anchor-web', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      colors: {
        'clr-black': '#000',
        'clr-white': '#ffffff', 
        'clr-green': '#029c54',
        'clr-yellow': '#feffc9',
        'clr-blue': '#d9f9ff',
        'clr-navy': '#035669',
        'clr-orange': '#f55b1d',
        'clr-pinky': '#f9dae5',
        'clr-yellow-warm': '#ffc76e',
        'clr-brand': '#005500',
      },
      borderRadius: {
        'full': '50vw',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}