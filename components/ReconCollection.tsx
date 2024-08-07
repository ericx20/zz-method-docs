import { TwistyPlayer, TwistyAlgViewer } from "cubing/twisty";
import { useState, useEffect, useRef, useId } from "react";
import { type Reconstruction } from "reconstructions/types";
import styles from "./ReconCollection.module.css";
import clsx from "clsx";
import YouTube, { type YouTubePlayer } from "react-youtube";

export interface ReconCollectionProps {
  recons: Reconstruction[];
  youtubeVideoId: string;
}

export default function ReconCollection({
  recons,
  youtubeVideoId,
}: ReconCollectionProps) {
  const [selectedReconIndex, setSelectedReconIndex] = useState(0);
  const selectedRecon = recons[selectedReconIndex];
  const [youTubePlayer, setYouTubePlayer] = useState<YouTubePlayer>();
  const [shouldJumpToVideo, setShouldJumpToVideo] = useState(true);
  const shouldJumpCheckboxId = useId();

  const handlePreviousButton = () => {
    if (selectedReconIndex <= 0) return;
    const prevIndex = selectedReconIndex - 1;
    if (shouldJumpToVideo) {
      youTubePlayer?.seekTo(recons[prevIndex].videoTimestamp);
      youTubePlayer?.pauseVideo();
    }
    setSelectedReconIndex(prevIndex);
  };
  const handleNextButton = () => {
    if (selectedReconIndex > recons.length - 1) return;
    const nextIndex = selectedReconIndex + 1;
    if (shouldJumpToVideo) {
      youTubePlayer?.seekTo(recons[nextIndex].videoTimestamp);
      youTubePlayer?.pauseVideo();
    }
    setSelectedReconIndex(nextIndex);
  };

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
          const active = index === selectedReconIndex;
          const onClick = () => {
            setSelectedReconIndex(index);
            if (!recon.videoTimestamp) return;
            shouldJumpToVideo && youTubePlayer?.seekTo(recon.videoTimestamp);
          };
          const isDNF = recon.time.includes("DNF");
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
              {isDNF ? "DNF" : recon.time}
            </button>
          );
        })}
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={shouldJumpCheckboxId}
          checked={shouldJumpToVideo}
          onChange={(e) => setShouldJumpToVideo(e.target.checked)}
        />
        <label htmlFor={shouldJumpCheckboxId}>Jump to video timestamp</label>
      </div>

      <div className={styles.navigationButtonGroup}>
        <button
          className={styles.button}
          disabled={selectedReconIndex <= 0}
          type="button"
          title="Previous solve"
          onClick={handlePreviousButton}
        >
          Previous
        </button>
        <button
          className={styles.button}
          disabled={selectedReconIndex >= recons.length - 1}
          type="button"
          title="Next solve"
          onClick={handleNextButton}
        >
          Next
        </button>
      </div>

      <ReconViewer recon={selectedRecon} index={selectedReconIndex} />
    </div>
  );
}

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

  const headingText =
    (index === undefined ? "" : `Solve #${index + 1} `) +
    `(${recon.time}): reconstructed by ${recon.reconstructor}`;

  const parsedTime = parseTime(recon.time);
  const isDNF = parsedTime === null;
  const tps = recon.movecount / parseTime(recon.time)

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
            <strong>
              {/* , {tps.toFixed(1)} TPS */}
              Solution ({recon.movecount} STM{isDNF ? "" : `, ${tps.toFixed(1)} TPS`}):
            </strong>
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
  const penalty = time.includes("+") ? 2 : 0
  time = time.replace("(", "").replace(")", "").replace("+", "");
  return Number(time) + penalty;
}