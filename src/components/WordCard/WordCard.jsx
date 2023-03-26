import styles from "./wordCard.module.scss";

function WordCard(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{props.english}</h2>
      <div className={styles.transcription}>{props.transcription}</div>
      <div className={styles.topic}>{props.tags}</div>
    </div>
  );
}

export default WordCard;
