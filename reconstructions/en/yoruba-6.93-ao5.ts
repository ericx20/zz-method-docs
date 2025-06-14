import { Reconstruction } from "../types";

// TODO: solves are from a different average, fill them out!
export const YOUTUBE_VIDEO_ID = "sFfUZXT5pUM";
export const RECONS: Reconstruction[] = [
  {
    scramble: "L' F L' D R2 L D R D' B2 D2 R F2 R L2 F2 R2 U2 R'",
    solution: `y2 // inspection
U' R' F' // EO
D' R2 D' L2 U' R2 // Cross
// better EOCross from this angle: do B2 at the start: B2 U' R' F L' U' R2 D
U' R' U2 R L' U' L // First Pair
R U' R' U R U R' // Second Pair
// mistake: missed a free pair
U' R' U' R U R' U2 R // Third Pair
L U L' U' L U2 L' U' L U L' // Last Pair
R' U' R U' R' U2 R // OCLL
U R' F R f' R' F R2 U R' U' R' F' R2 U R' S U //PLL`,
    time: "6.94",
    movecount: 67,
    reconstructor: "Yoruba",
    videoTimestamp: 0,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "L2 U2 F L U2 F2 B' U L F' U F2 U2 F2 L2 B2 U R'",
    solution: `y2 // inspection
L (F B') R' U' F' R D' L' D // EOCross
L' U L2 U2 L' U' L U2 L' //missplanned my first pair got to improvise
D' U2 R U R' D // Second Pair
R U2 R' U R U' R' // Third Pair
U2 L' U2 L U' L' U' L U' L' U L // OLS
U' R U R' F' R U R' U' R' F R2 U' R' U // PLL`,
    time: "6.69",
    movecount: 58,
    notes: `Missed XEOcross opportunity: after L (F B') R' U' F' R, a red-blue square gets formed. You can then insert the last cross edge with L U' F2 L' to preserve that square and do an XEOcross, instead of doing D' L' D in the solve and breaking it.`,
    reconstructor: "Yoruba",
    videoTimestamp: 11,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "F U2 R' U' D2 F2 R B2 F2 L' D2 R' B' R B D F' D2 B2",
    solution: `y2 // inspection
B R2 U' F R' D R //EOCross
U' R U R' L U L' // First Pair
L' U' L U R' U' R // Second Pair
U' R U2 R' U' R U R' // Third Pair
L' U L U2 L' U' L // Last Pair
U' F R' U2 R F' R' F U2 F' R U //ZBLL`,
    time: "(6.07)",
    movecount: 48,
    reconstructor: "Yoruba",
    videoTimestamp: 25,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "F2 R2 F L' D F' U B2 D L2 F2 U2 B2 D F U F'",
    solution: `y2 // inspection
F' U' R' F D R D' // EOcross
U R' U R U' R U R' // First Pair
L U L2 U' L2 U L2 // Second Pair
// better solution: L' U L U2 L' U2 L2 U' L' to solve left block
U L U L' U' L R' U R // Third Pair
L' U' L U L' U' L U' L' U L // Last Pair
U2 U' R' D2 r U r' D2 R2 B R' U2 R B' R' U // ZBLL`,
    time: "7.17",
    movecount: 58,
    reconstructor: "Yoruba",
    videoTimestamp: 41,
    eoStepOrientation: ["y2"],
  },
];
