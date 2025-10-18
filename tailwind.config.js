/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#64b1ff',
          pink: '#eb5497',
          yellow: '#f0f47e',
          'light-pink': '#f6c4d6',
        },
      },
    },
  },
  plugins: [],
}