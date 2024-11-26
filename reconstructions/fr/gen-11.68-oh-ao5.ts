import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "GE2QVYJWSjc";
export const RECONS: Reconstruction[] = [
  {
    scramble: "L F2 U' R F U2 F2 R F L F2 U L2 U' B2 D2 R2",
    solution: `x // inspection
r D r R D' x' // EOLine
z U R U' R U' z' R' U R U' z U' z' // left block
R' U R U2' R U2 R U' R' U R U2' R' U R // right block
U' U R' U2' R F U' R' U R U F' R' U R // ZBLL`,
    time: "10.69",
    movecount: 45,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 8,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R2 U2 L F' B' D' B' L' B' U2 D2 B' D2 F' L2 B2 R2 L U2",
    solution: `x // inspection
r U' F' R2 x D r' D // EOLine+1
z U2 z' D R' U2' R D' U R U' R' // right block
U' z U' R' U R' U2' R U R' U R2 U' R' U R U' z' // left block
U2' R U R' U R U2' R' U2' R U2' R' U' R U' R' // ZBLL`,
    time: "12.43",
    movecount: 49,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 36,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B U' F D F U2 R L' U F B2 U' L2 U R2 D' R2 L2 D' B",
    solution: `x' // inspection
D' R B z U2 z' U' R' r' D // EOLine
R2 U2' R' z U' R2 U' z' U' U U' R' U2' R2 U' z U' z' // left block
U' R' U2' R' U' R' U2' R' U R U' R' U R // right block
U' R' U R U2 R' L' U R U' r // ZBLL`,
    time: "10.88",
    movecount: 47,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 63,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "R B2 R2 D R2 D R2 U' F2 D' R B' F2 L2 F' L2 U R B2",
    solution: `x' // inspection
U r' U D' F' R' U' z U2' z' D' // EOLine
U R U R' U' R' U2' R' U' U2 L U' R' // right block
z U R2 R' U' R' U R U' R2 U' R' U R U' R2 U z' // left block
U' U' R' U' R2 D U' U R' U2 R D' R' U2' R' U' R U R' U R U2' // ZBLL`,
    time: "12.96",
    movecount: 60,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 90,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "U2 R' L2 D2 F2 U2 F2 U2 L2 U L2 F2 U2 F' U2 L D2 R' F U' B",
    solution: `x2 // inspection
D' f' z R' F D R2 D' // EOLine
R U' R2 U R' U2' z U' z' U2' R U' R' U' z U' z' // left block
U R' U2 R U R U2 R U' R U' R' U R U R' // right block
U U' R U R' U R U' R' U R' U' R2 U' R2' U2 R U2' // ZBLL`,
    time: "11.74",
    movecount: 54,
    reconstructor: "Gen",
    notes: ``,
    videoTimestamp: 117,
    eoStepOrientation: ["x2"],
  },
];
