import { Rotation } from "@/types";

export * from "./simplifyRotations";

export type CubeOrientation = { top: Color; front: Color };
export type Color = "white" | "yellow" | "blue" | "green" | "orange" | "red";

export const COLORS = ["white", "yellow", "blue", "green", "orange", "red"];

const ADJACENT_COLOR_MAP: { [c in Color]: Color[] } = {
  white: ["orange", "green", "red", "blue"],
  orange: ["white", "green", "blue", "yellow"],
  green: ["white", "orange", "red", "yellow"],
  red: ["white", "green", "blue", "yellow"],
  blue: ["white", "orange", "red", "yellow"],
  yellow: ["orange", "green", "red", "blue"],
};

export function getAdjacentColors(color: Color) {
  return ADJACENT_COLOR_MAP[color];
}

const cubeOrientationToRotationMap = {
  wo: ["y'"],
  wg: [],
  wr: ["y"],
  wb: ["y2"],
  ow: ["x'", "z"],
  og: ["z"],
  ob: ["x2", "z"],
  oy: ["x", "z"],
  gw: ["x'", "z2"],
  go: ["x", "y'"],
  gr: ["x", "y"],
  gy: ["x"],
  rw: ["x'", "z'"],
  rg: ["z'"],
  rb: ["x2", "z'"],
  ry: ["x", "z'"],
  bw: ["x'"],
  bo: ["x'", "y'"],
  br: ["x'", "y"],
  by: ["x'", "y2"],
  yo: ["x2", "y'"],
  yg: ["z2"],
  yr: ["x2", "y"],
  yb: ["x2"],
} as const;

export function cubeOrientationToRotations(
  cubeOrientation: CubeOrientation
): Rotation[] {
  return (
    cubeOrientationToRotationMap[
      `${cubeOrientation.top[0]}${cubeOrientation.front[0]}`
    ] || []
  );
}

export function invertRotation(rotation: Rotation): Rotation {
  if (rotation.includes("2")) return rotation;
  if (rotation.includes("'")) return rotation[0] as Rotation;
  return (rotation[0] + "'") as Rotation;
}

export function invertRotations(rotations: Rotation[]): Rotation[] {
  return rotations.map(invertRotation).reverse();
}
