import { Colors } from "./types";

export const baseColors = {
  failure: "#b66969",
  primary: "#292a2c",
  primaryBright: "#786656",
  primaryDark: "#FFFFFF",
  secondary: "#D5AA5D",
  success: "#9fd039",
  warning: "#b60b0b",
  best: "#e5ca9a"
};

export const brandColors = {
  binance: "#0b8ef0",
  polygon: "#0b8ef0",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#DBDBDD",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#16140F",
  textDisabled: "#7e7e7e",
  textSubtle: "#1E2530",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff8e6 0%, #e1e1e1 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#eabd6d",
  background: "#000000",
  primary: "#FFFFFF",
  backgroundDisabled: "#A5A7AC",
  contrast: "#FFFFFF",
  invertedContrast: "#000000",
  input: "#AEADAB",
  primaryDark: "#FFFFFF",
  tertiary: "#353547",
  text: "#FFD47B",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFD888",
  borderColor: "#eabd6d",
  card: "#181818",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #dad2be 0%, #846928 100%)",
  },
};
