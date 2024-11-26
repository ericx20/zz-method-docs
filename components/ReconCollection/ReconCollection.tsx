"use client";

import { useState, useId } from "react";
import { type Reconstruction } from "types";
import styles from "./ReconCollection.module.css";
import clsx from "clsx";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { ReconViewer } from "../ReconViewer";
import { useTranslation } from "translations/useTranslation";
import {
  frontColorMap,
  jumpToVideoTimestampMap,
  nextReconMap,
  previousReconMap,
  topColorMap,
  usePreferredSolvingOrientationMap,
} from "translations/ReconCollection";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Color, COLORS, getAdjacentColors, type CubeOrientation } from "@/lib";

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

  const [shouldJumpToVideo, setShouldJumpToVideo] = useLocalStorage(
    "should-jump-to-video",
    true
  );
  const shouldJumpCheckboxId = useId();

  const [shouldTranslateCubeOrientation, setShouldTranslateCubeOrientation] =
    useLocalStorage("should-translate-cube-orientation", false);
  const [translatedCubeOrientation, setTranslatedCubeOrientation] =
    useLocalStorage<CubeOrientation>("translated-cube-orientation", {
      top: "yellow",
      front: "blue",
    });
  const shouldTranslateCubeOrientationCheckboxId = useId();

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

  // translations
  const jumpToVideoTimestampText = useTranslation(jumpToVideoTimestampMap);
  const usePreferredSolvingOrientationText = useTranslation(
    usePreferredSolvingOrientationMap
  );
  const previousReconText = useTranslation(previousReconMap);
  const nextReconText = useTranslation(nextReconMap);

  return (
    <div className={styles.container}>
      {youtubeVideoId && (
        <YouTube
          className={styles.video}
          iframeClassName={styles.videoIframe}
          videoId={youtubeVideoId}
          onReady={(event) => setYouTubePlayer(event.target)}
        />
      )}
      <div className={styles.solvesList}>
        {recons.map((recon, index) => {
          const active = index === selectedReconIndex;
          const onClick = () => {
            setSelectedReconIndex(index);
            if (!recon.videoTimestamp) return;
            shouldJumpToVideo && youTubePlayer?.seekTo(recon.videoTimestamp);
          };
          const isDNF = recon.time?.includes("DNF");
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
              {isDNF ? "DNF" : recon.time ?? `#${index + 1}`}
            </button>
          );
        })}
      </div>
      {youtubeVideoId && (
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id={shouldJumpCheckboxId}
            checked={shouldJumpToVideo}
            onChange={(e) => setShouldJumpToVideo(e.target.checked)}
          />
          <label htmlFor={shouldJumpCheckboxId}>
            {jumpToVideoTimestampText}
          </label>
        </div>
      )}

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={shouldTranslateCubeOrientationCheckboxId}
          checked={shouldTranslateCubeOrientation}
          onChange={(e) => setShouldTranslateCubeOrientation(e.target.checked)}
        />
        <label htmlFor={shouldTranslateCubeOrientationCheckboxId}>
          {usePreferredSolvingOrientationText}
        </label>
      </div>

      {shouldTranslateCubeOrientation && (
        <OrientationSelect
          orientation={translatedCubeOrientation}
          setOrientation={setTranslatedCubeOrientation}
        />
      )}

      <div className={styles.navigationButtonGroup}>
        <button
          className={styles.button}
          disabled={selectedReconIndex <= 0}
          type="button"
          title="Previous solve"
          onClick={handlePreviousButton}
        >
          {previousReconText}
        </button>
        <button
          className={styles.button}
          disabled={selectedReconIndex >= recons.length - 1}
          type="button"
          title="Next solve"
          onClick={handleNextButton}
        >
          {nextReconText}
        </button>
      </div>

      <ReconViewer
        recon={selectedRecon}
        index={selectedReconIndex}
        translatedCubeOrientation={
          shouldTranslateCubeOrientation ? translatedCubeOrientation : undefined
        }
      />
    </div>
  );
}

interface OrientationSelectProps {
  orientation: CubeOrientation;
  setOrientation: (orientation: CubeOrientation) => void;
}

function OrientationSelect({
  orientation,
  setOrientation,
}: OrientationSelectProps) {
  const { top: topColor, front: frontColor } = orientation;

  const handleTopColor: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newTopColor = e.target.value as Color;
    const topAdjacentColors = getAdjacentColors(newTopColor);
    const newFrontColor = topAdjacentColors.includes(frontColor)
      ? frontColor
      : topAdjacentColors[0];
    const newOrientation = {
      top: newTopColor,
      front: newFrontColor,
    };
    setOrientation(newOrientation);
  };

  const handleFrontColor: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newFrontColor = e.target.value as Color;
    const frontAdjacentColors = getAdjacentColors(newFrontColor);
    const newTopColor = frontAdjacentColors.includes(topColor)
      ? topColor
      : frontAdjacentColors[0];

    const newOrientation = {
      top: newTopColor,
      front: newFrontColor,
    };
    setOrientation(newOrientation);
  };

  const topColorTextFn = useTranslation(topColorMap);
  const frontColorTextFn = useTranslation(frontColorMap);

  return (
    <span className={styles.dropdownGroup}>
      <select
        className={styles.dropdown}
        value={topColor}
        onChange={handleTopColor}
      >
        {COLORS.map((color) => (
          <option value={color} key={color}>
            {topColorTextFn(color)}
          </option>
        ))}
      </select>
      <select
        className={styles.dropdown}
        value={frontColor}
        onChange={handleFrontColor}
      >
        {COLORS.map((color) => (
          <option value={color} key={color}>
            {frontColorTextFn(color)}
          </option>
        ))}
      </select>
    </span>
  );
}
