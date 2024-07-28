import { TwistyPlayer, TwistyAlgViewer } from "cubing/twisty";
import { useState, useEffect, useRef, useId } from "react";
import { type Reconstruction } from "reconstructions/types";
import styles from "./ReconstructionViewer.module.css";
import clsx from "clsx";
import YouTube, { type YouTubePlayer } from "react-youtube";
export interface ReconstructionViewer {
  recons: Reconstruction[];
  youtubeVideoId: string; // TODO: make this optional and hide youtube player if undefined
}

export default function ReconstructionViewer({
  recons,
  youtubeVideoId,
}: ReconstructionViewer) {
  const [selectedSolveIndex, setSelectedSolveIndex] = useState(0);
  const selectedSolve = recons[selectedSolveIndex];
  const [youTubePlayer, setYouTubePlayer] = useState<YouTubePlayer>();
  const [shouldJumpToVideo, setShouldJumpToVideo] = useState(true);
  const shouldJumpCheckboxId = useId();
  const twistyPlayerContainer = useRef<HTMLDivElement>(null);
  const twistyAlgViewerContainer = useRef<HTMLDivElement>(null);
  const twistyPlayer = useRef<TwistyPlayer>(null);
  const twistyAlgViewer = useRef<TwistyAlgViewer>(null);

  const handlePreviousButton = () => {
    if (selectedSolveIndex <= 0) return;
    setSelectedSolveIndex(selectedSolveIndex - 1);
  };
  const handleNextButton = () => {
    if (selectedSolveIndex > recons.length - 1) return;
    setSelectedSolveIndex(selectedSolveIndex + 1);
  };

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

  // update the twisty player when props hcange
  useEffect(() => {
    if (!twistyPlayer.current) return;
    twistyPlayer.current.experimentalSetupAlg = selectedSolve.scramble;
    twistyPlayer.current.alg = selectedSolve.solution;
    twistyPlayer.current.jumpToStart();
  }, [selectedSolve]);

  const tps =
    selectedSolve.movecount / Number(selectedSolve.time.replace("+", ""));

  return (
    <div className={styles.container}>
      <YouTube
        className={styles.video}
        iframeClassName={styles.videoIframe}
        videoId={youtubeVideoId}
        onReady={(event) => setYouTubePlayer(event.target)}
      />
      <div className={styles.solvesList}>
        {recons.map((recon, index) => {
          const active = index === selectedSolveIndex;
          const onClick = () => {
            setSelectedSolveIndex(index);
            if (!recon.videoTimestamp) return;
            shouldJumpToVideo && youTubePlayer?.seekTo(recon.videoTimestamp);
          };
          return (
            <button
              className={clsx(
                styles.button,
                styles.solveButton,
                active && styles.active
              )}
              onClick={onClick}
              type="button"
              key={index}
            >
              {recon.time}
            </button>
          );
        })}
      </div>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={shouldJumpCheckboxId}
          checked={shouldJumpToVideo}
          onChange={(e) => setShouldJumpToVideo(e.target.checked)}
        />
        <label htmlFor={shouldJumpCheckboxId}>Jump to video timestamp</label>
      </div>

      <p className={styles.solveHeading}>
        Solve #{selectedSolveIndex + 1} ({selectedSolve.time}): reconstructed by{" "}
        {selectedSolve.reconstructor}
      </p>
      <div className={styles.scrambleAndSolution}>
        <div ref={twistyPlayerContainer} />
        <p>
          <strong>Scramble:</strong> {selectedSolve.scramble}
        </p>
        <div>
          <p>
            <strong>
              Solution ({selectedSolve.movecount} STM, {tps.toFixed(1)} TPS):
            </strong>
          </p>
          <div ref={twistyAlgViewerContainer} />
        </div>
        {selectedSolve.notes && (
          <div>
            <p><strong>Notes:</strong></p>
            {selectedSolve.notes.split("\n").map((note) => <p key={note}>{note}</p>)}
          </div>
        )}
      </div>
      <div className={styles.navigationButtonGroup}>
        <button
          className={styles.button}
          disabled={selectedSolveIndex <= 0}
          type="button"
          title="Previous solve"
          onClick={handlePreviousButton}
        >
          Previous
        </button>
        <button
          className={styles.button}
          disabled={selectedSolveIndex >= recons.length - 1}
          type="button"
          title="Next solve"
          onClick={handleNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
