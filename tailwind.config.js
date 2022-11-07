/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/img/louck8.jpg')",
        "hero-max": "url('./assets/img/louck2.jpg')",
        "Hero-new": "url('./assets/img/louck7.jpg')",
        "hero-pepper": "url('./assets/img/louck9.jpg')",
      },

      fontFamily: {
        display: ["Barlow", "sans-serif"],
      },
      colors: {
        tc: "#2d2d2d",
        tch: "#606060",
        tg: "#c78c30",
        c:"#e9d7a9",
        bc: "#dbdbdb",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
