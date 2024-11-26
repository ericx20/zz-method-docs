export type Rotation =
  | "x"
  | "x2"
  | "x'"
  | "y"
  | "y2"
  | "y'"
  | "z"
  | "z2"
  | "z'";

export interface Reconstruction {
  time?: string; // Format like this: 4.56, (4.56), 4.56+, DNF(4.56)
  movecount?: number; // STM. Note: we count simultaneously executed moves e.g. (U D') as 1 STM
  scramble: string;
  solution: string; // Uses Twizzle notation
  eoStepOrientation?: Rotation[];
  reconstructor?: string;
  notes?: string;
  videoTimestamp?: number; // in seconds
}
