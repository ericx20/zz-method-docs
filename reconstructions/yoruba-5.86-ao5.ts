import { Reconstruction } from "./types";

const RECONS: Reconstruction[] = [
  {
    scramble: "F' L F2 L R2 B2 R' B2 D2 L2 U2 B L' D F2 U2 R2 D' F'",
    solution:
      "R' B' F' R2 U r U' x' D2 R // EOCross\nL U2 L2' U' L // FL\nR' U2' R U' R' U R // BR\nU' L U L' U' L U2 L' // BL\nU' R U' R' U2 R U' R' // FR\nU M' U R' U' F' U F R2 U R' U R U2' r' U // ZBLL",
    time: "6.64",
    movecount: 53,
    reconstructor: "crystalcuber",
    videoTimestamp: 2,
  },
  {
    scramble: "U2 F2 L2 B2 L' U2 L2 F2 R' U2 D R B U2 L2 B' U L F R",
    solution:
      "x2 // inspection\nR' D (F' B) U' F D2 R' D' // EOCross\nU D D' R' U R2 U' R' L U L' // BL\n(U D) R U' R' D' // FL\nU R U' R' U R U' R' // FR\nU R' U' R U R' U' R U R' U' R // BR\nU R' U' R U2 R' F' R U R' U' R' F R2 U2' R' U R U // ZBLL",
    time: "(7.16)",
    movecount: 63,
    reconstructor: "crystalcuber",
    videoTimestamp: 23,
  },
  {
    scramble: "D2 F2 R2 F2 R2 D2 L2 D' F2 D U' L' F R' B' F2 D2 R D' R2",
    solution:
      "x2 // inspection\nl D r' F D2 R L2' D2' // EOCross\nR' U R2 U' R' // FR\nL' U2 L U' R' U' R // BR\nU2 L' U' L2 U L' // BL\nL' U2 L // FL\nR' U' R U' R' U2 R // OCLL\nU' R' U R' U' R3 U' R' U R U R2' U' // PLL",
    time: "5.68",
    movecount: 49,
    reconstructor: "crystalcuber",
    videoTimestamp: 55,
  },
  {
    scramble: "F D2 R2 U2 F' L2 B' U2 B2 F' D2 R2 U F U2 B L' R2 B U B",
    solution:
      "x2 // inspection\nU2' R' F B2' R D' R' D // EOCross\nU2 R U R2' U' R // FR BR\nL' U2 L U L' U' L // FL\nU L U L' // BR\nR' F' r U2 R' D R U' R' D' R2 U' r' F U' // ZBLL",
    time: "(5.01)",
    movecount: 40,
    reconstructor: "crystalcuber",
    videoTimestamp: 71,
  },
  {
    scramble: "L2 D B2 U' B2 F2 U F2 U2 R2 B2 U' B U' R' D R' U' R U'",
    solution:
      "y2 // inspection\nF2 R U' F' D2 R' L2' // EOCross\nU L U' L' U L U' L' // BL\nR' U' R U R' U2' (R // BR\nR) U2' R' U' L' U L // FL\nU' R U' R' U2 R U' R' // FR\nU U R' F' r U R U' r' F U // ZBLL",
    time: "5.26",
    movecount: 47,
    reconstructor: "crystalcuber",
    videoTimestamp: 88,
  },
];

export default RECONS;
