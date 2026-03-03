/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Scan all files in the 'app' folder
    "./pages/**/*.{js,jsx,ts,tsx}", // If you also use a 'pages' directory
    "./components/**/*.{js,jsx,ts,tsx}", // For components if in a separate directory
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
