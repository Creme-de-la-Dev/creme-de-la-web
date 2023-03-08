/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        md: "0.8125rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
        "8xl": "4rem",
        "9xl": "6rem",
        "10xl": "8rem",
    },

    flex: {
      0: "0 0 auto",
    },

    extend: {
      // fontFamily: {
      //   sans: [
      //     'Lato',
      //     ...defaultTheme.fontFamily.sans,
      //   ]
      // }
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
      },

      colors: {
        "cdln-blue": {
            900: "#21496B",
            800: "#265881",
            700: "#2D679C",
            600: "#3982C2",
            500: "#62BAF3",
            400: "#62BAF3",
            300: "#91D1F8",
            200: "#C3E5FA",
            100: "#E3F1FD",
            50: "#F2F9FE",
        },
      },
    },

  plugins: [],
  }}
