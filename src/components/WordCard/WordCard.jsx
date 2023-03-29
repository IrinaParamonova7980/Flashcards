import styles from "./wordCard.module.scss";
import Button from "../common/button/Button";
import { useState } from "react";

export default function WordCard(props) {
  const [pressed, setPressed] = useState(props.pressed || false);
  const showTranslation = () => {
    setPressed(!pressed);    
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{props.english}</h2>
      <div className={styles.transcription}>{props.transcription}</div>
      {pressed ? (
        <h2 className={styles.word}>{props.russian}</h2>
      ) : (
        <Button
          button="Показать перевод"
          buttonStyle={styles.show}
          pressed={pressed}
          onClick={showTranslation}
        ></Button>
      )}
      <div className={styles.topic}>{props.tags}</div>
    </div>
  );
}
