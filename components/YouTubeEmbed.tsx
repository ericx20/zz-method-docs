import styles from "./YouTubeEmbed.module.css";

interface YouTubeEmbedProps {
  // Typical YouTube links are in the form "youtube.com/watch?v=<embed id here>"
  embedId: string;
}

// Options are limited. If you need more, use the `react-youtube` package
export default function YouTubeEmbed({ embedId }: YouTubeEmbedProps) {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    </div>
  );
}
