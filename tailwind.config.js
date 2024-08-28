/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1392px",
        },
      },
      backgroundImage: {
        'hero-bg': 'url(./img/hero.svg)',
        'hero-gradient': 'rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
};
