/**
 * Modern minimalist color palette with terracotta variations
 * Used by: All components for consistent theming
 */

export const colorPalette = {
  // Base colors - neutral and clean
  base: {
    white: "#FEFEFE",
    lightGray: "#F8F9FA",
    gray: "#6C757D",
    darkGray: "#343A40",
    black: "#1A1A1A",
  },

  // Primary terracotta variations
  primary: {
    redTerracotta: "#D2691E",
    redTerracottaLight: "#E6A76B",
    redTerracottaDark: "#B8541A",

    limeTerracotta: "#8FBC8F",
    limeTerracottaLight: "#A8D4A8",
    limeTerracottaDark: "#7A9F7A",

    blueTerracotta: "#708090",
    blueTerracottaLight: "#9BB0C1",
    blueTerracottaDark: "#5A6B7A",
  },

  // Accent colors
  accent: {
    warm: "#F4E4BC",
    cool: "#E8F4F8",
    success: "#28A745",
    warning: "#FFC107",
    error: "#DC3545",
  },

  // Gradients
  gradients: {
    primary: "from-red-terracotta to-red-terracotta-dark",
    secondary: "from-lime-terracotta to-lime-terracotta-dark",
    tertiary: "from-blue-terracotta to-blue-terracotta-dark",
    warm: "from-red-terracotta-light to-lime-terracotta-light",
    cool: "from-blue-terracotta-light to-lime-terracotta-light",
  },
}
