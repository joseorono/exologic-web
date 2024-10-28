/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F6F7F9",
      gray: {
        50: "#F9FAFB",
        100: "#F6F7F9", // Lightest
        200: "#E9EAEC",
        300: "#E3E4E5",
        400: "#B8BBBE",
        500: "#8D9194",
        600: "#63676B",
        700: "#3E4349", // Midtone
        800: "#2A3137",
        900: "#1E272E", // Darkest
        DEFAULT: "#3E4349",
      },
      base: {
        50: "#e4e5e6",
        100: "#b9babd",
        200: "#8d8f94",
        300: "#61636b",
        400: "#353843",
        500: "#111417", // DEFAULT
        600: "#0e1114",
        700: "#0a0d10",
        800: "#07090c",
        900: "#030407",
        DEFAULT: "#111417",
      },
      gold: {
        50: "#FBF7ED",
        100: "#F6EED8",
        200: "#EFE0B9",
        300: "#E2C079", // your provided color
        400: "#D5AB54",
        500: "#C89841",
        600: "#BB873D",
        700: "#C79A33", // your provided color
        800: "#815E22",
        900: "#5E441A",
        950: "#1A1407",
      },
      blue: {
        50: "#e5e5f4",
        100: "#bdbdea",
        200: "#9494df",
        300: "#6a6ad5",
        400: "#4141cb",
        500: "#1A1A99", // DEFAULT
        600: "#161683",
        700: "#12126d",
        800: "#0e0e57",
        900: "#0a0a42",
        DEFAULT: "#1A1A99",
      },
      azure: {
        50: "#F0F7FF",
        100: "#E0F0FF",
        200: "#B8DFFF",
        300: "#7CC2FF",
        400: "#3396FF",
        500: "#0066CC",
        600: "#004C99",
        700: "#003366", // your provided color
        800: "#002855",
        900: "#001A33",
        950: "#000D1A",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        exologic: {
          primary: "#1A1A99",
          "primary-content": "#F6F7F9",
          secondary: "#C79A33",
          "secondary-content": "#C79A33",
          accent: "#003366",
          "accent-content": "#F6F7F9",
          neutral: "#1b0c14",
          "neutral-content": "#F6F7F9",
          "base-100": "#111417",
          "base-200": "3E4349",
          "base-300": "#1E272E",
          "base-content": "#F6F7F9",
          info: "#C79A33", //"#E2C079",
          "info-content": "#F6F7F9",
          success: "#38991A",
          "success-content": "#F6F7F9",
          warning: "#C79A33",
          "warning-content": "#F6F7F9",
          error: "#99201A",
          "error-content": "#F6F7F9",
          "base-100": "#1E272E",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
