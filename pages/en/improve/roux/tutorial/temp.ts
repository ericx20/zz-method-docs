type Piece = Exclude<`${"U" | "D" | ""}${"F" | "B" | ""}${"L" | "R" | ""}`, "">;

const STICKERING_CHARS_MAP = {
  solved: "-",
  dim: "D",
  ignored: "I",
  permuted: "P",
  oriented: "O",
  orientedWithoutPermutation: "?",
  invisible: "X",
} as const;

type Option = keyof typeof STICKERING_CHARS_MAP;
type StickeringChar = (typeof STICKERING_CHARS_MAP)[Option];

type CustomStickering = {
  [key in Option]?: Piece[];
};

const centerIndices = {
  U: 0,
  L: 1,
  F: 2,
  R: 3,
  B: 4,
  D: 5,
};

/* prettier-ignore */
const edgeIndices = {
  UF: 0, UR: 1, UB: 2, UL: 3,
  DF: 4, DR: 5, DB: 6, DL: 7,
  FR: 8, FL: 9, BR: 10, BL: 11,
};

/* prettier-ignore */
const cornerIndices = {
  UFR: 0, UBR: 1, UBL: 2, UFL: 3,
  DFR: 4, DFL: 5, DBL: 6, DBR: 7,
};

/**
 * Utility function to make it easier to define 3x3 cube stickerings.
 * Generates the `experimentalStickeringMaskOrbits` value using a more readable syntax.
 * This is a terrible, niche hack to make it as easy as possible for our team of writers.
 * It doesn't work for other puzzles and the syntax is tedious.
 * I suggest most users take the approach shown in cubing.js instead:
 * https://github.com/cubing/cubing.js/blob/178e64fc3d589516bc4eb5d7689232e9795c735d/src/cubing/puzzles/stickerings/cube-like-stickerings.ts
 */
function getCustomStickeringMaskOrbits(
  stickering: CustomStickering,
  defaultOption: Option = "ignored"
) {
  const defaultStickeringChar = STICKERING_CHARS_MAP[defaultOption];
  const edges: StickeringChar[] = Array(12).fill(defaultStickeringChar);
  const corners: StickeringChar[] = Array(8).fill(defaultStickeringChar);
  const centers: StickeringChar[] = Array(6).fill(defaultStickeringChar);

  for (const [option, pieces] of Object.entries(stickering) as [
    option: Option,
    pieces: Piece[]
  ][]) {
    for (const piece of pieces) {
      const stickeringChar = STICKERING_CHARS_MAP[option];
      if (piece.length === 1) {
        centers[centerIndices[piece]] = stickeringChar;
      } else if (piece.length === 2) {
        edges[edgeIndices[piece]] = stickeringChar;
      } else {
        corners[cornerIndices[piece]] = stickeringChar;
      }
    }
  }

  /* prettier-ignore */
  return `EDGES:${edges.join("")},CORNERS:${corners.join("")},CENTERS:${centers.join("")}`;
}

console.log(getCustomStickeringMaskOrbits({
  solved: ['DFL', 'FL'],
  dim: ['DL', 'L']
}))