export interface Reconstruction {
  time: string; // Format like this: 4.56, (4.56), 4.56+, DNF(4.56)
  movecount: number; // STM
  scramble: string;
  solution: string;
  reconstructor: string;
  notes?: string;
  videoTimestamp?: number; // in seconds
}
