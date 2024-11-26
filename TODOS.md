- add cube orientation translation support

```ts
export type Color = "white" | "yellow" | "blue" | "green" | "orange" | "red";
export type CubeOrientation = { top: Color; front: Color };
type Rotation = "x" | "x2" | "x'" | "y" | "y2" | "y'" | "z" | "z2" | "z'";
type Side = "front" | "top" | "left" | "right" | "bottom" | "back";
type Cube = { [s in Side]: Color };

const rotations: { [rotation in Rotation]: { [side in Side]?: Side } } = {
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

const solvedCube: Cube = {
  top: "white",
  front: "green",
  left: "orange",
  right: "red",
  bottom: "yellow",
  back: "blue",
};

function rotateCube(cube: Cube, rotation: Rotation): Cube {
  const transform = rotations[rotation];
  const newCube: Cube = { ...cube };
  Object.entries(transform).forEach(([src, dst]: [Side, Side]) => {
    newCube[src] = cube[dst];
  });
  return newCube;
}
```
