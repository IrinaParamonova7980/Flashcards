import styles from "./wordCard.module.scss";
import Button from "../common/button/Button";
import { useState } from "react";

export default function WordCard(props) {
  const [clickButton, showTranslation] = useState(false);

  return (
    <div className={styles.card}>
      <h2 className={styles.english}>{props.english}</h2>
      <div className={styles.transcription}>{props.transcription}</div>
      {clickButton ? (
        <div>
          <h2 className={styles.russian} onClick={() => showTranslation(false)}>
            {props.russian}
          </h2>
        </div>
      ) : (
        <Button
          button="Показать перевод"
          buttonstyle={styles.button}
          onClick={() => showTranslation(true)}
        ></Button>
      )}
      <div className={styles.topic}>{props.tags}</div>
    </div>
  );
}

WordCard.defaultProps = {
  english: "Слово не определено",
  transcription: "",
  russian: "Слово не определено",
  tags: "",
};
