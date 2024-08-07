import { Reconstruction } from "./types";

export const YOUTUBE_VIDEO_ID = "8vP6Or-pAeM";
export const RECONS: Reconstruction[] = [
  {
    scramble: "L' F' R U' B' U B' U2 L R2 U' F2 B2 U' L2 U' R2 F2 U' L2 U2",
    solution:
      "x2 // inspection\nR' B R2 S R S' R' D' L' D' // EOCross (should've done y' F L' F B D' F2 B2)\nU D' R' U' R D // 1st\nU2' R U' R' U R U R' // 2nd\nL' U2 L U' L' U L // 3rd\nU' R' U' R U2 R' U R // 4th\nU' U R U R' U R U R' U2 L R U' R' U L' // ZBLL",
    time: "8.84",
    movecount: 56,
    reconstructor: "Luna",
    videoTimestamp: 33,
  },
  {
    scramble: "L2 U' B' R2 B' R D' L B2 L2 B L2 B R2 F' L2 F L2 F D2",
    solution:
      "x2 y // inspection \nr' U' r R' D' F' R B2 R L' D // EOCross\nL U' L' D L' U L D' //tf was I doing\nU R' U' R // 2nd\nU L' U2 L2 U L2' U L // 3rd\nU' R' F' R U R U' R' F // 4th\nU' U2 R U R' U R U2 R2' U' R U' R' U2 R",
    time: "9.25",
    movecount: 55,
    reconstructor: "Luna",
    videoTimestamp: 64,
  },
  {
    scramble: "U2 R2 U2 B' R2 F L2 D2 F D2 B' L2 D' L U2 R' B2 D B2 R'",
    solution:
      "x y2 // inspection\nU' r' F D' R L' U L' D // EOXCross\nU2 R' U' R //2nd\nU2 R U' R' // 3rd (pseudopair)\nD U' R U R' U' R U2 R' D' // 4th\nR D R' U2 R D' R' U' R' U2 R U' R' U' R U2 // ZBLL",
    time: "6.72",
    movecount: 42,
    reconstructor: "Luna",
    videoTimestamp: 93,
  },
  {
    scramble: "U2 B' U2 F' U2 L' D' L' B2 U2 B' R2 F' U2 R2 L2 B D",
    solution:
      "x2 y // inspection \nU' R' F' U' F' D2 R L' // EOCross\nU R U2 R' L U' L' // 1st\nR' U R U L' U' L // 2nd\nU' R' U' R // 3rd\nU2 R U2 R' U R U R' U R U' R' // 4th (OLS)\nU' R' U' R U D' R2 U R' U R U' R U' R2' U' D // PLL",
    time: "7.93",
    movecount: 53,
    reconstructor: "Luna",
    videoTimestamp: 114,
  },
  {
    scramble: "D' B L B2 D B' U2 R' F2 B2 U' F2 D' R2 B2 R2 B2 D' R2 D F' ",
    solution:
      "y' // inspection \nD' B L R2' F R' U F2 // EOCrossn't (pls forgive me for this)\nL' U L U' L' U L //1st\nB' R B R' // you did EO wrong dumbass\nL U' L' // are you srsly gonna regrip for this\nR' U' R U R' U' R // 3rd\nR U2 R' U R U' R' // 4th\nR' R U R' U' R U' R' U2 R // OCLL\nU' x R2' F R F' R U2 r' U r U2 B' // PLL",
    time: "9.61",
    movecount: 58,
    reconstructor: "Luna",
    videoTimestamp: 149,
  },
  {
    scramble: "B' D F2 U' F2 D L2 B2 R2 D L2 R D2 U2 B2 F' D' U' R F2",
    solution:
      "L U D' F D L D L U R' D2 // EOCross\nU R' U' R L' U' L // 1st\nU L U2 L' U2 L U' L' // 2nd\nD' R U' R' D // 3rd\nU' U' R U' R' U R U R' // 4th\nU' R U R' U R U2 R' // i didn't realise that I know this ZBLL\nU' R' U R' U' R D' R' D R' U D' R2 U' R2' D R2 // PLL",
    time: "9.96",
    movecount: 65,
    reconstructor: "Luna",
    videoTimestamp: 180,
  },
  {
    scramble: "B2 D2 F' L2 R2 U2 F' L2 F' L2 R' D' L B F' U' R' F2",
    solution:
      "x2 // inspection\nU' R' B' L' F D L D L' U' R2' // EOCross\nU' D' L' U' L D // 1st\nU2 R' R L' U' L2 U L2' U' L // 2nd\nU' R' U2 R U2 R' U R //3rd\nU L U' L' U' L U L' // 4th\nU2' U' r U R' U' r' F R F' // ZBLL",
    time: "9.40",
    movecount: 59,
    reconstructor: "Luna",
    videoTimestamp: 208,
  },
  {
    scramble: "U' L2 R2 D2 U' L2 F2 U F2 D B R2 F' U' R' D B D2 L U'",
    solution:
      "x2 y // inspection \nB' R U D F' R L D L' U L2 D' // EOCross (why would you do L' U L2 to preserve the pair when you could just do U' L2 to get an EOXCross?)\nL U' L' // don't regrip kids\nR U2 R' U' R' U2 R L' U L // don't to this\nR' U2 R U D R' U' R D' // or this\nU2 R' U' R // 4th\nU' U' r U R' U' r' F R F' U // ZBLL",
    time: "8.24",
    movecount: 49,
    reconstructor: "Luna",
    videoTimestamp: 235,
  },
  {
    scramble: "F' D' L2 D2 F2 L2 U' R2 F2 D' F2 D R2 F L2 U2 F R2 D2 R B",
    solution:
      "y // inspection \nR' F D U L U2 R U L2 // EOCross\nR U R' U R U R' // 2nd\nU U U' L' U2 L U L' U' L // 3rd\nU' L U2 L' U2 L U' L' // 4th\nF R' F' r U R U' r' U2 // ZBLL",
    time: "7.37",
    movecount: 43,
    reconstructor: "Luna",
    videoTimestamp: 266,
  },
  {
    scramble: "F2 L' F' U' B2 R' L' U' R2 F U2 F' L2 F L2 F' D2 B2 L2 F' R'",
    solution:
      "z2 // inspection\nU2 R' L F D2 R2' D F2 // EOCross\nU' L' U2 L2 U' L' // 1st\nU' R U R' U D' R U' R' D // 2nd\nU' R U2 R' U2 L' U' L // 3rd\nR U' R' U2 R U' U' R' // 4th (why the U2 insert though?)\nU' U' R' U' R' D' R U R' D R U2 R U R' U R U' // ZBLL",
    time: "8.96",
    movecount: 57,
    reconstructor: "Luna",
    videoTimestamp: 288,
  },
  {
    scramble: "L' D R' D R B' D2 F R F2 B2 R F2 R' D2 B2 L'",
    solution:
      "L' R B R2' F R' L2 D' R2 U' L' U L D' // EOXCross\nL U2 R U' R2' U R L' // 2nd \nU' R U R' L U L' // 3rd\nU R U2' R' U' R U2' R' // 4th\nR' U R' U' R D' R' D R' U D' R2 U' R2' D R2 U2 // ZBLL",
    time: "9.60",
    movecount: 54,
    reconstructor: "Luna",
    videoTimestamp: 313,
  },
  {
    scramble: "D B2 F2 R2 D' L2 D B2 F2 R' B L' B2 D2 B R D R' F",
    solution:
      "y2 // inspection\nB D R F L' D // EOCross\nU' R U2 R2' U' R // 1st\nR U' R' U R U R' //2nd\nU D L' U' L D' // 3rd\nU2 L' U L U L' U' L // 4th\nU2' R U R' U R U2' R' U R' U' R U' R' U2' R U2 // ZBLL",
    time: "7.92",
    movecount: 48,
    reconstructor: "Luna",
    videoTimestamp: 339,
  },
  {
    scramble: "R' B' D L2 U L2 D R2 D2 F2 D' B R' B F D U' F' D' ",
    solution:
      "x' // inspection\nD' r' D F' L2 D2 U' L' U2 L' // EOCross\nR U R' // 1st\nU L U' L' // 2nd\nL' U' L // 3rd\nU' R' U' R U R' U2 R // 4th\nU' U' R U' R' U' R U R D R' U2 R D' R' U' R' U' U' // ZBLL",
    time: "8.35",
    movecount: 47,
    reconstructor: "Luna",
    videoTimestamp: 364,
  },
  {
    scramble: "F' D L2 U R2 D2 R2 D' F2 U2 R2 U' L2 B F L B R' U2 F R2",
    solution:
      "x2 y' // inspection\nR B' U' R' L' F L D L' D R // EOCross\nU R' U R // 1st (should've cancelled though)\nD L' U' L D' // 2nd\nL' U L // 3rd\nU R' U2 R2 U R2' U R // 4th\nU2' U' U2 R' U2 R U2 R' U R U2 R' U R U2 R' U' R U // ZBLL (misrecognised at first)",
    time: "8.55",
    movecount: 50,
    reconstructor: "Luna",
    videoTimestamp: 388,
  },
  {
    scramble: "F' R F2 D2 R2 F2 D2 L' U2 F2 R' U2 L F' R D L B' L2 U' R2",
    solution:
      "x2 // Inspection\nR B R' L2 F L D L2 U R2 // EOXCross\nL U' L' U' R' U' R2 U R2' U' R // 2nd\nU L U' L' R U' R' // 3rd\nU' L U2 L' U L U L' U L U' L' // 4th\nU' U2 R U' R2' D' r U2 r' D R2 U R' // ZBLL",
    time: "8.49",
    movecount: 53,
    reconstructor: "Luna",
    videoTimestamp: 413,
  },
  {
    scramble: "B2 D' R2 D' F2 U L2 F2 D2 L2 R2 U' B' R' D2 F2 R D' U2 R2",
    solution:
      "x2 // inspection\nB' U2' R2' F' L2 D L' D U L D2 // EOXCross\nU L' U2 L R' U R //2nd\nL' U2 L U' L' U L // 3rd\nU2 L U2 L' U' L U L' // 4th\nU' U' R' U R U' R' U R U R' U' R U2 R D R' U' R D' R' // wrong ZBLL silly willy\nU x R2' D2 R U R' D2 R U' R // PLL",
    time: "10.58",
    movecount: 64,
    reconstructor: "Luna",
    videoTimestamp: 443,
  },
  {
    scramble: "B2 U' D' L F2 B2 D' R' F R U2 L U2 R' F2 L' B2 L F2 D2 R' ",
    solution:
      "R2' D2 F' D2 R D' // EOCross\nU R U' R' U' L' U' L // 1st\nU2 R' U' R U' R' U R // 2nd\nU' L U2 L' U L U' L' // 3rd\nR U' R' U R U R' // 4th\nU' R' U2 R U R' U R U' R U2 R' U' R U' R' U2' // ZBLL",
    time: "8.27",
    movecount: 54,
    reconstructor: "Luna",
    videoTimestamp: 481,
  },
  {
    scramble: "F2 L2 U2 R' U2 R' F2 R' F2 R B2 R' F L' U' R2 U L' R2 F L2",
    solution:
      "x' z // inspection\nD R' U' R U x' D2 R' L F2 // EOCross\nU' L' U2 L2 U' L' // 1st\nR' U R // 2nd\nU2 L F2' L' F2 // 3rd\nU2 L' U2 L U' L' L L' U' L U' L' U L // 4th\nU' R2 U R' D' R U R' D R' U' R2 U' R2' // ZBLL",
    time: "8.84",
    movecount: 51,
    reconstructor: "Luna",
    videoTimestamp: 507,
  },
  {
    scramble: "L' D2 R D2 F2 L2 F2 L2 F2 D2 F2 U2 B L2 F' R2 U' L F U2 ",
    solution:
      "y' // inspection\nB U R' L F D2 U R2 // EOCross\nU2 L U L' R' U R // 1st\nR U R' U R U' R' // 2nd\nU' L U' L' U L U L' // 3rd\nU' L U2 L2' U' L2 U' L' // 4th\nU' U' R' R R' U R R' U' R //misrecognised\nR U' R' U R U R' U2 R' D' R U R' D R2 R' R U R' U' // ZBLL",
    time: "12.50",
    movecount: 68,
    reconstructor: "Luna",
    videoTimestamp: 538,
  },
  {
    scramble: "U2 F L2 F' U2 F2 L2 D2 L2 B F' L U2 R U R F' L2 R",
    solution:
      "z2 // inspection\nL D R' F R L D R' L D2 // EOCross\nU' R U R' U D R U' R' D' // 1st\nR U2 R' U R U R' // 2nd\nU' U' y U' R' U' R2 U R' // 3rd\nU2 R U2 R2' U' R2 U' R' // 4th\nU2 U2' R' F' R U2 R U2 R' F U' R U R' U' R U' R' //did the wrong alg\nR' U' R U' R' U2 R // OCLL\nU F R U' R' U' R U R' F' R U R' U' R' F // note to self: solving the cube results in a drastic rediuction in DNF rate",
    time: "DNF(14.73)",
    movecount: 84,
    reconstructor: "Luna",
    videoTimestamp: 568,
  },
  {
    scramble: "F' D' R F2 D2 L2 B2 U L2 D' R2 U2 F' D' L' U2 F2 L2 U2",
    solution:
      "x' // inspection\nD' r' U2' F D' R' D' R U' L' // EOCross\nU2 R U' R' U R' U' R // 1st\nU' D R U R' D' // 2nd\nL U L' // 3rd\nU' R U R' U R U' R' // 4th\nU' U' R' U2 R U2 D' R U' R U R U' R2 D U' U' // ZBLL",
    time: "10.64+",
    movecount: 52,
    reconstructor: "Luna",
    videoTimestamp: 652,
  },
  {
    scramble: "F D B2 D2 B2 L2 F2 D' U' B2 L U F L' R F' D2 U2",
    solution:
      "y // inspection\nB D R' D' L F U2 R' L2 // EOCross\nD L' U L D' // 1st\nL U L' // 2nd\nU R U2 R2' U' R // 3rd\nU R U' R' U2 R U' R' // 4th\nU U R U R' U R U R' U2 L R U' R' U L' U' // ZBLL",
    time: "7.75",
    movecount: 48,
    reconstructor: "Luna",
    videoTimestamp: 682,
  },
  {
    scramble: "U L2 B R2 D2 F R2 D2 L2 D2 B R2 F D' L B2 U' B' R' B R",
    solution:
      "x2 // inspection\nF' U' F' U2 R2' D' R2 D2 // EOcross (should've finsihed with L2 D L2\nU R' U R L' U L // 1st\nU R U' R' U' R U' R' L U2 L' // 2nd\nU R U R' U2' R U R' // 3rd\nU' R' U' R U R' U2' R // 4th\nU2 R2 D R' U' R D' R' U' R' U R U R' U // ZBLL",
    time: "9.62",
    movecount: 57,
    reconstructor: "Luna",
    videoTimestamp: 709,
  },
  {
    scramble: "D2 F2 R' F2 L' F' U D F' U B2 R2 D F2 U' R2 D R2 U' R2",
    solution:
      "U' F2 R2' F' D R2' D R L' // EOCross\nU' R U' R' // 1st\nU R' U' R // 2nd\nL U2 L' U D' L U' L' D //didn't see the 3 mover\nL U L' U' L U L' //4th\nU' L' U' L U' L' U2 L // OCLL\nU x R2' D2 R U R' D2 R U' R // PLL",
    time: "8.16",
    movecount: 51,
    reconstructor: "Luna",
    videoTimestamp: 748,
  },
  {
    scramble: "L F2 R2 D F2 U' R2 B2 U F2 R2 U' B' U' F2 L' F R2 F2 U' R' ",
    solution:
      "z' y' // inspection \nD' R' L2 x' F' L2 D L' R' // EOCross\nU' U2' L' U' L R' U' R // 1st\nL' U L U' L U L' U L U' L' // 2nd (should've done FL)\nU' L' U2 L L' L U L' U' L // 3rd\nU' R U2' R' U' R U R' // 4th\nU' U' R' U R U' R' U R U R' U' R2 D R' U R D' R' U // ZBLL",
    time: "10.06",
    movecount: 65,
    reconstructor: "Luna",
    videoTimestamp: 773,
  },
];
