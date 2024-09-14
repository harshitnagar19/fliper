/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#128b76', 
        'custom-pink': '#F973A1' 
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}

