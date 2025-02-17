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
      contentContainer: '1480px',
      containerSmaller: '1024px',
      containerxs: '768px',
    },
    extend: {
      fontFamily: {
        titleFont: ['Expletus Sans','serif'],
        bodyFont: ['Poppins', 'sans-serif'],
        accentFont: ['Yusei Magic', 'serif'],
        
      },
      boxShadow: {
        navbarShadow: '0px 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
        bodyColor: '#24181B',
        titleColor: '#bae6fd',
        primaryColor: '#f9fafb',
        secondaryColor: '#f27113',
        thirdColor: '#9ca3af',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
      },
      // colors: {
      //   bodyColor: '#f2f0ff',
      //   secondaryColor: '#f27117',
      //   titleColor: '#451952',
      //    thirdColor: '#36391a',
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

      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        morphBlob: {
          "0%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            transform: "translate(100px, -100px) scale(1.3) rotate(90deg)",
            borderRadius: "30% 70% 70% 30%/50% 40% 60% 50%",
          },
          "100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          }
        },
        morphBlob2: {
          "0%": {
            transform: "translate(0, 0) rotate(0) scale(1)",
            borderRadius: "40% 60% 70% 30%/40% 40% 60% 50%",
          },
          "50%": {
            transform: "translate(-100px, 100px) rotate(180deg) scale(1.3)",
            borderRadius: "70% 30% 30% 70%/60% 40% 60% 40%",
          },
          "100%": {
            transform: "translate(0, 0) rotate(0) scale(1)",
            borderRadius: "40% 60% 70% 30%/40% 40% 60% 50%",
          }
        }
      },
      animation: {
        'morphBlob': 'morphBlob 8s ease-in-out infinite',
        'morphBlob2': 'morphBlob2 10s ease-in-out infinite',
        'gradient': 'gradient 6s linear infinite',
      },
     
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
