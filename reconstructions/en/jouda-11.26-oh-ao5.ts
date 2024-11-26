import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "AIT17IGYc0A";
export const RECONS: Reconstruction[] = [
  {
    scramble: "R' F R U' F' R2 F L' D' R2 D F2 U' L2 U R2 U F2 B2 L2",
    solution: `x2 // inspection
U' D R' r U r' D R2 z U2 z' D' // EOCross
U R' U R z U R' U' z' // 1st pair
U R U' R' U2 R' U R // 2nd pair
D' z R2 U' R' U z' D // multislot
U' F U' R U' R U R' U R U2 R' U R' U' R U2 R' F' U2 // PLL`,
    time: "10.03",
    movecount: 51,
    reconstructor: "Jouda",
    videoTimestamp: 9,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R F D2 L2 R' U2 B2 L2 R' F2 U2 F2 U2 B' U L2 R2 B2 L2 B",
    solution: `x' // inspection
U' r' U' r' U' x R R D2 // EOCross
U' R' U2 R U2' R' U R // 1st pair
R U z U' R U z' R' // 2nd pair
U R U R' U R U' R' // 3rd pair
z R2 U R' U' R' U R' U' R U R U' z' // 4th pair
U' R U R' U R U2 R' U2 U2 // OCLL`,
    time: "(8.51)",
    movecount: 52,
    reconstructor: "Jouda",
    videoTimestamp: 47,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R2 U' F U' B D R' B' F2 U2 B2 L2 U R2 D' R2 D2 L2 U F2 R",
    solution: `x2 // inspection
U' R' x D U' R U' r' R2 D' R' D' // EOCross
R' U R R U R' // 1st pair
z R' U' R R U R U' R' U // 2nd pair
R z' U R' U2 R U R' U' R // 3rd pair
z R' U R U' z' // 4th pair
U R' U' R U' R' U2 R // OCLL
R' U' R U' R' F' R U R' U' R' F R U2 R U // PLL`,
    time: "(12.41)",
    movecount: 63,
    reconstructor: "Jouda",
    videoTimestamp: 74,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "U R' B' R L' B D2 R B L2 U' F2 B2 L2 U2 F2 D R2 F2 D' F'",
    solution: `x2 // inspection
D r' U x D' F' D R' D F U' f' S // EOCross 
U' z U R U' // 1st pair
z' R' U' R z U' R U z' // 2nd pair
U' R' U' R U' R' U R // 3rd pair
U2' R U2' R' U R U' R' // 4th pair
R' U2 R U2 R' F R U R' U' R' F' R2 U // PLL`,
    time: "12.06",
    movecount: 53,
    reconstructor: "Jouda",
    videoTimestamp: 112,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "L' F U2 L2 B' L2 R2 U2 R2 F' D2 F2 U' R D U B' R F2",
    solution: `x2 // inspection
U R' F R' z U' z' D' z U' U' // EOCross
R R U' R R U R U' R' U z' // 1st pair
U' R U R' // 2nd pair
U' R' U' R U R' U' R // 3rd pair
z R R U R' U' R' U R' U' R U R U' z' // 4th pair
U' U' F U' R' U' U' R U F' U' R' U2 R U2 // ZBLL`,
    time: "11.68",
    movecount: 58,
    reconstructor: "Jouda",
    videoTimestamp: 138,
    eoStepOrientation: ["x2"],
  },
];
