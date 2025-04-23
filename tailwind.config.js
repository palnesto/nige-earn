/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      containers: {
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      screens: {
        xs: "480px",
        smd: "640px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
        },
        "gray-scale": {
          100: "var(--gray-scale-100)",
          200: "var(--gray-scale-200)",
          300: "var(--gray-scale-300)",
          400: "var(--gray-scale-400)",
        },

        "single-color": "var(--single-color)",
        "blue-color": "var(--blue-color)",
        "primary-solid-hover": "var(--primary-solid-hover)",
        "primary-inverted-hover": "var(--primary-inverted-hover)",
        "secondary-solid-hover": "var(--secondary-solid-hover)",
        "secondary-inverted-hover": "var(--secondary-inverted-hover)",
        "gray-scale-solid-hover": "var(--gray-scale-solid-hover)",
        "gray-scale-inverted-hover": "var(--gray-scale-inverted-hover)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
