import styles from "./YouTubeEmbed.module.css";

interface YouTubeEmbedProps {
  embedId: string;
}

export default function YouTubeEmbed({ embedId }: YouTubeEmbedProps) {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
