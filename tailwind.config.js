/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmaller: '1024px',
      containerxs: '768px',
    },
    extend: {
      fontFamily: {
        titleFont: ['Playfair Display', 'serif'],
        bodyFont: ['Inter', 'sans- serif'],
        orb: ['Orbitron', 'sans- serif'],
        
      },
      boxShadow: {
        navbarShadow: '0px 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
         bodyColor: '#120F0D',
        textGreen: '#D63D21',
        textLight: '#EE8B7A',
        textDark: '#D9C7BD',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '677px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
