import { useRef, useState } from "react";
import styles from "./CubeMp4Embed.module.css";
import { FaPlay } from "react-icons/fa";

export interface CubeMp4EmbedProps {
  src: string;
}

export default function CubeMp4Embed({ src }: CubeMp4EmbedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.onended = () => setIsPlaying(false);
    videoRef.current.play();
    setIsPlaying(true);
  };
  return (
    <div className={styles.wrapper}>
      <video ref={videoRef} className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
      <div
        className={styles.playButtonWrapper}
        role="button"
        style={{ opacity: isPlaying ? 0 : undefined }}
        onClick={handlePlay}
      >
        <FaPlay className={styles.playButton} />
      </div>
    </div>
  );
}
