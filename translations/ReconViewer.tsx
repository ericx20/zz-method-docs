import { Translation } from "./types"

// Context: ReconViewer is a component that displays a single solve reconstruction.

// Text that goes right before a scramble
// e.g. Scramble: U2 B2 U2 R2 B2 D' L2 F2 U F U2 B R2 U2 B' L' B2 D' F2 L2
export const scrambleTextMap: Translation<string> = {
    en: "Scramble:",
    fr: "Scramble:",
    he: "Scramble:",
    zh: "Scramble:",
}

// Text that goes right before a solution
export const solutionTextMap: Translation<string> = {
    en: "Solution:",
    fr: "Solution:",
    he: "Solution:",
    zh: "Solution:",
}

// Shows the solve number
// e.g. Solve #3 for the third solve
export const solveIndexMap: Translation<(solveNumber: number) => string> = {
    en: (solveNumber) => `Solve #${solveNumber}`,
    fr: (solveNumber) => `Solve #${solveNumber}`,
    he: (solveNumber) => `Solve #${solveNumber}`,
    zh: (solveNumber) => `Solve #${solveNumber}`,
}

export const reconstructedByMap: Translation<(reconstructor: string) => string> = {
    en: (reconstructor) => `Reconstructed by ${reconstructor}`,
    fr: (reconstructor) => `Reconstructed by ${reconstructor}`,
    he: (reconstructor) => `Reconstructed by ${reconstructor}`,
    zh: (reconstructor) => `Reconstructed by ${reconstructor}`,
}

// Text that goes right before notes about a solve
export const notesTextMap: Translation<string> = {
    en: "Notes:",
    fr: "Notes:",
    he: "Notes:",
    zh: "Notes:",
}