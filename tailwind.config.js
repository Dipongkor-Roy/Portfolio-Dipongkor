/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
             'logo-cloud': {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(calc(-100% - 4rem))' },
             },
           },
      animation: {
       'logo-cloud': 'logo-cloud 30s linear infinite',
      },},
  },
  plugins: [
    require('daisyui'),
  ],
}

