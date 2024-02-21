/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Tajawal'],
      },
      colors: {
        primary: '#B28539',
        secondary: '#F0F0F0',
        black2: '#1E1E1E',
        black3: '#171717',
        bg: '#0D0D0D',
      },
      text: {
        primary: 4,
      },
    },
  },
  plugins: [],
};
