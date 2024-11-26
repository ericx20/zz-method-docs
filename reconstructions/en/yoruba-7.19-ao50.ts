import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "HoG809XxWqM";
export const RECONS: Reconstruction[] = [
  {
    scramble: "U2 B2 U2 R2 B2 D' L2 F2 U F U2 B R2 U2 B' L' B2 D' F2 L2",
    solution: `x2 y // inspection
U' L D F R D2 R' L // EOCross
U' L' U' L U' L' U L // FL
U' U2 U R' U' R2 U R2 U' R // BR
U' L U2 L' U L U' L' // BL
R U' R' U R U2 R' U R U' R' // FR
L' U' L U' L' U2 L // OCLL
l' U R' D2 R U' R' D2 l R U2 // PLL`,
    time: "8.80",
    movecount: 63,
    reconstructor: "Yoruba",
    notes: ``,
    videoTimestamp: 13,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "F' L2 F' D2 F D2 L2 F2 L2 F R' U B L2 F R F2 L B' R'",
    solution: `B' D2 L' F R U' L2 D R // EOCross
U U' R U R2 U' R2 // BR
U R' // setup BL
L U' L' U L U L' // mistake
U' D L' U L D' // FL
U2 L U' L' // BL
R U' R' U R U' R' // FR
U' R U R' U R U2 R' // OCLL
r' F R' F2 r U' r' F2 r R U2 // LL`,
    time: "8.19",
    movecount: 61,
    reconstructor: "Yoruba",
    notes: ``,
    videoTimestamp: 38,
    eoStepOrientation: [],
  },
  {
    scramble: "R2 D' F2 U' F2 R2 U F2 D' F2 R B2 U' F L2 B U' R' D' R2",
    solution: `y // inspection
B L2 U' F' D R D // EOCross
U' R U' R' L U2 L' // BL
U' U R' F2 R F2 // FR + FL
U R' U' R U R' U2' R // BR
U2 R U R' U R U2 R' U R' U' R U' R' U2 R U // ZBLL`,
    time: "6.33",
    movecount: 45,
    reconstructor: "Yoruba",
    notes: ``,
    videoTimestamp: 59,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "B L2 B R2 F B D' R U' F' L' F2 U2 D2 L U2 R2 L B2",
    solution: `y // inspection
D' R' F D L' D' R' F' U2 F' L' // EOCross
L U' L' U' L U L' // 1st pair
R U2 R' U R U' R' // 2nd pair
U' L' U' L R' U R // 3rd pair
U' L' U2 L U2' L' U L // 4th pair
U R U R D R' U R (R' D' D R) D' R2 U' R U R' U' R U' R' U2 // ZBLL`,
    time: "8.40",
    movecount: 63,
    reconstructor: "Yoruba",
    notes: `Better EOCross: z2 D' R2 (F' B) U' F' L' D`,
    videoTimestamp: 83,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "B2 D R2 F2 R2 D' R2 U D L2 R D2 B L F2 U' F' D B2 R'",
    solution: `x2 y' // inspection
R B R' F' U' R' D F D L D2 // EOCross
U' R U R' L U' L' // 1st pair
R U' R' D R U R' D' // 2nd pair
U R U' R' U R U' R' // 3rd pair
U R' U R U' R' U R // 4th pair
U' R2 F2 R U2 R U2 R' F R U R' U' R' F R2 U' // PLL`,
    time: "8.59+",
    movecount: 59,
    reconstructor: "Yoruba",
    notes: `Better EOCross: z2 U'D R' B' L (F R' F R).
Even without the 3 free pairs afterwards it's better.
Would be 8.95 TPS without +2.`,
    videoTimestamp: 107,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "D' B2 L2 D2 B2 U L2 D' U2 B2 F2 L' D L F2 R' U' F' R' U2 B'",
    solution: `x' // inspection
R D' R' U2 (L2' x') F D R' // EOCross
R U' R2' U2' R L' U L // 1st pair
U L U L' U L U' L' // 2nd pair
U' R' U R U' R' U' (R // 3rd pair
R) U R' U' R U R' U R U' R' // 4th pair
U' R U' R' U R U R' U R U' R2' D' R U R' D R U' // ZBLL`,
    time: "6.15",
    movecount: 61,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 129,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "D B2 D2 B2 L2 F2 L2 U2 L F' L U' B2 D L2 F' L2 U L",
    solution: `x2 y // inspection
B D R F R' F' B2' D' // EOCross
L' U L R' U R // 1st pair
U L' U' L // 2nd pair
U2 R U R' U' R U R' // 3rd pair
L U L' U2 L U' L' U L U' L' // 4th pair
U2 r' U r U r' U' r U R2' F R F' R U // ZBLL`,
    time: "7.55",
    movecount: 52,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 146,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "B2 D L2 F2 D' B2 U R2 F2 U' B U2 B2 F L D' L F R F",
    solution: `x2 // inspection
R' F D' R' F' U2' F D2 R D2 // EOCross
L U2 L' U L U' L' // 1st pair
R U2' R' U' R U R' // 2nd pair
U2' L' U L U2' L' U L // 3rd pair
U R' U' R U R' U2 R // 4th pair
U' U2 R F R' U R U2 R' U R U F' R' U2 // ZBLL`,
    time: "6.96",
    movecount: 55,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 166,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R2 B2 R2 D' B2 D' U2 R2 U B R2 U B2 F L' B2 L' D2 B2",
    solution: `y' // inspection
D2 r U r' F' D L F2 D2 // EOCross
U' U R U2' R' U2 L' U' L // 1st pair
U' R' U R U R' U' R // 2nd pair
L' U2 L2 U L2' U L // 3rd pair
U' R U R' U R U R' // 4th pair
(U) R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R // ZBLL`,
    time: "7.02",
    movecount: 63,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 184,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "R2 F' L2 B D2 L2 B2 L2 F' L' D U' L' D2 B' L' R' D' L2 F",
    solution: `y2 // inspection
R' B' U' F' L' F' D' R' L2' // EOCross
U2 l U2 R' U2 x // 1st pair
D R U' R' (D' U) // 2nd pair
R U R2' U' R2 U R' // 3rd pair
U' R' U R // 4th pair
U U R U R' F' U' L' U2 L U F U2' // ZBLL`,
    time: "7.35",
    movecount: 44,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 203,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "L' B2 L' U2 B2 R F2 L' B' D2 L' U' R' B R F' R' F U'",
    solution: `z2 // inspection
R' B' U r U' (L2' x') D' F2 L // EOCross
R U' R' U R U' R' r B2 r' // 1st pair
U2 L' U L // 2nd pair
R U R' U R U' R' // 3rd pair
U R' U R U' R' U R // 4th pair
U' R U R' U R U2 R' // OCLL
U' R U' R' U' R U R D R' U' R D' R' U2 R' // PLL`,
    time: "7.09",
    movecount: 62,
    reconstructor: "crystalcuber",
    notes: `Better EOCross: R B' D' L' F' (U' D') R2`,
    videoTimestamp: 225,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "B U' B' L' U2 B R B' R' L U' B2 L2 U F2 D' R2 F2 D'",
    solution: `y // inspection
L2' F R2 F' D R' U R U2' R' // EOCross
L U L' // 1st pair
U' L' U' L R' U' R // 2nd pair
U2 R U2 R' U' R U R' // 3rd pair
U L U2 L2' U' L2 U' L' // 4th pair
U R U R' U R U' R' U R U2 R' // ZBLL`,
    time: "6.03",
    movecount: 48,
    reconstructor: "crystalcuber",
    notes: `Misscrambled, original: B U' B' L' U2 B R B' R' L U' B2 L2 U F2 D' R2 F2 (D)`,
    videoTimestamp: 246,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "L2 F D2 B' L2 B' D2 B' R2 U L' U L D' B L B2 D' F",
    solution: `y // inspection
F' U' F' U R2 U' B2' // EOCross
L' U' L R' U R U' R' U' R // 1st pair
U' L' U' L U2 L' U L // 2nd pair
U' L U' L' U L U' L' // 3rd pair
U' R' U2' R2 U R2' U R // 4th pair
U R' U2 R U R' U R // OCLL
r' F R' F2 r U' r' F2 r R U' // PLL`,
    time: "8.91",
    movecount: 60,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 266,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "F B2 U2 F U F' R2 L F L' B D2 R2 L2 F' L2 U2 R2 L2 F",
    solution: `x' z' // inspection
U R U' r' D' L R' // EOCross
L U' L' U' L U L' // 1st pair
(U D) R U2 R' U R U' R' (U D') // 2nd pair
R U R' // 3rd pair
R' U' R U R' U2' R U R' U' R // 4th pair
U R U2' R' U2 R U R2' D' R U2 R' D R2 U2' R' U`,
    time: "7.50",
    movecount: 54,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 292,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "L2 F2 U' B2 L2 R2 D2 U' L2 R2 B2 R' U2 F L2 F U R B' R2",
    solution: `y' z2 // inspection
F' D L' R' F2 R U2' F' L' // EOCross
R' U R U R' U' R // 1st pair
U' R U R' U R U' R' // 2nd pair
U' L' U2 L U' L U L' // 3rd pair
L' U L U L' U' L // 4th pair
R' U2' R U R' U' F' R U R' U' R' F R U2 R // ZBLL`,
    time: "7.30",
    movecount: 55,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 313,
    eoStepOrientation: ["y'", "z2"],
  },
  {
    scramble: "R2 U2 B2 D2 R' B2 L' D2 F' L R D2 L' D U2 R2 F' D F'",
    solution: `x2 y // inspection
R' B R (D U') F D L D' L2' // EOCross
U2 L U' L2' U L // 1st pair
R U R2' U R L U L' // 2nd pair
R' U' R U R' U2' R // 3rd pair
R U R' U R U' R' // 4th pair
U' U R U2' R' U' R U2 R' U2 R U' R2' D' R U' R' D R // ZBLL`,
    time: "6.95",
    movecount: 56,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 332,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "R2 U L2 F2 U2 B2 D' F2 R' D B L' U F R F2 L U' L2",
    solution: `x2 y' // inspection
F U' R' D2 F' L U R' U' R L' U' L // EOCross+1
R U R2' U2' R // 2nd pair
U U' U' L U L' R U R' // 3rd pair
U L U' L' U' L U L' // 4th pair
U' U R U R' U' R' F' R U R R' U R U2' R' F U // ZBLL`,
    time: "6.66",
    movecount: 53,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 353,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "F L D' B L F' U' D2 B' R D2 F2 D2 L2 B' L2 D2",
    solution: `x // inspection
U' L D' x' R' F R D L' // EOCross
U R' U2' R // 1st pair
R U' R' D L' U L D' // 2nd pair
U2 R U' R' // 3rd pair
U2 L' U' L U L' U' L // 4th pair
U R U R' U R U2 R' // OCLL
U2' x R2' F R F' R U2 r' U r U2 B' // PLL`,
    time: "6.34",
    movecount: 52,
    reconstructor: "crystalcuber",
    notes: `Misscrambled, original: F L D' (B') L F' U' D2 B' R D2 F2 D2 L2 B' L2 D2`,
    videoTimestamp: 372,
    eoStepOrientation: [],
  },
  {
    scramble: "U2 R U2 R' B2 L' F2 U2 F2 L F2 U F' U2 R' D L' B2 L R2",
    solution: `x2 // inspection
L2' R F D' R' D' L D' // EOCross
(U D') R U' R' D // 1st pair
U' R U' R' // 2nd pair
L' U L U' L U2 L2' U L // 3rd & 4th pairs
U U' F R' F' R U R U' R' F U R U' R' U R U' R' F' U2' // ZBLL`,
    time: "6.65",
    movecount: 47,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 396,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "L2 B2 L F2 R U2 L R2 F2 U2 R U L' R D R B' R2 U2 R F",
    solution: `y z2 // inspection
R' (U D') F' D L' D R2 D2 // EOCross
D' L' U L U' L U L' D // 1st & 2nd pairs (pseudoslotting)
L' U L U L' U L U' L' U L // 3rd pair
U' R' B' U' R U R' B R // 4th pair
U' r U R' U R' D' R U R' D R U r' F R F' U // ZBLL`,
    time: "7.40",
    movecount: 55,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 417,
    eoStepOrientation: ["y", "z2"],
  },
  {
    scramble: "U2 B2 D F2 U L2 D' B2 R2 F' U L' D2 B' L' R B2 F R D'",
    solution: `y2 // inspection
B' D' F2 L F D' F2 R D' // EOCross
U' R U' R' U R U' R' L U2 L' // 1st pair
U' L' U L U' L' U' L // 2nd pair
R' U' R // 3rd pair
U R U R' U2 R U' R' // 4th pair
U' U' L' U' L U' L' U L U' L' U2 L U' // ZBLL`,
    time: "7.51",
    movecount: 53,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 444,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "D2 B L2 U2 F2 L2 U2 F2 L2 D2 F R B' L2 R U' B R2 D'",
    solution: `x2 y // inspection
L2 D' F D F' D R // EOCross
U' R' U R U L' U' L // FL
U' R U2' R' U2 R U' R' // FR
L U2 L' U' L U L' // BL
R' U R U' R' U' R // BR
U2 R D r' U2 r D' R' U2 R' U R U R' U R U2' // ZBLL`,
    time: "6.67",
    movecount: 54,
    reconstructor: "Fahmi",
    notes: ``,
    videoTimestamp: 464,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "D2 L2 F2 R2 B R2 U2 F2 U2 F' L F R F' L2 B U' B2 L2",
    solution: `y // inspection
U r' U F r R F' U2' R2' // EOCross
U D L' U' L D' // 1st pair
U R' U R // 2nd pair
U L' U L U R U R' // 3nd pair
U2' L' U L U2' L' U L // 4th pair
R' U' R U' R' U2 R // OCLL
x R2' F R F' R U2 r' U r U2 // PLL`,
    time: "6.59",
    movecount: 52,
    reconstructor: "crystalcuber",
    notes: ``,
    videoTimestamp: 486,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "L' D2 R F2 R' F2 U2 R' F2 R2 F R' U' R' D U' R' B R' F",
    solution: `y' // inspection
R' D F2 L2' F L' D' L D' R D2' // EOCross
U2' L' U L // 1st pair
R U2 R' U R U' R' // 2nd pair
D' R' U' R D // 3rd & 4th pairs (pseudoslotting)
U' R' U' F R' F' R2 S' R' U R S U // ZBLL`,
    time: "6.39",
    movecount: 40,
    reconstructor: "crystalcuber",
    notes: `Better EOCross from this orientation: F' L' D F L' R' D.
Shows how useful using F/B moves can be when there are only 2 bad edges on the 'orienting' face.`,
    videoTimestamp: 511,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "B R F U' F L D F2 L' B U2 R' F2 L' F2 R' D2 R' D2",
    solution: `y // inspection
B R' D' R' U' F' D L' D2' L U' R2 // EOCross
U L U' L' U' L U L' // 1st pair
U R' U R L' U L // 2nd pair
U' R' U' R2 U R' // ?
(U' D) R' U' R D' // 3rd pair
U2 R' U' R U R' U2' R // 4th pair
R' U' R U' R' U2 R // OCLL
R' U' R (U D') R2 U R' U R U' R U' R2' (D U2') // PLL`,
    time: "8.34",
    movecount: 68,
    reconstructor: "crystalcuber",
    notes: `Chose an EO+2 with a terrible continuation, even basic EO>Cross would be better.
Better EO+2 (same orientation): y' R' F' D' L2 U F, and after that, nice D' R finish`,
    videoTimestamp: 535,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "R U2 R F2 L' D2 F2 U2 R B2 L' D F' L2 R' F' U' F2 D F2",
    solution: `z2 // inspection
(U' D) L U R2 F // EOCross
(U D) L' U L2 U' L' D' // BR
L' U L U' L U L' // BL
U2 L' L U' L' U2 L U2 R U R' // FR
U' L' U2 L U' L' U L // FL
U R2' F2 R U2 R U2 R' F2 R U' R' U R // ZBLL`,
    time: "6.67",
    movecount: 52,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 570,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "L2 F L' F' L2 B' U D2 F D R2 B2 L D2 L B2 L' D2 L'",
    solution: `y2 // inspection
R' B' R F' (U' D) F' R' L' D' // EOCross
U L' U L R' U2 R // FR
U' U R U' R' U' R U' R' U R U' R' // FR
D' L U L' D // FL
L U' L' U U' L L' U L U' L' // BL
U U U2 x R2 D2 R U2 R' D2 R U2 R // ZBLL`,
    time: "7.29",
    movecount: 58,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 591,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "D2 L' B2 L2 R B2 U2 F2 U2 R U' B2 L' F' D L' D L2 B' U",
    solution: `y' x // inspection
r' D2 F D L' D' // EOCross
R U' R' U R' U2 R // BR
U L U' L' R U' R' // FR
D' U' L U L' D // FL
L U' L' U L U L' // BL
U2 U R U R' U R U' R' U R U' R' U' L' U U' U R U' R' L U' // ZBLL`,
    time: "6.29",
    movecount: 56,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 614,
    eoStepOrientation: ["y'", "x"],
  },
  {
    scramble: "D F B U2 B' D2 R' L U L2 F' U2 D2 R2 B' L2 F U2 B'",
    solution: `y2 // inspection
L R B R' U' F U R2 D' // EOCross
R' U R U' R' U' R // BR
U2 L' U2 L U2 L' U L // FL
R U' R' // FR
L' U' L U' L' U2 L2 U2 L' // BL
U' U' R U' R' U' R U R D R' U2 R D' R' U' R' U2 // ZBLL`,
    time: "7.59",
    movecount: 54,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 638,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "U2 L U' R2 L D' B' R' L B L' B2 D2 R' B2 L' D2 R D2 R2 B2",
    solution: `z2 // inspection
F' D2 r U' r' U R2 D // EOCross
U  L' U L2 U L' // BL
U' D' L' U' L D
U L U2 L2 U' L2 U' L' // BL
U' R' U R U R' U' R // BR
U' R2 D' R U2 R' D R U2 R U // ZBLL\n`,
    time: "6.31",
    movecount: 47,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 658,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "D B2 D' L2 F2 U R2 D' F2 D' F R' D' R' F' L F' R' F U",
    solution: `x2 // inspection
U D R' F D L2 D2 // EOCross
U' R' U2 R U R' U' R // BR
U R U' R' U' L' U' L // FL
U R U' R' U R U R' L U L' // BL
U R U2 R' U' R U R' // FR
R U R' U R U2 R' // Sune
U2 x R' U R' D2 R U' R' D2 R2 x' U' // A perm`,
    time: "6.34",
    movecount: 60,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 678,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R2 B2 F2 D2 L' R2 F2 U2 R2 D2 B L2 B' L F' D' L R' B2 U2 B'",
    solution: `y2 x // inspection
r' R F2 U2 F' D' R' R R' D' L' D2 // EOCross
U R' U' R U U' R U R2 U' R // BR
U2 R U' R' L' U L // FR
U L U' L' R U' R' // BL
U R U R' U R U2 R' L U L' // FL
R U R' U R U2 R' // cornertwist + Sune
R U' R' U' R U R D R' U' R D' R' U2 R' U' // R perm`,
    time: "9.85",
    movecount: 71,
    reconstructor: "Jouda",
    notes: `Better EOCross from this orientation: y2 L' F R U' B2 U' F R
Or you can do x2 R' F D2 L F' L2 D R' D' but that's slightly worse`,
    videoTimestamp: 699,
    eoStepOrientation: ["y2", "x"],
  },
  {
    scramble: "U2 F2 L' B' R' B' D' B D' F' L2 U' B2 D' F2 D' R2 F2 U' B2 U",
    solution: `x' z // inspection
D r' R' F' R' D' L' D2 L R2 // EOCross
D R U' R' D' // FL
R' R U' R' U2 R U R' U2 R // BR
U R U' R' U R U' R' L U2 L' // BL
U' R U R' U R U' R' // FR
U' L' U' L U' L' U2 L // Left Sune
U' M2 U M U2 M' U M2 U2 // U perm`,
    time: "7.68",
    movecount: 61,
    reconstructor: "Jouda",
    notes: `Better EOCross: y2 U' L' B'F2 U' F' R'`,
    videoTimestamp: 725,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "F U2 F L2 B' R2 B R2 B' L B L B U R' F' D' L' F'",
    solution: `z2 // inspection
D' F' R' F' U' F R2 D R2 // EOCross
L' U L U' L U2 L' // BL
R' U2 R L' U L U' L' U L // FL
U R U' R' U R U R' // FR
R' U2 R U' R' U R // BR
U' R U R' U' R U' R' U2 R U' R' U2 R U R' U // ZBLL`,
    time: "5.81",
    movecount: 58,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 747,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "B' D2 L2 B' F' R2 B2 L2 D' L F D' R' U2 L B' D L2 F'",
    solution: `x // inspection
F B' R D r' F' L F U R2 D2 // EOCross
U U' U' L' U L U' L U L' // BL
U' R U2 R' U2 R U' R' // FR
U' L' U' L // FL
U R' U' R U2 R' U' R // BR
U' R' U' R F U' R' U' R U F' R' U2 R U' // ZBLL`,
    time: "7.58",
    movecount: 56,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 770,
    eoStepOrientation: [],
  },
  {
    scramble: "U2 B' L2 F R2 B' R2 D2 F' L2 R U L R' U' R B' L F L",
    solution: `y x // inspection
r' B R' U' F D2 R' U' L2 // EOCross
U R' U R L' U L // FL
R U' R' L U' L' // BL
U2 R' U R U' R' U' R // BR
U' R U' R' U R U' R' U2 R U' R' // FR
U2  R2 U R' D' R U R' D R' U' R2 U' R2' // ZBLL`,
    time: "8.57",
    movecount: 56,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 794,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "U2 L2 D R2 B2 U' L2 D B2 D L F2 L' U2 B' L2 U' L' D2 R' D'",
    solution: `y z2 // inspection
x D' r' R U l D l' D' L D2 // EOCross
U L U L' R U' R' // FR
U' L U' L' R' U' R // BR
U' L U2 L2 U' L U' L' U2 L2 U L2 U L // BL
R U R' U R U2 R' U // ZBLL`,
    time: "5.47",
    movecount: 46,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 817,
    eoStepOrientation: ["y", "z2"],
  },
  {
    scramble: "B L2 D2 B U2 D2 L U' D' F L U2 F2 R2 U2 R' F2 D2 L' D2",
    solution: `x // inspection
R' D R r' U' F' L D' R2 D' L2 D' // EOCross
U U L' U2 L U R U' R' // FR
U' U2 L U' L' // BL 
U R U2 R2 U' R2 U' R' // BR
U' L' U2 L U' L' U L // FL
U' R U R' U R U2 R' // Sune
M2 U M M' U M U M2 U M2 U M U // Z perm`,
    time: "8.94",
    movecount: 63,
    reconstructor: "Jouda",
    notes: `better EOCross:'
D' R' (F' B) R // partialEO + 2 cross edges
D F' L2 D' // finish EOCross`,
    videoTimestamp: 840,
    eoStepOrientation: [],
  },
  {
    scramble: "R2 D2 F2 L2 D' F2 D' U' B2 L2 U R' F2 L U' B2 L2 R' B L U2",
    solution: `y' // inspection
F' B' D U' F' D R D // EOCross
U U' L U2 L' U' R' U R // BR
L U L' U' L U L' // BL
U U L' U' L R U' R' // FR
L' U L U2 L' U L // FL
U2 R U R' U R U2 R' F R U' R' U' R U2 R' U' F' // ZBLL\n`,
    time: "6.32",
    movecount: 57,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 880,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "D2 F' L2 U2 F' U2 F2 D2 L2 F2 L2 D' F U' L2 F2 R' B' D B U2",
    solution: `y // inspection
F D2 U2 F' L' D L D' // EOCross
U' R U R' L U' L' // BL
U2 L' U2 L U L' U' L // FL
U R' U2 R2 U R' // FR
R' U2 R U' R' U R // BR
R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R U' // ZBLL`,
    time: "6.63",
    movecount: 54,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 902,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "B2 L D2 L' U2 L B2 L2 F2 L B2 U B' R U2 F' R' D R U'",
    solution: `y z2
D' R' F' L F U F' R D // EOCross
U' L U' L' R' U' R // BR
U L U L2' U' L U' L' U' L2 U L' // BL
D R U R' U R U' R' D' // FL
U' R U R' // FR
U' R2 D' r U2 r' D R U2 R // ZBLL`,
    time: "7.14",
    movecount: 51,
    reconstructor: "Jouda",
    notes: `Messed up on BL, do U2 D L' U L D' instead`,
    videoTimestamp: 922,
    eoStepOrientation: ["y", "z2"],
  },
  {
    scramble: "L2 D' F2 D' F2 L2 U F2 R2 U F L' D' B' L2 F L' F R2",
    solution: `B' U' F B2 L' D2 L // EOCross
U' R U R' L U' F2 L' F2 // BL + FR
L' U2 L U' R' U R // BR
U r U r' U' L' U L F' // FL
U R U2 R' U' R U' R2 U' R U' R' U2 R U' // ZBLL\n`,
    time: "6.26",
    movecount: 47,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 950,
    eoStepOrientation: [],
  },
  {
    scramble: "B2 D' F2 D U R2 D' U' R' F' D' B L2 U' L2 B D' B' L",
    solution: `y' // inspection
U' L F L D R L D2 // EOCross
U' L' U L // FL
R' U' R U R' U2 R // BR
U R U2 R' U R U' R' // FR
U L U L' U' L U2 L' // BL
U R' U' R U R U2 R' U' R U' R2' U2 R // ZBLL`,
    time: "5.85",
    movecount: 49,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 971,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "L2 B2 D U2 F2 U' R2 D' F' L B F L' D' B L D' U2 F",
    solution: `x // inspection
U' D2 F r R' F' D2 R' // EOCross
U R' U R // BR
U2 R U' R' L U' L' // BL
U' U R U' R' U L' U' L // FL
R U' R' U R' D' R U R' D R // FR
U' U R U R' U R U R2' D' r U2 r' D R2 U R' U // ZBLL`,
    time: "6.83",
    movecount: 57,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 990,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B2 R B2 R' U2 R' U2 F2 L B' L2 F' R' D' U2 L2 F' L' R'",
    solution: `y2 // inspection
B R D2 F' R2 U L2 D' R' // EOCross
R U' R' D R U R' D' // FL
U2 L U L' // BL
R U' R' D R' U R D' // FR
R U' S R2 S' R2 U R' // BR
U' U R U R' U F' R U2 R' U' R' U' R' F R U R U2 // ZBLL +2`,
    time: "9.57+",
    movecount: 58,
    reconstructor: "Jouda",
    notes: ``,
    videoTimestamp: 1012,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "U2 R2 F U2 R2 F' L2 R2 D2 L2 U' R' B F2 L' B L' R' F U",
    solution: `y2 // inspection
B L' (U' D) F // EO + 2 edges
D R2 D L' D' // EOCross finish
L' U' L R' U' R // 1st pair
R U' R' U R' D' R U R' D R // 2nd pair
U2 L U' L' U L U L' // 3rd pair
L' U L U' L' U' L // 4th pair
U' U2 R' U' R U' R' U' R U2 R D r' U2 r D' R' U' // ZBLL`,
    time: "6.45",
    movecount: 59,
    reconstructor: "Yoruba",
    notes: `An alternate EOCross finish can be D2 L' D' R2.
For 2nd pair, BL was better to solve than FR`,
    videoTimestamp: 1035,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "U2 L F2 R' D2 R B2 D2 B2 L2 U2 B D' R' U' L' D2 B' F' R D'",
    solution: `y // inspection
B R' B R L U F' U' R2 // EOCross
U2 L' U' L2 U2 L' // 1st pair
U2 R U2' R' U2 R U' R' // 2nd pair
R2 D' F2 D R2 // multislot 
U U' R D R' U R D' R2 U' R U R' U R U R' U' R U2 // ZBLL`,
    time: "7.22",
    movecount: 48,
    reconstructor: "Yoruba",
    notes: ``,
    videoTimestamp: 1057,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "F' L2 U2 B' D2 R2 F' U2 R2 F U2 R U' F' D2 F2 L2 U2 B L' U",
    solution: `y // inspection
B' D L R' F L' D2 L R D' // EOCross
R U2 R' U' L' U L // 1st pair
R U' R' U2 R U R' // 2nd pair
U' L U' L' U L U L' // 3rd pair
U2 R' U R U' R' U R // 4th pair
U2 R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F U2 // ZBLL`,
    time: "6.57",
    movecount: 62,
    reconstructor: "Yoruba",
    notes: ``,
    videoTimestamp: 1080,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "L2 F2 U R2 D' L2 F2 U2 B2 U R U L2 R2 F2 U F' L U' R'",
    solution: `z2 // inspection
L D R' F' L D' R2 U' L2 D' // EOCross
U D' R U' R' D // 1st pair
U R U' R' U R U R' // 2nd pair
U' L U L' // 3rd pair
U2 L' U L U' L' U L // 4th pair
R R' R U R' U R U2 R' // OCLL (misrecognized)
U' U' R U2 R' U' R U' R2 U2 R U R' U R // ZBLL`,
    time: "9.86",
    movecount: 60,
    reconstructor: "Yoruba",
    notes: `Misrecognized corner twist and did sune. Still gave me a valid case`,
    videoTimestamp: 1116,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "D2 L2 F R2 D2 B F R2 D2 F2 R B2 U' L D2 B' F' D L2 U",
    solution: `y' // inspection
R' F' B L' F' L2 R' D R // incorrect EOCross
R L' D2 R' L D' D' // fix EOCross
U' R U R2' U' R // 2nd pair
R U' R' U L' U' L // please stop my suffering
U2 R U R' // 3rd pair
U2 r U r' U' r' F r F' // 4th pair
U' U R2 D' R U' R' D R2 U' R' U2 R U' // ZBLL`,
    time: "8.40",
    movecount: 56,
    reconstructor: "Yoruba",
    notes: `Misscramble, original: D2 L2 F R2 D2 B F R2 D2 F2 R B2 U' L D2 B' F' D L2 (U')
Suggested EOCross: y F R D L2 U' L U F' D2`,
    videoTimestamp: 1146,
    eoStepOrientation: ["y'"],
  },
];
