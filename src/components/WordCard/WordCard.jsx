import styles from "./wordCard.module.scss";
import { useState } from "react";

export default function WordCard(props) {
  const [pressed, showTranslation] = useState(false);

  return (
    <div className={styles.card}>
      <h2 className={styles.english}>{props.english}</h2>
      <div className={styles.transcription}>{props.transcription}</div>
      {pressed ? (
        <div>
          <h2 className={styles.russian} onClick={() => showTranslation(false)}>
            {props.russian}
          </h2>
        </div>
      ) : (
        <button className={styles.button} onClick={() => showTranslation(true)}>
          Показать перевод
        </button>
      )}
      <div className={styles.topic}>{props.tags}</div>
    </div>
  );
}
