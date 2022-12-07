/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingpageimg': "url('https://media.istockphoto.com/id/1282730177/photo/human-resource-manager-looking-at-many-different-cv-resume.jpg?s=1024x1024&w=is&k=20&c=hvj3MoqnyrkKDAlsQ_J7ESx3LWKQVNau1lD47qek91E=')"
      }
    },
  },
  plugins: [],
}
