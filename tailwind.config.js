/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      footerbg: "#EBEBEB",
      circlebg: {
        10: "#ffffffb3",
        20: "#ffffff80",
        30: "#ffffff40",
        40: "#ffffff26",
        bg: "#2D2D2D",
      },
      rect: "#2D2D2D",
    },
    width: {
      70: "4.375rem",
      130: "8.125rem",
      190: "11.875rem",
      250: "15.625rem",
    },
    height: {
      70: "4.375rem",
      130: "8.125rem",
      190: "11.875rem",
      250: "15.625rem",
    },
    boxShadow: {
      card: "0px 4px 12px rgba(179, 179, 179, 0.2)",
    },
    borderColor: {
      card: "rgba(178, 178, 178, 0.25)",
    },
  },
};
export const plugins = [];
