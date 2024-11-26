import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "3wZ4Dhp505o";
export const RECONS: Reconstruction[] = [
  {
    scramble: "U L2 D' L2 U F2 D B2 L2 D' L2 U F' R' D F D2 B' L' B' F2",
    solution: `z2 x // inspection
(Lw R) F' D2 R' F' D F2 L2' // EOCross
U' U' L' U L U R U R' // pair 1
U L U' L' U L U L' // pair 2
R D R' U' R D' R' // pair 3
L' U' L U2 L' U L // pair 4
L' U' L U' L' U2 L // OCLL
U R U R' F' R U R' U' R' F R2 U' R' // PLL`,
    time: "7.55",
    movecount: 60,
    reconstructor: "Gen",
    videoTimestamp: 10,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "R' F2 R B2 L' F2 D2 U2 L2 B2 F2 R' B R B' U R' U2 B' D'",
    solution: `y2 x // inspection
L' U' L U' Rw' D' R U' L2 // EOCross
U2 L U' L' // pair 1
L' U' L U' R' U' R // pair 2
U' R U' R' // pair 3
L' U L // pair 4
R U2 R' U' R U' R' // OCLL
U' U U' R' U' R' D' R U' R' D R U R' D' R U R' D R2 U' // PLL`,
    time: "6.60",
    movecount: 55,
    reconstructor: "Gen",
    videoTimestamp: 30,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "U' B' R U D' B2 D L' D2 L' U2 F2 R2 F2 L D2 R2 F2 U L",
    solution: `z2 // inspection
R' U2 F R2 L2 D' R' // EOCross
U U2 R' U2 R U' R' U R // pair 1
U R U R' U R L' U L R' // pair 2
L U' L' U' R U R' // pair 3
U' L U L' U' L U2 L' // pair 4
U U' R U R' U F' R U2 R' U2 R' F R // ZBLL`,
    time: "7.07",
    movecount: 55,
    reconstructor: "Gen",
    videoTimestamp: 48,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "R U2 R' D2 R' U2 L U2 B2 L F2 U2 B R B' F2 D' L' F' R2",
    solution: `z2 x // inspection
L' x' F' U' R2 D' R D2 R // EOCross
U L' U' L2 U L2 U' L // pair 1
L U' L' U L U L' // pair 2
U' R U R' U2 R U' // pair 3
R2 U' R U R' U' R U R' U' R // pair 4
U R' U2 R U R' U R // OCLL
x R' U R' D2 R U' R' D2 (Lw R) U' // PLL`,
    time: "6.72",
    movecount: 59,
    reconstructor: "Gen",
    videoTimestamp: 70,
    eoStepOrientation: ["z2", "x"],
  },
  {
    scramble: "R2 U L F2 B2 D R B' D2 F2 L2 B D2 L2 F B' R' F'",
    solution: `z2 x // inspection
L' R2 x' F' D2 R' L' D' R' // EOCross
U D L' U' L (D' U') // pair 1
R' F2 R F2 // pair 2
U' D' R U' R' (D U) // pair 3
R' U' R U R' U2 R // pair 4
R' F R f' R' F R2 U R' U' R' F' R2 U R' S U' // PLL`,
    time: "(5.36)",
    movecount: 48,
    reconstructor: "Gen",
    videoTimestamp: 88,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "D2 R2 U2 B2 R2 U2 B' F2 D2 F2 U2 R' D F D2 L2 R' F' L2 R'",
    solution: `y2 // inspection
L' R2' F D R2' U' L' D' // eocros
U L U2 L' U L U' L' // pair 1
U' R U R2' U' R // pair 2
U U' U R U R' // pair 3
U2 L' U2 L U' L' U L // pair 4
R' U' R U' R' U2 R // OCLL
U R' F x U' R' F R F' R U2' Rw' U L F2' U // PLL`,
    time: "6.52",
    movecount: 58,
    reconstructor: "Gen",
    videoTimestamp: 106,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "U' R' L D' F B U2 R' U' B2 L2 F' L2 D2 F2 D2 B U2 R2 B",
    solution: `z2 y' x // inspection
Rw' U' B' R' F R U2 L D' // xEOCross
U' R U' R' L U' L' // pair 2
U' R U R' // pair 3
U2 R' U' R U R' U2' U' U R // pair 4
U' R' U' R U R' U R U2 R' U R U2 R' U' R // ZBLL`,
    time: "5.77",
    movecount: 46,
    reconstructor: "Gen",
    videoTimestamp: 128,
    eoStepOrientation: ["z2", "y'"],
  },
  {
    scramble: "U2 B' U2 B2 L2 D2 L2 B' U2 F' R2 F2 L B2 D R' U2 L' D' B' U2",
    solution: `y x // inspection
D Lw (U' D) F' L D' R L2' // EOCross
U L' U2 L U' L' U L // pair 1
U' R' D' R U' R' D R // pair 2
U L U L' U' L U Lw' // pair 3
U U' Rw' U' R U R' U' R // pair 4
R U R' U R U2 R' // OCLL
U R U' R' U' R U R D R' U' R D' R' U2 R' // PLL`,
    time: "7.07",
    movecount: 65,
    reconstructor: "Gen",
    videoTimestamp: 144,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "F2 U L2 U F2 U R2 U' B2 D' B2 L F' L' B' D' L2 B2 D2 B",
    solution: `y // inspection
L R' F' R U R' U' F D R L2 D2 // EOCross
// more efficient EOCrosses from this orientation:
// y' R' D' F R F' R L' D'
// y' D' L' F R F D' L
U' R U' R' U' L U // pair 1
L2' U' R U (L R') // pair 2
R' U' R // pair 3
U' R U' U R' U R U' R' U' R U' R' U R U' R' // pair 4
U' U R U R' U R R' R U R2' D' Rw U2 Rw' D R2 U R' U // ZBLL`,
    time: "6.44",
    movecount: 64,
    reconstructor: "Gen",
    videoTimestamp: 168,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "L2 R U2 F2 L2 B2 L' D2 R' D2 B2 D' R2 B U F' R' U B",
    solution: `y' // inspection
L R' F2 U' L F L' B2 D2 // EOCross
D R U R' U R U' R' D' // pair 1
U R' U R U L U L' // pair 2
U R U2' R' U R' U' R // pair 3
U' U' R' U' R' R U' R2 U R2' U R // pair 4
L' U' L U' L' U2 L // OCLL
x R2' D2 R U R' D2 R U' R // PLL`,
    time: "7.77",
    movecount: 62,
    reconstructor: "Gen",
    videoTimestamp: 201,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "B R' L2 F2 D R2 U2 L2 D' U2 R2 F2 L2 R' D2 F R F2 L2 U B",
    solution: `z2 y' x // inspection
F L D2' x' R' U' F L' // EOCross
U U' L U2 L' // pair 1
U2 R' U R L' U L // pair 2
R U' R2 U R2' U' R' // pair 3 and 4
U' L' U' L U' L' U2 L // OCLL
U R2' U' R U' R U R' U R2 (U D') R U' R' (D U')`,
    time: "(5.52)",
    movecount: 49,
    reconstructor: "Gen",
    videoTimestamp: 227,
    eoStepOrientation: ["z2", "y'"],
  },
  {
    scramble: "U2 B2 L R F2 R B2 R2 U2 F2 U L F R U' L' F D2 L",
    solution: `z2 y' x // inspection
U L U' x' D' F D R // EOCross
R' U' R L U L' // pair 1
U2 L' U L // pair 2
(U D) R' U' R D' // pair 3
U2 R' U' R U R' U' R U R' U' R // pair 4
U U' R' D' R U' R' D R U2 R U' R' U R U R' U' R U R' // ZBLL`,
    time: "6.27",
    movecount: 55,
    reconstructor: "Gen",
    videoTimestamp: 245,
    eoStepOrientation: ["z2", "y'"],
  },
  {
    scramble: "U R2 F R U2 L B R B' L2 U' F2 L2 F2 B2 D' L2 B2 U'",
    solution: `x' // inspection
L (D' U) R x' F' U2 R L2 D' // EOCross
U' U L U' L2' U L // pair 1
U R U R' U R U' R' // pair 2
L R' U R // pair 3
L' U' L' U2 L2 U L2' U L // pair 4
U2 R2' D' R U2 R' D R U2 R U' // ZBLL`,
    time: "6.36",
    movecount: 47,
    reconstructor: "Gen",
    videoTimestamp: 263,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "F2 D2 L2 B' R2 B U2 R2 B' D2 L2 F' D' R B U' L R' D2 L",
    solution: `z2 y // inspection
R' (F B') R F' R' D2 R' D // EOCross
U' R U' R' // pair 1
D R' U' R D' // pair 2
U' (U' D') L' U L D // pair 1
U2 L' U L U' L' U L // pair 3
U' L U L' U' L U L' // pair 4
U r' U r U r' U' r U R2 F R F' R U // ZBLL`,
    time: "(8.30)",
    movecount: 55,
    reconstructor: "Gen",
    videoTimestamp: 282,
    eoStepOrientation: ["z2", "y"],
  },
  {
    scramble: "B D2 L2 U R2 D F2 U' L2 D2 L2 B2 D L B R U' F2 L' F R",
    solution: `R B' R' (U' D) F R2 D L' // EOCross
R' U R U L U L' // pair 1
U2 R U R' U2 R U' R' // pair 2
U' R' U2' R L' U L // pair 3
R' U R U' R' U' R // pair 4
U2' U' R' U2 R' D' r U2 r' D R2 U // ZBLL`,
    time: "6.16",
    movecount: 49,
    reconstructor: "Gen",
    videoTimestamp: 303,
    eoStepOrientation: [],
  },
  {
    scramble: "F2 L2 U F2 D B2 R2 D2 L2 U B R F' R2 F U2 L' R D R2 U'",
    solution: `x2 // inspection
Lw U D' L' U' Lw D' R2 L D // EOCross
// z2 L (F B') R' F' D' R D2 R' is a better EOCross
U L U' L' U L U L' // pair 1
L' U' L R' U R // pair 2
U' R U2 R' U R U' R' // pair 3
U2 L U2 L2' U' L2 U' L' // pair 4
R' U2 R U R' U R // OCLL
M2' U' M U2 M' U' M2' M2' U' M U2 M' U' M2' U' // PLL`,
    time: "8.09",
    movecount: 62,
    reconstructor: "Gen",
    videoTimestamp: 326,
    eoStepOrientation: [],
  },
  {
    scramble: "R' L2 F2 D2 L2 D2 L2 D L2 F2 D' B' L2 R' B U F D2 U' L'",
    solution: `x' // inspection
L' x' R U R' U' F' L' D' R D' // EOCross
U U' D R U R2' U' R D' // pair 1
U L' U' L2 U L' // pair 2
U' U' R U' R' U' L' U' L // pair 3
R U' R' // pair 4
L' U' L U' L' U2 L // OCLL
M2' U M U2 M' U M2' U // PLL`,
    time: "5.73",
    movecount: 52,
    reconstructor: "Gen",
    videoTimestamp: 348,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "F' R' B' R' B2 U' R' D' F' U2 F2 R2 L2 U L2 D F2 U D F",
    solution: `z2 x // inspection
D B U' L' U x' U2' F D' L // EOCross
U R' U' R2 U R2' U' R // pair 1
U2 R U' R' U L' U' L // pair 2
R U R' U L U L' // pair 3
U' R U R' U R U' R' // pair 4
U2 U2 R' D' Rw U2 Rw' D R U R U' U R' U R U' R' U' R U' R' U2 // ZBLL`,
    time: "6.95",
    movecount: 63,
    reconstructor: "Gen",
    videoTimestamp: 367,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "B D' R' B' L D R2 B' R D2 R D2 F2 U2 L' B2 R' D2 B2",
    solution: `z2 x // inspection
L' D' x' R2' F U' L2' F' D2 R' D2 // EOCross
// z2 L B L' R2 B2 U' F for a better EOCross from this angle
U R' U2' R U' R' U R // pair 1
L' U' L U' L' U L // pair 2
U R U' R' U R U' R' U2 R U' R' // pair 3
U2 L U L' U' L U L' // pair 4
U' // ZBLL`,
    time: "5.60",
    movecount: 46,
    reconstructor: "Gen",
    videoTimestamp: 392,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "R' B' D' R B' U L B L2 F L2 B U2 R2 F2 R2 D2 B' L2 U R'",
    solution: `z2 x // inspection
L' D x' R2 U2 R' F' U' L' D // EOCross
U' L U L' U L U' L' // pair 1
U R U2' R2' U R // pair 2
L' U2 L // pair 3
U R U' R' // pair 4
U2 R U' R2 D' R U' R' D R U' R U R' U R U R' U2' // ZBLL`,
    time: "5.85",
    movecount: 49,
    reconstructor: "Gen",
    videoTimestamp: 410,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "U2 F R B2 U L2 U' F2 U' R2 B2 L2 D2 L' U2 R2 F' R B' F2",
    solution: `x2 // inspection
D' R D' R' F' R' F2 D L' // EOCross
U2 L' U' L2 U L' // 1st pair
R U R' U R L' U L R' // 2nd pair
R U R' U R U' R' // 3rd pair
R' U' R U2 R' U' R // 4th pair
U2 U' U2 U2 R R' U U' // shenanigans
R U R' U R U2 R' F R U' R' U' R U2 R' U' F' U // ZBLL`,
    time: "7.73",
    movecount: 64,
    reconstructor: "Yoruba",
    videoTimestamp: 430,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B' D' F U' D R L' D' F' B2 D2 F2 R' U2 F2 R2 F2 L B2",
    solution: `x2 y' // inspection
L' B' (U' D') F U R2 L' D // EOCross
U L L' L' U L2 U L' // 1st pair
U2 L' U L R' U R // 2nd pair
U' L' U' L U' L' U L // 3rd pair
R U' U R' U2 R U' R' U R U' R' // 4th pair
U2 U' R' U2 R2 U R' U' R' U2 F R U R U' R' F' // ZBLL`,
    time: "7.32",
    movecount: 60,
    reconstructor: "Yoruba",
    videoTimestamp: 450,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "D2 L2 U2 L2 B2 D' L2 D' B2 D' B' R' F2 D U R2 B L' B U'",
    solution: `x2 y' // inspection
R B' R2 F R // EO+2
D' L' D L' // EOCross
U' R U' R2' U R // 1st pair
D' L' U L D // 2nd pair
U D L' U' L D' // 3rd pair
L' U' L U L' U' L // 4th pair
U' U' R2 F' R U2 R U2 R' F U' R U R' U' R U // ZBLL`,
    time: "6.16",
    movecount: 52,
    reconstructor: "Yoruba",
    videoTimestamp: 472,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "F' R B2 U2 R2 D' F2 U R2 U R2 U2 L' U' R2 B' L2 U2 R2 B'",
    solution: `y x // inspection
D' R' D' x' (U' D') F D' U' L2 D' R D // EOCross
// B L DU' F D L F2 R for an xEOCross
L' U L U' L U L' // 1st pair
U D' R U2 R' U R U' R' D U2 L' U L // 2nd pair
U R U' R' U R' U R U U' R U' R' // 3rd pair
U R' U R U' R' U' R // 4th pair
U2 L' R U2 R2 U' R2 U' R' U' L U R' U2 R U2 // ZBLL`,
    time: "(10.10)",
    movecount: 70,
    reconstructor: "Yoruba",
    videoTimestamp: 498,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "R2 U' R2 B2 R2 U' F2 D' L2 F2 D2 B' L B2 D F L2 R B U2",
    solution: `x2 y // inspection
R' D' L' B' F' R F R L' // EOCross
U' R' U R U' L U L' // 1st pair
R' U R L' U L // 2nd pair
U2 R U' R' // 3rd pair
U R' U2 R // 4th pair
U R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R' // ZBLL`,
    time: "5.83",
    movecount: 47,
    reconstructor: "Yoruba",
    videoTimestamp: 520,
    eoStepOrientation: ["x2", "y"],
  },
];
