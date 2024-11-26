import { TwistyPlayer, TwistyAlgViewer } from "cubing/twisty";
import { useEffect, useRef } from "react";
import { type Reconstruction } from "types";
import styles from "./ReconViewer.module.css";
import clsx from "clsx";
import {
  notesTextMap,
  reconstructedByMap,
  scrambleTextMap,
  solutionTextMap,
  solveIndexMap,
} from "translations/ReconViewer";
import { useTranslation } from "translations/useTranslation";
import {
  CubeOrientation,
  cubeOrientationToRotations,
  invertRotations,
  simplifyRotations,
} from "@/lib";
import { Alg } from "cubing/alg";

export interface ReconViewerProps {
  recon: Reconstruction;
  index?: number;
  translatedCubeOrientation?: CubeOrientation;
}

export function ReconViewer({
  recon,
  index,
  translatedCubeOrientation,
}: ReconViewerProps) {
  const twistyPlayerContainer = useRef<HTMLDivElement>(null);
  const twistyAlgViewerContainer = useRef<HTMLDivElement>(null);
  const twistyPlayer = useRef<TwistyPlayer | null>(null);
  const twistyAlgViewer = useRef<TwistyAlgViewer | null>(null);

  // setup the twisty player and alg viewer
  useEffect(() => {
    if (!twistyPlayerContainer.current || !twistyAlgViewerContainer.current)
      return;
    twistyPlayer.current = new TwistyPlayer({
      background: "none",
      tempoScale: 1.5,
    });
    twistyPlayer.current.className = styles.twistyPlayer;
    twistyPlayerContainer.current.appendChild(twistyPlayer.current);
    twistyAlgViewer.current = new TwistyAlgViewer({
      twistyPlayer: twistyPlayer.current,
    });
    twistyAlgViewerContainer.current.appendChild(twistyAlgViewer.current);

    return () => {
      if (twistyPlayerContainer.current) {
        twistyPlayerContainer.current.innerHTML = "";
      }
      if (twistyAlgViewerContainer.current) {
        twistyAlgViewerContainer.current.innerHTML = "";
      }
    };
  }, []);

  // Prepend the scramble with rotations that translate the entire recon to match the desired cube orientation
  const preRotations = translatedCubeOrientation
    ? simplifyRotations([
        ...cubeOrientationToRotations(translatedCubeOrientation),
        ...invertRotations(recon.eoStepOrientation),
      ])
    : [];

  const translatedScramble = preRotations.join(" ") + " " + recon.scramble;

  // update the twisty player when props change
  useEffect(() => {
    if (!twistyPlayer.current) return;

    twistyPlayer.current.experimentalSetupAlg = new Alg(translatedScramble);
    twistyPlayer.current.alg = recon.solution;
    twistyPlayer.current.jumpToStart();
  }, [recon, translatedCubeOrientation]);

  const parsedTime = recon?.time ? parseTime(recon.time) : null;
  const isDNF = parsedTime === null;
  const tps = isDNF
    ? undefined
    : recon.time && recon.movecount && recon.movecount / parsedTime;

  const scrambleText = useTranslation(scrambleTextMap);

  const solveIndexTextFn = useTranslation(solveIndexMap);
  const reconstructedByTextFn = useTranslation(reconstructedByMap);

  const headingText = [
    index !== undefined && solveIndexTextFn(index + 1),
    recon.time && `(${recon.time}):`,
    recon.reconstructor && reconstructedByTextFn(recon.reconstructor),
  ]
    .filter(Boolean)
    .join(" ");

  const solutionDetailsText = [
    recon.movecount && `${recon.movecount} STM`,
    !isDNF && tps && `${tps.toFixed(1)} TPS`,
  ]
    .filter(Boolean)
    .join(", ");

  const notesText = useTranslation(notesTextMap);

  const solutionText = `${useTranslation(
    solutionTextMap
  )} ${solutionDetailsText}`;

  console.log({
    translatedCubeOrientation,
    eoStepOrientation: recon.eoStepOrientation,
  });
  return (
    <div className={clsx(styles.container, styles.splitOnDesktop)}>
      <div>
        <p className={styles.solveHeading}>{headingText}</p>
        <div ref={twistyPlayerContainer} />
      </div>
      <div className={styles.scrambleAndSolution}>
        <p>
          <strong>{scrambleText}</strong> {translatedScramble}
        </p>
        <div>
          <p>
            <strong>{solutionText}</strong>
          </p>
          <div ref={twistyAlgViewerContainer} />
        </div>
        {recon.notes && (
          <div>
            <p>
              <strong>{notesText}</strong>
            </p>
            {recon.notes.split("\n").map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// gets the time including penalty. DNF is null
function parseTime(time: string): number | null {
  if (time.includes("DNF")) return null;
  const penalty = time.includes("+") ? 2 : 0;
  // Remove any () and +. They indicate solves that don't count as part of an average, and +2 penalty respectively.
  time = time.replace(/\(|\)|\+/g, "");
  return Number(time) + penalty;
}
