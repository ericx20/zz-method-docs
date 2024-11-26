import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "8vP6Or-pAeM";
export const RECONS: Reconstruction[] = [
  {
    scramble: "L' F' R U' B' U B' U2 L R2 U' F2 B2 U' L2 U' R2 F2 U' L2 U2",
    solution: `x2 // inspection
R' B R2 S R S' R' D' L' D' // EOCross (should've done y' F L' F B D' F2 B2)
U D' R' U' R D // 1st
U2' R U' R' U R U R' // 2nd
L' U2 L U' L' U L // 3rd
U' R' U' R U2 R' U R // 4th
U' U R U R' U R U R' U2 L R U' R' U L' // ZBLL`,
    time: "8.84",
    movecount: 56,
    reconstructor: "Luna",
    videoTimestamp: 33,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "L2 U' B' R2 B' R D' L B2 L2 B L2 B R2 F' L2 F L2 F D2",
    solution: `x2 y // inspection 
r' U' r R' D' F' R B2 R L' D // EOCross
L U' L' D L' U L D' //tf was I doing
U R' U' R // 2nd
U L' U2 L2 U L2' U L // 3rd
U' R' F' R U R U' R' F // 4th
U' U2 R U R' U R U2 R2' U' R U' R' U2 R`,
    time: "9.25",
    movecount: 55,
    reconstructor: "Luna",
    videoTimestamp: 64,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "U2 R2 U2 B' R2 F L2 D2 F D2 B' L2 D' L U2 R' B2 D B2 R'",
    solution: `x y2 // inspection
U' r' F D' R L' U L' D // EOXCross
U2 R' U' R //2nd
U2 R U' R' // 3rd (pseudopair)
D U' R U R' U' R U2 R' D' // 4th
R D R' U2 R D' R' U' R' U2 R U' R' U' R U2 // ZBLL`,
    time: "6.72",
    movecount: 42,
    reconstructor: "Luna",
    videoTimestamp: 93,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "U2 B' U2 F' U2 L' D' L' B2 U2 B' R2 F' U2 R2 L2 B D",
    solution: `x2 y // inspection 
U' R' F' U' F' D2 R L' // EOCross
U R U2 R' L U' L' // 1st
R' U R U L' U' L // 2nd
U' R' U' R // 3rd
U2 R U2 R' U R U R' U R U' R' // 4th (OLS)
U' R' U' R U D' R2 U R' U R U' R U' R2' U' D // PLL`,
    time: "7.93",
    movecount: 53,
    reconstructor: "Luna",
    videoTimestamp: 114,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "D' B L B2 D B' U2 R' F2 B2 U' F2 D' R2 B2 R2 B2 D' R2 D F' ",
    solution: `y' // inspection 
D' B L R2' F R' U F2 // EOCrossn't (pls forgive me for this)
L' U L U' L' U L //1st
B' R B R' // you did EO wrong dumbass
L U' L' // are you srsly gonna regrip for this
R' U' R U R' U' R // 3rd
R U2 R' U R U' R' // 4th
R' R U R' U' R U' R' U2 R // OCLL
U' x R2' F R F' R U2 r' U r U2 B' // PLL`,
    time: "9.61",
    movecount: 58,
    reconstructor: "Luna",
    videoTimestamp: 149,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "B' D F2 U' F2 D L2 B2 R2 D L2 R D2 U2 B2 F' D' U' R F2",
    solution: `L U D' F D L D L U R' D2 // EOCross
U R' U' R L' U' L // 1st
U L U2 L' U2 L U' L' // 2nd
D' R U' R' D // 3rd
U' U' R U' R' U R U R' // 4th
U' R U R' U R U2 R' // i didn't realise that I know this ZBLL
U' R' U R' U' R D' R' D R' U D' R2 U' R2' D R2 // PLL`,
    time: "9.96",
    movecount: 65,
    reconstructor: "Luna",
    videoTimestamp: 180,
    eoStepOrientation: [],
  },
  {
    scramble: "B2 D2 F' L2 R2 U2 F' L2 F' L2 R' D' L B F' U' R' F2",
    solution: `x2 // inspection
U' R' B' L' F D L D L' U' R2' // EOCross
U' D' L' U' L D // 1st
U2 R' R L' U' L2 U L2' U' L // 2nd
U' R' U2 R U2 R' U R //3rd
U L U' L' U' L U L' // 4th
U2' U' r U R' U' r' F R F' // ZBLL`,
    time: "9.40",
    movecount: 59,
    reconstructor: "Luna",
    videoTimestamp: 208,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "U' L2 R2 D2 U' L2 F2 U F2 D B R2 F' U' R' D B D2 L U'",
    solution: `x2 y // inspection 
B' R U D F' R L D L' U L2 D' // EOCross (why would you do L' U L2 to preserve the pair when you could just do U' L2 to get an EOXCross?)
L U' L' // don't regrip kids
R U2 R' U' R' U2 R L' U L // don't to this
R' U2 R U D R' U' R D' // or this
U2 R' U' R // 4th
U' U' r U R' U' r' F R F' U // ZBLL`,
    time: "8.24",
    movecount: 49,
    reconstructor: "Luna",
    videoTimestamp: 235,
    eoStepOrientation: ["x2", "y"],
  },
  {
    scramble: "F' D' L2 D2 F2 L2 U' R2 F2 D' F2 D R2 F L2 U2 F R2 D2 R B",
    solution: `y // inspection 
R' F D U L U2 R U L2 // EOCross
R U R' U R U R' // 2nd
U U U' L' U2 L U L' U' L // 3rd
U' L U2 L' U2 L U' L' // 4th
F R' F' r U R U' r' U2 // ZBLL`,
    time: "7.37",
    movecount: 43,
    reconstructor: "Luna",
    videoTimestamp: 266,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "F2 L' F' U' B2 R' L' U' R2 F U2 F' L2 F L2 F' D2 B2 L2 F' R'",
    solution: `z2 // inspection
U2 R' L F D2 R2' D F2 // EOCross
U' L' U2 L2 U' L' // 1st
U' R U R' U D' R U' R' D // 2nd
U' R U2 R' U2 L' U' L // 3rd
R U' R' U2 R U' U' R' // 4th (why the U2 insert though?)
U' U' R' U' R' D' R U R' D R U2 R U R' U R U' // ZBLL`,
    time: "8.96",
    movecount: 57,
    reconstructor: "Luna",
    videoTimestamp: 288,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "L' D R' D R B' D2 F R F2 B2 R F2 R' D2 B2 L'",
    solution: `L' R B R2' F R' L2 D' R2 U' L' U L D' // EOXCross
L U2 R U' R2' U R L' // 2nd 
U' R U R' L U L' // 3rd
U R U2' R' U' R U2' R' // 4th
R' U R' U' R D' R' D R' U D' R2 U' R2' D R2 U2 // ZBLL`,
    time: "9.60",
    movecount: 54,
    reconstructor: "Luna",
    videoTimestamp: 313,
    eoStepOrientation: [],
  },
  {
    scramble: "D B2 F2 R2 D' L2 D B2 F2 R' B L' B2 D2 B R D R' F",
    solution: `y2 // inspection
B D R F L' D // EOCross
U' R U2 R2' U' R // 1st
R U' R' U R U R' //2nd
U D L' U' L D' // 3rd
U2 L' U L U L' U' L // 4th
U2' R U R' U R U2' R' U R' U' R U' R' U2' R U2 // ZBLL`,
    time: "7.92",
    movecount: 48,
    reconstructor: "Luna",
    videoTimestamp: 339,
    eoStepOrientation: ["y2"],
  },
  {
    scramble: "R' B' D L2 U L2 D R2 D2 F2 D' B R' B F D U' F' D' ",
    solution: `x' // inspection
D' r' D F' L2 D2 U' L' U2 L' // EOCross
R U R' // 1st
U L U' L' // 2nd
L' U' L // 3rd
U' R' U' R U R' U2 R // 4th
U' U' R U' R' U' R U R D R' U2 R D' R' U' R' U' U' // ZBLL`,
    time: "8.35",
    movecount: 47,
    reconstructor: "Luna",
    videoTimestamp: 364,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "F' D L2 U R2 D2 R2 D' F2 U2 R2 U' L2 B F L B R' U2 F R2",
    solution: `x2 y' // inspection
R B' U' R' L' F L D L' D R // EOCross
U R' U R // 1st (should've cancelled though)
D L' U' L D' // 2nd
L' U L // 3rd
U R' U2 R2 U R2' U R // 4th
U2' U' U2 R' U2 R U2 R' U R U2 R' U R U2 R' U' R U // ZBLL (misrecognised at first)`,
    time: "8.55",
    movecount: 50,
    reconstructor: "Luna",
    videoTimestamp: 388,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "F' R F2 D2 R2 F2 D2 L' U2 F2 R' U2 L F' R D L B' L2 U' R2",
    solution: `x2 // inspection
R B R' L2 F L D L2 U R2 // EOXCross
L U' L' U' R' U' R2 U R2' U' R // 2nd
U L U' L' R U' R' // 3rd
U' L U2 L' U L U L' U L U' L' // 4th
U' U2 R U' R2' D' r U2 r' D R2 U R' // ZBLL`,
    time: "8.49",
    movecount: 53,
    reconstructor: "Luna",
    videoTimestamp: 413,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B2 D' R2 D' F2 U L2 F2 D2 L2 R2 U' B' R' D2 F2 R D' U2 R2",
    solution: `x2 // inspection
B' U2' R2' F' L2 D L' D U L D2 // EOXCross
U L' U2 L R' U R //2nd
L' U2 L U' L' U L // 3rd
U2 L U2 L' U' L U L' // 4th
U' U' R' U R U' R' U R U R' U' R U2 R D R' U' R D' R' // wrong ZBLL silly willy
U x R2' D2 R U R' D2 R U' R // PLL`,
    time: "10.58",
    movecount: 64,
    reconstructor: "Luna",
    videoTimestamp: 443,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "B2 U' D' L F2 B2 D' R' F R U2 L U2 R' F2 L' B2 L F2 D2 R' ",
    solution: `R2' D2 F' D2 R D' // EOCross
U R U' R' U' L' U' L // 1st
U2 R' U' R U' R' U R // 2nd
U' L U2 L' U L U' L' // 3rd
R U' R' U R U R' // 4th
U' R' U2 R U R' U R U' R U2 R' U' R U' R' U2' // ZBLL`,
    time: "8.27",
    movecount: 54,
    reconstructor: "Luna",
    videoTimestamp: 481,
    eoStepOrientation: [],
  },
  {
    scramble: "F2 L2 U2 R' U2 R' F2 R' F2 R B2 R' F L' U' R2 U L' R2 F L2",
    solution: `x' z // inspection
D R' U' R U x' D2 R' L F2 // EOCross
U' L' U2 L2 U' L' // 1st
R' U R // 2nd
U2 L F2' L' F2 // 3rd
U2 L' U2 L U' L' L L' U' L U' L' U L // 4th
U' R2 U R' D' R U R' D R' U' R2 U' R2' // ZBLL`,
    time: "8.84",
    movecount: 51,
    reconstructor: "Luna",
    videoTimestamp: 507,
    eoStepOrientation: ["x2", "y'"],
  },
  {
    scramble: "L' D2 R D2 F2 L2 F2 L2 F2 D2 F2 U2 B L2 F' R2 U' L F U2 ",
    solution: `y' // inspection
B U R' L F D2 U R2 // EOCross
U2 L U L' R' U R // 1st
R U R' U R U' R' // 2nd
U' L U' L' U L U L' // 3rd
U' L U2 L2' U' L2 U' L' // 4th
U' U' R' R R' U R R' U' R //misrecognised
R U' R' U R U R' U2 R' D' R U R' D R2 R' R U R' U' // ZBLL`,
    time: "12.50",
    movecount: 68,
    reconstructor: "Luna",
    videoTimestamp: 538,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "U2 F L2 F' U2 F2 L2 D2 L2 B F' L U2 R U R F' L2 R",
    solution: `z2 // inspection
L D R' F R L D R' L D2 // EOCross
U' R U R' U D R U' R' D' // 1st
R U2 R' U R U R' // 2nd
U' U' y U' R' U' R2 U R' // 3rd
U2 R U2 R2' U' R2 U' R' // 4th
U2 U2' R' F' R U2 R U2 R' F U' R U R' U' R U' R' //did the wrong alg
R' U' R U' R' U2 R // OCLL
U F R U' R' U' R U R' F' R U R' U' R' F // note to self: solving the cube results in a drastic rediuction in DNF rate`,
    time: "DNF(14.73)",
    movecount: 84,
    reconstructor: "Luna",
    videoTimestamp: 568,
    eoStepOrientation: ["z2"],
  },
  {
    scramble: "F' D' R F2 D2 L2 B2 U L2 D' R2 U2 F' D' L' U2 F2 L2 U2",
    solution: `x' // inspection
D' r' U2' F D' R' D' R U' L' // EOCross
U2 R U' R' U R' U' R // 1st
U' D R U R' D' // 2nd
L U L' // 3rd
U' R U R' U R U' R' // 4th
U' U' R' U2 R U2 D' R U' R U R U' R2 D U' U' // ZBLL`,
    time: "10.64+",
    movecount: 52,
    reconstructor: "Luna",
    videoTimestamp: 652,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "F D B2 D2 B2 L2 F2 D' U' B2 L U F L' R F' D2 U2",
    solution: `y // inspection
B D R' D' L F U2 R' L2 // EOCross
D L' U L D' // 1st
L U L' // 2nd
U R U2 R2' U' R // 3rd
U R U' R' U2 R U' R' // 4th
U U R U R' U R U R' U2 L R U' R' U L' U' // ZBLL`,
    time: "7.75",
    movecount: 48,
    reconstructor: "Luna",
    videoTimestamp: 682,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "U L2 B R2 D2 F R2 D2 L2 D2 B R2 F D' L B2 U' B' R' B R",
    solution: `x2 // inspection
F' U' F' U2 R2' D' R2 D2 // EOCross (should've finsihed with L2 D L2
U R' U R L' U L // 1st
U R U' R' U' R U' R' L U2 L' // 2nd
U R U R' U2' R U R' // 3rd
U' R' U' R U R' U2' R // 4th
U2 R2 D R' U' R D' R' U' R' U R U R' U // ZBLL`,
    time: "9.62",
    movecount: 57,
    reconstructor: "Luna",
    videoTimestamp: 709,
    eoStepOrientation: ["x2"],
  },
  {
    scramble: "D2 F2 R' F2 L' F' U D F' U B2 R2 D F2 U' R2 D R2 U' R2",
    solution: `U' F2 R2' F' D R2' D R L' // EOCross
U' R U' R' // 1st
U R' U' R // 2nd
L U2 L' U D' L U' L' D //didn't see the 3 mover
L U L' U' L U L' //4th
U' L' U' L U' L' U2 L // OCLL
U x R2' D2 R U R' D2 R U' R // PLL`,
    time: "8.16",
    movecount: 51,
    reconstructor: "Luna",
    videoTimestamp: 748,
    eoStepOrientation: [],
  },
  {
    scramble: "L F2 R2 D F2 U' R2 B2 U F2 R2 U' B' U' F2 L' F R2 F2 U' R' ",
    solution: `z' y' // inspection 
D' R' L2 x' F' L2 D L' R' // EOCross
U' U2' L' U' L R' U' R // 1st
L' U L U' L U L' U L U' L' // 2nd (should've done FL)
U' L' U2 L L' L U L' U' L // 3rd
U' R U2' R' U' R U R' // 4th
U' U' R' U R U' R' U R U R' U' R2 D R' U R D' R' U // ZBLL`,
    time: "10.06",
    movecount: 65,
    reconstructor: "Luna",
    videoTimestamp: 773,
    eoStepOrientation: ["x2", "y"],
  },
];
