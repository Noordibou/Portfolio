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
        titleFont: ['Roboto Mono',' monospace'],
        bodyFont: ['Poppins', 'sans-serif'],
        
      },
      boxShadow: {
        navbarShadow: '0px 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
        bodyColor: '#24181B',
        darkColor: '#24181B',
        textBright: '#c6b0eb',
        textLight: '#f27113',
        textDark: '#e5fbff',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
        greyColor: '#7c7c84',
      },
      // colors: {
      //   bodyColor: '#f2f0ff',
      //   textBright: '#f27113',
      //   textLight: '#451952',
      //   textDark: '#36391a',
      //   hoverColor: 'rgba(100, 255, 218, 0.1)',
      //   greyColor: '#7c7c84',
      // },
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
