/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "360px",
      // => @media (min-width: 360px) { ... }
      xsm: "479px",
      // => @media (min-width: 479px) { ... }
      ssm: "540px",
      // => @media (min-width: 540px) { ... }
      sm: "640px",
      // => @media (min-width: 640) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1535px",
      // => @media (min-width: 1535px) { ... }
      "3xl": "1919px",
      // eslint-disable-next-line no-irregular-whitespace
      // => @media (min-width: 1919px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
