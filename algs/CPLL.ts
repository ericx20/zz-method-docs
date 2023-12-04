import { AlgSet } from "./types";

const CPLL: AlgSet = {
  name: "CPLL",
  // stickering: "CPLL", // cubing.js CPLL shows EP which is not what we want
  customStickering: "EDGES:oooo--------,CORNERS:PPPP----,CENTERS:D-----",
  visualization: "2D",
  algCases: [
    {
      name: "Adjacent swap",
      algs: ["R U R' U' R' F R2 U' R' U' R U R' F'"],
    },
    {
      name: "Diagonal swap",
      algs: ["F R U' R' U' R U R' F' R U R' U' R' F R F'"],
    },
  ],
};

export default CPLL;
