import { AlgSet } from "./types";

const OCLL: AlgSet = {
  name: "OCLL",
  stickering: "OCLL",
  visualization: "2D",
  algCases: [
    {
      name: "Sune",
      algs: ["R U R' U R U2' R'"],
    },
    {
      name: "Antisune",
      algs: ["L' U' L U' L' U2 L"],
    },
    {
      name: "U",
      algs: ["R2 D' R U2 R' D R U2 R"],
    },
    {
      name: "T",
      algs: ["r U R' U' r' F R F'"],
    },
    {
      name: "L",
      algs: ["F R' F' r U R U' r'"],
    },
    {
      name: "H",
      algs: ["R U R' U R U' R' U R U2' R'"],
    },
    {
      name: "Pi",
      algs: ["R U2' R2' U' R2 U' R2' U2' R"],
    },
  ],
};

export default OCLL;
