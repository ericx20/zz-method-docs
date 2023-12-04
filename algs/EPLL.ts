import { AlgSet } from "./types";

const EPLL: AlgSet = {
  name: "EPLL",
  stickering: "PLL",
  visualization: "2D",
  algCases: [
    {
      name: "H Perm",
      algs: ["M2' U M2' U2 M2' U M2'"],
    },
    {
      name: "Ua Perm",
      algs: ["M2' U M U2 M' U M2'"],
    },
    {
      name: "Ub Perm",
      algs: ["M2' U' M U2 M' U' M2'"],
    },
    {
      name: "Z Perm",
      algs: ["M2' U2 M U M2' U M2' U M"],
    },
  ],
};

export default EPLL;
