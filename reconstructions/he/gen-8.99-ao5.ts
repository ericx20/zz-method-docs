import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "OSYLwyqW3-A";
export const RECONS: Reconstruction[] = [
  {
    scramble: "D2 R U2 L D' B L2 D R2 B2 R2 B2 R B2 U2 B2 U2 L' U F",
    solution: `x' // inspection
D x' R2 U' L' F L R2 D' // EOLine+1
R' U R2 U2 L' U' L' // lb
U R' U R2 U2 R // rb
L' U2 L U' L' U L // lf
R U' R' U R U' R' // rf
U' U R U R2 F R F' R U' R' F' U F // ZBLL
U' // +2`,
    time: "12.66+",
    movecount: 50,
    reconstructor: "Gen",
    notes: `4.95 tps without the +2 penalty.
exec at 6.90, pause halfway through the alg at 7.97, remembered the rest at 9.85.`,
    videoTimestamp: 11,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "L2 U R2 D2 U2 B2 U2 F U R' D2 U' B2 L' U' B L'",
    solution: `x' // inspection
U' x' U L l' D x' U' R2 D' R2 // XEOLine+1
// this was an official solve i just wanted to keep it safe
L L D' L U L' D R' U R U' R' U2 L' // left block
R U R' U' R U R' // rf
U U' R U R' U R U2 R D R' U2 R D' R' U2 R' U2' // ZBLL`,
    time: "8.33",
    movecount: 48,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 37,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "U' B2 U R' F2 B L U' F' D' F D' B2 R2 B2 R2 D' F2",
    solution: `x2 // inspection
D' B R' F' U' F' R D L' D // EOLine+1
U R' U2 L' U' L' U' R' U' L' U' L // left block
R' U' R' U2' R2 U R' U R' U R U' R' U' R // right block
U U2 R' U' R U' R' U2' R' D' R U' R' D R U R U2' // ZBLL`,
    time: "9.88",
    movecount: 55,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 59,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "D R2 F D' L' F2 R F2 D2 R' B2 U2 B U2 B R2 B R' U",
    solution: `x2 // inspection
R2 U' L' U' F D' R' D' U2' L U' R' // EOLine+1
L U L U' L' U L U' L' U L // lf
U' R' U' R U R' U2 R U' R' // rf
L U L' U L U' L' // lb
U' U' R' F U2' F' R F R' U2 R F' U2' // ZBLL`,
    time: "8.75",
    movecount: 53,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 85,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B2 D F2 U L2 B2 L2 R2 B' R2 B' F2 R U' B' R' B2 R2",
    solution: `x2 // inspection
L2 R' F' D R2' D' R U R' D // EOLine+1
L2 U L' U2' R' // rf
L' U L' U2' L' U L U L U2' L' U L U' L' // left block
U R' U' R2 U R2 U' R' U' R U R' U' R' U' R' U R // ZBLL
// corner twist`,
    time: "8.17",
    movecount: 48,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 109,
    eoStepOrientation: ["x2"],
  },
];
