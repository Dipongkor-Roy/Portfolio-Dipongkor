/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      },
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

