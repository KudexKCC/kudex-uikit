import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#54ac93",
  primaryBright: "#54ac93",
  primaryDark: "#54ac93",
  secondary: "#54ac93",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#266956",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c2d4d0",
  borderColor: "#524B63",
  card: "#020a1d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#54ac93",
  background: "#266956",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c2d4d0",
  borderColor: "#524B63",
  card: "#020a1d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
