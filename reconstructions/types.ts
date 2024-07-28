export interface Reconstruction {
  time: string; // string because we put a "+" at the end to indicate +2 penalty
  movecount: number; // STM
  scramble: string;
  solution: string;
  reconstructor: string;
  notes?: string;
  videoTimestamp?: number; // in seconds
}