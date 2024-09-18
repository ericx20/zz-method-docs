import { Reconstruction } from "./types";

export const RECONS: Reconstruction[] = [
  {
    scramble: "B2 F2 U' F2 D2 F2 D R2 U2 F2 R2 B D2 L U F D2 B2 D2 R' U'",
    solution:
      "x2 y' // inspection\nB' D F' L F' L' R2 D // EOArrow (EO 3 edges)\nU' //influence the FL pair\nL' U2 L' U L // FL\n// When a front pair is solved, it's best to solve the back slot on the same side as the solved front pair. Here we solved FL, so a good idea is to solve BL.\n// For this case, solving the FR would be fine, but I recommend doing that at a higher level when you see that the rest of F2L will be fine. Because if you solve the 2 front slots, and the rest becomes trash, then thats the worst thing that can happen.\nR U R' D2 R U' R' D2 // 2nd pair\nU2 R' U2 R2 U' R' // 3rd pair\nU' R' U2' R U R' U' R // 4th pair\nR U R' F' R U R' U' R' F R2 U' R' U2 // PLL",
    movecount: 50,
    reconstructor: "yoruba",
  },
  {
    scramble: "D R2 F' B2 U2 R2 U' F2 D L2 F2 D2 L2 B2 L D2 F L F2 L2 R",
    solution:
      "y' // inspection\nR' (F B') R F' // EO 2 \nD' L B2 // EOCross\nL U' L' U L U L' // 1st pair\nU' R U' R2' U R // 2nd pair\nU' R U R'\nU' L' U2 L // insert with U2 to prevent a trash case\nU' R U' R' U R U R' // 4th pair\nU R U R' U R U2 R' // Sune\nU2 R U R' U' R' F R2 U' R' U' R U R' F' // PLL",
    movecount: 59,
    reconstructor: "yoruba",
  },
  {
    scramble: "D L2 D2 L2 F2 U R2 D' R2 U B L' D2 L2 R F2 D2 U' F D'",
    solution:
      "z2 // inspection\nB' R (B' F') R' L' U' D' F D2 // EOCross\n// for ergonomics: x D' R U'D' R' r' U'D' F D2 // EOCross\nU R' U2' R // 1st pair\nU R U R' L' U L2 U' L' U L U L' // 2nd & 3rd pairs\nU R U' R' U' R U' R' U R U' R' // 4th pair\nU F U R U' R D R' U' R D' R2 U R U R' F' // ZBLL",
    movecount: 55,
    reconstructor: "yoruba",
  },
  {
    scramble: "B2 F2 L B2 D2 F2 L2 F2 L' R2 D' B' F' L' D' L D2",
    solution:
      "y2 // inspection\nB' F2 R U F // EO 2\nL D' L' D // last 2 edges\nU' L U L' U' L U L' // 1st pair\nU2 L' U L U' L' U' L // 2nd pair\nR U R' U' R U2 R2 U2 R // 3rd & 4th pairs\nU2 R U' R' U R U R' U2 R' D' R U R' D R2 U R' U2 //ZBLL",
    movecount: 53,
    reconstructor: "yoruba",
  },
  {
    scramble: "F' R B2 L F' B2 D F2 L B2 D2 F' R2 B2 R2 L2 D2 R2 L2 F' D2",
    solution:
      "R' B' R L' F' // EO 2\n// for ergonomics: x R' D' R r' F'\nD L D R D2 // finish (which sets up the red blue pair, wouldn't have happened if we would insert the orange cross pieces first)\nU2 R' U R // 1st pair\nL' U2 L2 U' L' // 2nd pair\nD R U R' D' // 3rd pair (it's also fine not to keyhole here to avoid the 11 mover case)\nU2 R U' R' U' R U R' U2 R U' R' // 4th pair\nR' U' F' R U R' U' R' F R2 U' R' U' R U R' U R U // PLL",
    movecount: 55,
    reconstructor: "yoruba",
  },
  {
    scramble: "B' U F L2 U2 L2 B' D2 B L2 B L' D' F' U' F' U' B ",
    solution:
      "z2 // inspection\nL (F B') L F L' R2 D // eocross\nU2 R U2 R2 U R // 1st pair\nU D R U R' // keyhole 2nd pair\nD R U' R' D2 // keyhole 3rd pair\nU R U2 R' U' R U R' // 4th pair\nR' U2 R' D' R U2 R' D R U2 R U R' U R U' // ZBLL",
    movecount: 47,
    reconstructor: "yoruba",
  },
  {
    scramble: "R U2 F2 D2 U2 F D2 F2 R2 F2 R2 B R' D F' D U' B R2 U",
    solution:
      "y' // inspection\nU F D L' D L2 // EOCross\nU L U L' // 1st pair\nU' L' U' L // 2nd pair\nR U R' U' R U R' // 3rd pair (once you get good at F2L you'll be able to see things like this, where a solution forces a free pair/prevents a bad pair from happening and so on)\nU2 R' U' R // 4th pair\nU' R' F2 R U2 R U2 R' F2 U' R U' R' // ZBLL",
    movecount: 38,
    reconstructor: "yoruba",
  },
  {
    scramble: "F U' F2 R2 U2 R2 D' L2 U R2 F2 U' L' U R D F2 L2 B' U2 ",
    solution:
      "y2 // inspection\nR' D R F U' L' U' R // XEOcross\nL' U2 L U R // cancel into 2nd pair\nR U R' // 3rd pair\nU' L' U L U L' U' L // 4th pair\nU2 R' F' R U2 R' F R2 D2 r' U r D2 R' U2 // ZBLL",
    movecount: 39,
    reconstructor: "yoruba",
  },
  {
    scramble: "L2 U2 L2 F2 L F2 U2 R' F2 L U2 B2 U B R' F R2 U R2 U2 L2 ",
    solution:
      "x2 y // inspection\nL' B' D' // PartialEO 2 cross edges\nU2 R' U' D F // finish the EOCross by inserting the cross egdes and orienting the 4flip\nU R U' R' D2 // cancel into keyhole: XEOCross\nR' U R2 U R' // 2nd pair\nR' U' R U' R' U' R // 3rd pair\nU2 L' U2 L U' L' U L // 4th pair\nU2 R U2 R' U' R U' R' U2 R U R' U R U2 R' U2 // ZBLL",
    movecount: 50,
    reconstructor: "yoruba",
  },
  {
    scramble: "L' F D2 B' U2 B2 L2 F D2 R2 F R2 U2 R B' F L2 B U' L",
    solution:
      "x2 y' // inspection\nL B' D R F' // EO\nR D2 R' L // finish cross\n// L B D R F' L' D2 L2 is an alternative, but in my opinion it has worse ergonomics. You can also try doing it from a y2 away: R F D L B' R' D2 R2 but it still requires that regrip before the R'.\nU' L' U L U' L' U' L // 1st pair\nU R' U R // 2nd pair\nU2 D2 R U R' U' R U R' D2 // pseudo'slot 3rd & 4th pairs\nU' R' U R2 D R' U R D' R' U R' U' R U' R' U' R U' // ZBLL",
    movecount: 50,
    reconstructor: "yoruba",
  },
  {
    scramble: "D' L2 B U2 L2 F R2 B L2 F' R2 B' L' B R2 D' R2 U' B ",
    solution:
      "y' // inspection\nL' D L U F R2 D' L' // EOCross\nU2 R' U' R // 1st pair\nL' U L (U' D') L' U L // 2nd pair\nD2 U' L' U L D' // 3rd pair\nU L' U L U' L' U L // 4th pair\nU2 F R U R2 F R F' R U' R' F' U2 // ZBLL",
    movecount: 46,
    reconstructor: "yoruba",
  },
  {
    scramble: "U2 L2 D' B2 L2 F2 D2 L2 R2 B2 D B2 R' B' F2 U F' L F' L' F ",
    solution:
      "B U2 L U' F R' D L // EOCross\n// for ergonomics: x' U (with left index push), F2 r U' F R' D L\nU L' U L2 U L' // 1st pair\nU L' U L U' R U R' // 2nd pair\nU2 L' U L R' U R // 3rd pair\nL' U L // 4th pair\nU' R2 D' R U2 R' D R2 U R2 D' R U R' D R2 // ZBLL",
    movecount: 48,
    reconstructor: "yoruba",
  },
  {
    scramble: "F L2 D2 L2 D2 R2 F U2 F' L2 F' D2 L' B2 D' L B R U L' D2 ",
    solution:
      "x2 // inspection\nR U2 F // EO\nL R2 D L2 D2 // Cross\n// Example of easy EO, but bad cross afterwards. Stuff happens.\nL' U2 L U' R' U' R // 1st pair\nU L U' L' // 2nd pair\nU2 R U2 R' U R U' R' // 3rd pair\nL' U' L U L' U' L // 4th pair\nU' S' R' U R S R' U2 R' F R F' U R U // ZBLL",
    movecount: 51,
    reconstructor: "yoruba",
  },
  {
    scramble: "L2 D' B2 D' B2 R2 D' B2 R2 F2 D2 L' F' L R B2 R' D2 B R' ",
    solution:
      "x2 y' // inspection\nU F R' F D2 R2 // EOArrow (EO 3edges) \n(U' D) // influence the back left pair\nL // EOCross\nU' L U L' // 1st pair\nU R' U R L' U L // 2nd pair\nR' U' R2 U R2 U' R // 3rd pair\nU2 R U' R' U2 R U' R' // 4th pair\nU' L' U' L U' L' U2 L // OLL\nU2 R U R' U' R' F R2 U' R' U' R U R' F' U // PLL",
    movecount: 58,
    reconstructor: "yoruba",
  },
  {
    scramble: "B2 D B2 F2 L2 U' B2 D2 R2 U' F2 L2 F' R' B2 D2 R' D2 B' U2 R2 ",
    solution:
      "x2 // inspection\nL2 B R F' // EO 3 edges\nD B2 // finish\n// It's also completely fine to end with a U R2 D, if you find it better for ergonomics.\nU' R' U' R // 1st pair\nU R U' R' U R U' R' // 2nd pair\nU' L' U' L // 3rd pair\nU' L' U2 L2 U L2' U L // 4th pair\nU R U' R' U R U' R' U' R U R' U2 R' D' R U R' D R U // ZBLL",
    movecount: 51,
    reconstructor: "yoruba",
  },
  {
    scramble: "U' L F' R U D' B D F U2 L2 F2 U2 L' B2 R U2 D2 F2 R ",
    solution:
      "x2 y // inspection\nB2 U' F D' R' U F' // eocross\nL' U2 L2 U L' // 1st pair\nU' L' U' L U L' U' L // 2nd pair\nU R' U R U' R' U R // 3rd pair\nU R U2 R' U2 R U' R' // 4th pair\nU R U' R2 D' r U2 r' D R2 U' R' U' R U' R' U2 // ZBLL",
    movecount: 53,
    reconstructor: "yoruba",
  },
  {
    scramble: "D F2 R2 D L2 F2 D B2 U R B' D' B' U' L B U' F' L ",
    solution:
      "y2 // inspection\n(F B) U L' F B2 R D2 // EOCross. The first U move after the FB is tricky to do, you would have to slow down in a solve to not lock up here. After that, it's good though.\nU' L U2 L' U' L U L' // 1st pair\nU' D' R U' R' D // 2nd pair\nR U R' // Force pseudo\nD R U R' U' R U R' D' // Pseudoslot 3rd & 4th pairs\nU' R U R' U R U2 R' // OLL\nF R U' R' U' R U R' F' R U R' U' R' F R F' U' // PLL",
    movecount: 59,
    reconstructor: "yoruba",
  },
  {
    scramble: "D F U B2 D F2 D R2 U' L2 R2 D2 L2 F' L' R F' R2 F2 L' ",
    solution:
      "F2 R2 F' R2 U' R // EO 3. Execution for ergonomics:x U2 l2 D' (l R') U' R (just start from thumb on bottom and do the F' with right ring, that should do it.)\nD L2 U' L' D2 // XEOcross\nL' U2 L\nU2 L' U2 L // insert with U2, now instead of the trash case we get a free pair.\nR' U' R // 3rd pair\nU R U2 R' U R U R' // 4th pair\nU R' D' R U' R' D R2 U R' U R U' R' U R U R' U2 R U' R' U // ZBLL, very long but spammy alg. Worth it, especially for this being the worst T case imo.",
    movecount: 52,
    reconstructor: "yoruba",
  },
  {
    scramble: "F2 L D2 L2 B2 R' B2 F2 R' F2 R2 F' U B F' D2 F2 U' R D' B2",
    solution:
      "U B' L U' R' F R L' D' // EOCross. Ergonomics: x' F U' r U' (R' F R) L' D'\nU' L U' L2 U' L // 1st pair\nU' R' U' R // 2nd pair\nR U R' U'\nR U2 R' U // Insert and set up a pair: R U2 R' is both an insert to the free pair as well as the beginning of the solution of blue-orange. This type of multislot requires a broad understanding of your F2L solutions. You can develop this by having 2-3 possible solutions for each pair (you can skip the 3 movers obviously), plus 1-2 for some open slots (as was used here) \nL U L' // 4th pair\nU' R U R' U R U2 R' // OLL\nR U R' U' D R2 U' R U' R' U R' U R2 D' // PLL",
    movecount: 53,
    reconstructor: "yoruba",
  },
  {
    scramble: "R' B R F B2 L B2 D' R2 F' R2 B' U2 F2 D2 B' U2 F' D2 L",
    solution:
      "R' B D' R2 D L F' L' D\nU2 // influence\nR' // EOCross\nL U L' // 1st pair\nU' R U2' R' U'\nR L' U L U2 R' // multislot 2 3\nU' R' U R\nU2 R' U2' R // 4th pair / Winter Variation\nU' R' U' R U D' R2 U R' U R U' R U' R2 D U2 // PLL",
    movecount: 50,
    reconstructor: "yoruba",
  },
  {
    scramble: "L D' L2 U' L' B' R' F' R2 U D2 R2 B' R2 F' U2 D2 L2 F' R2 B ",
    solution:
      "x2 y' // inspection\nR' B D2 F' L // EO 2\nD R D L2 // finish\nU' R' U' R // 1st pair\nU' L' U' L U' L' U L2 U' L' // 2nd pair\nU R U R' U2 R U' R' // 3rd pair\nL' U L U L' U' L // 4th pair\nR U2 R' U' R U' R' // OCLL\nU2 // alright then",
    movecount: 46,
    reconstructor: "yoruba",
  },
  {
    scramble: "B' L B R2 B L2 B U2 F' D2 L2 R2 F2 L' F2 U' F U' L2 U2 ",
    solution:
      "z2 // inspection\nR' F D2 R' B' U' B' R' // EOCross\nU2 L' U' L2 U L' // 1st pair\nL' U' L U' L' U L // 2nd pair\nU R U' R2' U R // 3rd pair\nU R U' R' U R U R' // 4th pair or just U R U' R' U (R U' R' U' R U' R') for solved OCLL, but I didnt spot it\nR U2 R' U' R U' R' // OCLL\nU R2 U' R U' R U R' U R2 D' U R U' R' D U' // PLL",
    movecount: 59,
    reconstructor: "yoruba",
  },
  {
    scramble: "B2 L' B2 D2 B2 R2 D B2 U R2 F2 L2 B2 U' B' D2 F' R U' B2 F2 ",
    solution:
      "y' // inspection\nB' D2 U' F' // EO 2\nD' R D' L' // EOCross\nL' U L U R' U' R // 1st pair\nU' L' U2 L2 U' L' // 2nd pair\nL' U L U' L' U L // 3rd pair\nU R U' R' U R U' R' // 4th pair\nR' U' R U' R' U2 R // OCLL\nR2 U' R U' R U R' U R2 D' U R U' R' D // PLL",
    movecount: 58,
    reconstructor: "yoruba",
  },
  {
    scramble: "F2 L2 D2 F' R2 B' D2 B2 D2 L2 F' U R F2 U' R' F U' B2 U2 ",
    solution:
      "y // inspection\nU L' F L2 U F // EO 2 (EOLine)\n// Ergonomics: U r' D (r L) U F, so doing the first F move with left ring.\nL R2 // finish (EOCross)\nU' L U L' // 1st pair\nU' R' U R // 2nd pair\nU L' U L // 3rd pair\nR U2 R' U' R U2 R' // 4th pair\nU R U R' U R U2 R' // OLL\nU2 x R2 D2 R U R' D2 R U' R x' U // PLL",
    movecount: 46,
    reconstructor: "yoruba",
  },
  {
    scramble: "R' B2 D2 F2 D2 R' F2 R' D2 L2 F2 D' R U' L' U' F' L2 R' B R' ",
    solution:
      "z2 // inspection\nB' L' R2 F' D R' // EO 2\nD R L' // finish EOCross\nR U R2 U2 R // 1st pair\nU L U' L2 U L // 2nd pair\nU' L U2 L' // 3rd pair\nU2 R U' R' U R U R' // 4th pair\nU2 R' U2 R' D' R U2 R' D R2 U2 // ZBLL",
    movecount: 43,
    reconstructor: "yoruba",
  },
];
