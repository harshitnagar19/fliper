/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#128b76', 
        'custom-pink': '#F973A1', 
        'custom-light-blue': '#ecf4fd' 
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}

