/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Poppins", "sans-serif"]
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blue: {
        200: "#BFDBFE",
        500: "#3B82F6",
        600: "#0880BF",
        800: "#1E40AF"
      },
      white: "#fff",
      // fortext: "#6B6B6B",
      forinput: "#CED4DA",
      gray: {
        50: "#F9FAFB",
        100: "#646464"
      }
    }
  },
  plugins: [],
}