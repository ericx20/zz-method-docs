import { TwistyPlayer, TwistyAlgViewer } from "cubing/twisty";
import { useEffect, useRef } from "react";
import { type Reconstruction } from "reconstructions/types";
import styles from "./ReconViewer.module.css";
import clsx from "clsx";

export interface ReconViewerProps {
  recon: Reconstruction;
  index?: number;
}

export function ReconViewer({ recon, index }: ReconViewerProps) {
  const twistyPlayerContainer = useRef<HTMLDivElement>(null);
  const twistyAlgViewerContainer = useRef<HTMLDivElement>(null);
  const twistyPlayer = useRef<TwistyPlayer>(null);
  const twistyAlgViewer = useRef<TwistyAlgViewer>(null);

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

  // update the twisty player when props change
  useEffect(() => {
    if (!twistyPlayer.current) return;
    twistyPlayer.current.experimentalSetupAlg = recon.scramble;
    twistyPlayer.current.alg = recon.solution;
    twistyPlayer.current.jumpToStart();
  }, [recon]);

  const parsedTime = recon?.time && parseTime(recon.time);
  const isDNF = parsedTime === null;
  const tps =
    recon.time && recon.movecount && recon.movecount / parseTime(recon.time);

  const headingText = [
    index !== undefined && `Solve #${index + 1}`,
    recon.time && `(${recon.time})${recon.reconstructor ? ":" : ""}`,
    recon.reconstructor && `reconstructed by ${recon.reconstructor}`,
  ]
    .filter(Boolean)
    .join(" ");

  const solutionDetailsText = [
    recon.movecount && `${recon.movecount} STM`,
    !isDNF && tps && `${tps.toFixed(1)} TPS`,
  ]
    .filter(Boolean)
    .join(", ");

  const solutionText = solutionDetailsText
    ? `Solution (${solutionDetailsText}):`
    : `Solution:`;

  return (
    <div className={clsx(styles.container, styles.splitOnDesktop)}>
      <div>
        <p className={styles.solveHeading}>{headingText}</p>
        <div ref={twistyPlayerContainer} />
      </div>
      <div className={styles.scrambleAndSolution}>
        <p>
          <strong>Scramble:</strong> {recon.scramble}
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
              <strong>Notes:</strong>
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
