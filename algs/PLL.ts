import { AlgSet } from "./types";

const PLL: AlgSet = {
  name: "PLL",
  stickering: "PLL",
  visualization: "2D",
  hasCategories: true,
  algCases: [
    {
      name: "H Perm",
      algs: ["M2' U M2' U2 M2' U M2'"],
      category: "Solved corners",
    },
    {
      name: "Ua Perm",
      algs: ["M2' U M U2 M' U M2'"],
      category: "Solved corners",
    },
    {
      name: "Ub Perm",
      algs: ["M2' U' M U2 M' U' M2'"],
      category: "Solved corners",
    },
    {
      name: "Z Perm",
      algs: ["M2' U2 M U M2' U M2' U M"],
      category: "Solved corners",
    },
    {
      name: "Aa Perm",
      algs: ["x R' U R' D2 R U' R' D2 R2 x'"],
      category: "Adj. corner swap",
    },
    {
      name: "Ab Perm",
      algs: ["x R2 D2 R U R' D2 R U' R x'"],
      category: "Adj. corner swap",
    },
    {
      name: "F Perm",
      algs: ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"],
      category: "Adj. corner swap",
    },
    {
      name: "Ga Perm",
      algs: ["R2 U R' U R' U' R U' R2 U' D R' U R D'"],
      category: "Adj. corner swap",
    },
    {
      name: "Gb Perm",
      algs: ["R' U' R U D' R2 U R' U R U' R U' R2' D"],
      category: "Adj. corner swap",
    },
    {
      name: "Gc Perm",
      algs: ["R2' U' R U' R U R' U R2 U D' R U' R' D"],
      category: "Adj. corner swap",
    },
    {
      name: "Gd Perm",
      algs: ["R U R' U' D R2 U' R U' R' U R' U R2 D'"],
      category: "Adj. corner swap",
    },
    {
      name: "Ja Perm",
      algs: ["x R2' F R F' R U2' r' U r U2' x'"],
      category: "Adj. corner swap",
    },
    {
      name: "Jb Perm",
      algs: ["R U R' F' R U R' U' R' F R2 U' R'"],
      category: "Adj. corner swap",
    },
    {
      name: "Ra Perm",
      algs: ["R U' R' U' R U R D R' U' R D' R' U2 R'"],
      category: "Adj. corner swap",
    },
    {
      name: "Rb Perm",
      algs: ["R' U2' R U2 R' F R U R' U' R' F' R2"],
      category: "Adj. corner swap",
    },
    {
      name: "T Perm",
      algs: ["R U R' U' R' F R2 U' R' U' R U R' F'"],
      category: "Adj. corner swap",
    },
    {
      name: "E Perm",
      algs: ["x' R U' R' D R U R' D' R U R' D R U' R' D' x"],
      category: "Diag. corner swap",
    },
    {
      name: "Na Perm",
      algs: ["R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"],
      category: "Diag. corner swap",
    },
    {
      name: "Nb Perm",
      algs: ["r' D' F r U' r' F' D r2 U r' U' r' F r F'"],
      category: "Diag. corner swap",
    },
    {
      name: "V Perm",
      algs: ["R U' R U R' D R D' R U' D R2' U R2 D' R2'"],
      category: "Diag. corner swap",
    },
    {
      name: "Y Perm",
      algs: ["F R U' R' U' R U R' F' R U R' U' R' F R F'"],
      category: "Diag. corner swap",
    },
  ],
};

export default PLL;
