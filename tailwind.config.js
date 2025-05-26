/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleVMiIT: '#7D61F2',
        purpleVMiIT50: 'rgba(125, 97, 242, 0.5)',
        gradbot: '#B949CB',
        darkThemeBg: '#141414',
        darkHover: '#7D61F2',
        lightHover: '#D6CDFB',
        primary: '#7D61F2', // Фиолетовый
        secondary: '#141414', // Тёмный фон
        grayDark: '#3B2C64', // Серо-тёмный
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        600: '600ms',
      },
    },
  },
  plugins: [],
}

