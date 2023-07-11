const theme = {
  grid: {
    container: "46rem"
  },

  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      default: "1rem" // 16px
    }
  },

  colors: {
    gray100: "#F2F2F2",
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",

    success: "#00DC90",

    danger: "#E25858",

    purpleLight: "#9164fa",
    purpleDark: "#5E60CE",

    blueLight: "#4EA8DE",
    blueDark: "#1E6F9F"
  }
} as const;

export default theme;
