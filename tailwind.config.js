/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: '#0095f6',
        facebook: '#385185',
        link: '#00376b'
      },
      backgroundImage: {
        'logo-pattern': 'url(assets/home-phones-2x.png)'
      },
      fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

