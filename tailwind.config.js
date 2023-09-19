/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope'],
        roboto: ['Roboto'],
        Inter:['Inter'],
        Jost:['Jost'],
        kumbh:['Kumbh Sans'],
        saira:['Saira'],
        Nunito:['Nunito'],
      
      },
      fontSize: {
        clamp: "clamp(1rem, 4vw, 72px)",
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/hero-backgroung.svg')",

      },
      animation: {
        shake: "shake 0.5s infinite",
        floating: "floating 3s ease-in-out infinite",
        ring : "ring 4s .7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
