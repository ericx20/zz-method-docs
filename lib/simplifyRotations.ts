import { Rotation } from "@/types";
import { Color } from ".";

type Side = "front" | "top" | "left" | "right" | "bottom" | "back";
type Cube = { [s in Side]: Color };

export function simplifyRotations(rotations: Rotation[]): Rotation[] {
  const start: Cube = {
    top: "white",
    front: "green",
    left: "orange",
    right: "red",
    bottom: "yellow",
    back: "blue",
  };
  const target: Cube = applyRotations(start, rotations);
  const possibleRotations = Object.keys(rotationMap) as Rotation[];

  // Check if already correct
  if (start.top === target.top && start.front === target.front) return [];

  // Try one rotation
  for (const rotation of possibleRotations) {
    const result = applyRotation(start, rotation);
    if (result.top === target.top && result.front === target.front) {
      return [rotation];
    }
  }

  // Try two rotations
  for (const rotation1 of possibleRotations) {
    const intermediate = applyRotation(start, rotation1);
    for (const rotation2 of possibleRotations) {
      const result = applyRotation(intermediate, rotation2);
      if (result.top === target.top && result.front === target.front) {
        return [rotation1, rotation2];
      }
    }
  }

  throw new Error("Could not translate cube orientation");
}

// Define the possible rotations
const rotationMap = {
  x: { top: "front", front: "bottom", bottom: "back", back: "top" },
  x2: { top: "bottom", front: "back", bottom: "top", back: "front" },
  "x'": { top: "back", front: "top", bottom: "front", back: "bottom" },
  y: { front: "right", right: "back", back: "left", left: "front" },
  y2: { front: "back", right: "left", back: "front", left: "right" },
  "y'": { front: "left", right: "front", back: "right", left: "back" },
  z: { top: "left", left: "bottom", bottom: "right", right: "top" },
  z2: { top: "bottom", left: "right", bottom: "top", right: "left" },
  "z'": { top: "right", left: "top", bottom: "left", right: "bottom" },
};

function applyRotations(cube: Cube, rotations: Rotation[]): Cube {
  let newCube: Cube = { ...cube };
  for (const rotation of rotations) {
    newCube = applyRotation(newCube, rotation);
  }
  return newCube;
}

function applyRotation(cube: Cube, rotation: Rotation): Cube {
  const transform = rotationMap[rotation];
  const newCube: Cube = { ...cube };
  Object.entries(transform).forEach(([src, dst]: [Side, Side]) => {
    newCube[src] = cube[dst];
  });
  return newCube;
}

console.log(simplifyRotations(["x2", "y2"]));
