module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "input-dark": "rgb(75 85 99);",
        "bg-light": "#fafafa",
        "bg-dark": "#181824",
        "card-light": "rgb(229 231 235);",
        "card-dark": "rgb(30 41 59);",
        cta: "#3b82f6;",
        bglighter: "#fafafa",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
