import { Color } from "@/lib";
import { Translation } from "./types";

// Context: ReconCollection is a component that lets you browse cube solve reconstructions.

// When clicking a recon, by default the video will skip ahead to the part where the solve begins.
// This text is for a checkbox that controls that behaviour.
export const jumpToVideoTimestampMap: Translation<string> = {
  en: "Jump to video timestamp",
  fr: "Jump to video timestamp",
  zh: "Jump to video timestamp",
};

// Button: go to the previous reconstruction
export const previousReconMap: Translation<string> = {
  en: "Previous",
  fr: "Previous",
  zh: "Previous",
};

// Button: go to the next reconstruction
export const nextReconMap: Translation<string> = {
  en: "Next",
  fr: "Next",
  zh: "Next",
};

const colors: Translation<{ [color in Color]: string }> = {
  en: {
    white: "white",
    yellow: "yellow",
    blue: "blue",
    green: "green",
    orange: "orange",
    red: "red",
  },
  fr: {
    white: "white",
    yellow: "yellow",
    blue: "blue",
    green: "green",
    orange: "orange",
    red: "red",
  },
  zh: {
    white: "white",
    yellow: "yellow",
    blue: "blue",
    green: "green",
    orange: "orange",
    red: "red",
  },
};

// This is a label for a checkbox that enables a feature
// where all solve reconstructions are translated to use the EO axis and orientation that you like
export const usePreferredSolvingOrientationMap: Translation<string> = {
  en: "Use your preferred solving orientation",
  fr: "Use your preferred solving orientation",
  zh: "Use your preferred solving orientation",
};

export const topColorMap: Translation<(color: Color) => string> = {
  en: (color) => `${colors.en[color]} top`,
  fr: (color) => `${colors.fr[color]} top`,
  zh: (color) => `${colors.zh[color]} top`,
};

export const frontColorMap: Translation<(color: Color) => string> = {
  en: (color) => `${colors.en[color]} front`,
  fr: (color) => `${colors.fr[color]} front`,
  zh: (color) => `${colors.zh[color]} front`,
};
