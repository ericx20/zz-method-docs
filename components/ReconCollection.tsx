import { useState, useId } from "react";
import { type Reconstruction } from "reconstructions/types";
import styles from "./ReconCollection.module.css";
import clsx from "clsx";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { ReconViewer } from "./ReconViewer";

export interface ReconCollectionProps {
  recons: Reconstruction[];
  youtubeVideoId: string;
}

export function ReconCollection({
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
