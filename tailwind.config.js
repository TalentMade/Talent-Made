/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingpageimg': "url('https://media.discordapp.net/attachments/113986968223744008/1049875806249295982/pexels-photo-9830116.png')"
      }
    },
  },
  plugins: [],
}
