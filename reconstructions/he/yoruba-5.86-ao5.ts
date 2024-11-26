import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "tkFMDZ72VbE";
export const RECONS: Reconstruction[] = [
  {
    scramble: "F' L F2 L R2 B2 R' B2 D2 L2 U2 B L' D F2 U2 R2 D' F'",
    solution: `R' B' F' R2 U r U' x' D2 R // EOCross
L U2 L2' U' L // FL
R' U2' R U' R' U R // BR
U' L U L' U' L U2 L' // BL
U' R U' R' U2 R U' R' // FR
U M' U R' U' F' U F R2 U R' U R U2' r' U // ZBLL`,
    time: "6.64",
    movecount: 53,
    reconstructor: "crystalcuber",
    videoTimestamp: 2,
    eoStepOrientation: [],
  },
  {
    scramble: "U2 F2 L2 B2 L' U2 L2 F2 R' U2 D R B U2 L2 B' U L F R",
    solution: `x2 // inspection
R' D (F' B) U' F D2 R' D' // EOCross
U D D' R' U R2 U' R' L U L' // BL
(U D) R U' R' D' // FL
U R U' R' U R U' R' // FR
U R' U' R U R' U' R U R' U' R // BR
U R' U' R U2 R' F' R U R' U' R' F R2 U2' R' U R U // ZBLL`,
    time: "(7.16)",
    movecount: 63,
    reconstructor: "crystalcuber",
    videoTimestamp: 23,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "D2 F2 R2 F2 R2 D2 L2 D' F2 D U' L' F R' B' F2 D2 R D' R2",
    solution: `x2 // inspection
l D r' F D2 R L2' D2' // EOCross
R' U R2 U' R' // FR
L' U2 L U' R' U' R // BR
U2 L' U' L2 U L' // BL
L' U2 L // FL
R' U' R U' R' U2 R // OCLL
U' R' U R' U' R3 U' R' U R U R2' U' // PLL`,
    time: "5.68",
    movecount: 49,
    reconstructor: "crystalcuber",
    videoTimestamp: 55,
    eoStepOrientation: [],
  },
  {
    scramble: "F D2 R2 U2 F' L2 B' U2 B2 F' D2 R2 U F U2 B L' R2 B U B",
    solution: `x2 // inspection
U2' R' F B2' R D' R' D // EOCross
U2 R U R2' U' R // FR BR
L' U2 L U L' U' L // FL
U L U L' // BR
R' F' r U2 R' D R U' R' D' R2 U' r' F U' // ZBLL`,
    time: "(5.01)",
    movecount: 40,
    reconstructor: "crystalcuber",
    videoTimestamp: 71,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "L2 D B2 U' B2 F2 U F2 U2 R2 B2 U' B U' R' D R' U' R U'",
    solution: `y2 // inspection
F2 R U' F' D2 R' L2' // EOCross
U L U' L' U L U' L' // BL
R' U' R U R' U2' (R // BR
R) U2' R' U' L' U L // FL
U' R U' R' U2 R U' R' // FR
U U R' F' r U R U' r' F U // ZBLL`,
    time: "5.26",
    movecount: 47,
    reconstructor: "crystalcuber",
    videoTimestamp: 88,
    eoStepOrientation: ["y2"],
  },
];
