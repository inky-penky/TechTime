/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gen-blue': '#004DB3',
        'nav-blue': '#AAC4E6',
        'gen-gray': '#F8F9FC',
        'gen-ash': '#A1A1A1',
        'tag-blue': '#1E5DCE33',
        'star-yellow': '#F6B435',
        'tagTextBlue': '#1E5DCE'
      },
      fontFamily: {
        'satoshi': ['Satoshi'],
        'clash': ['ClashDisplay']
      }
    },
  },
  plugins: [],
}