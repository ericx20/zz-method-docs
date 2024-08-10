import { AlgSet } from "./types";

const CP: AlgSet = {
  name: "CP",
  customStickering: "EDGES:OOOO--------,CORNERS:--------,CENTERS:------",
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

export default CP;
