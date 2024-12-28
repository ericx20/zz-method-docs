import { type TwistyPlayerConfig } from "cubing/twisty";

type Stickering = TwistyPlayerConfig["experimentalStickeringMaskOrbits"];

export const STICKERINGS: Record<string, Stickering> = {
  FB: "EDGES:IIIIIII-I-I-,CORNERS:IIIII--I,CENTERS:I-IIII",
  SB: "EDGES:IIIII-ID-D-D,CORNERS:IIII-DD-,CENTERS:IDI-II",
  CMLL: "EDGES:IIIIIDIDDDDD,CORNERS:----DDDD,CENTERS:IDIDII",
  LSE: "EDGES:-----D-DDDDD,CORNERS:DDDDDDDD,CENTERS:-D-D--"
};
