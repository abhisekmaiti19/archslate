/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#F5F4FD",
        "brand-black": "#0F1420",
        "brand-link": "#494BAA",
        "brand-red-light": "#FFDAD2",
        "brand-red-dark": "#FF7B7B",
        "brand-grey": "#AFB6C0",
        "brand-stroke": "#E5E5E5",
        "brand-input": "#EEF0F3",
        "brand-green-dark": "#21CEAF",
        "brnad-green-light": "#D7FEF0",
        "braand-input-text": "#575D6B",
      },
    },
  },
  plugins: [],
};
