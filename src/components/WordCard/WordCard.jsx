import styles from "./wordCard.module.scss";
import Button from "../common/button/Button";
import { forwardRef, useState } from "react";

const WordCard = forwardRef((props, ref) => {
  const [clickButton, showTranslation] = useState(false);

  const click = () => {
    showTranslation(true);
    props.onAddToWord();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.english} ref={ref}>{props.english}</h2>
      <div className={styles.transcription}>{props.transcription}</div>
      {clickButton ? (
        <div>
          <h2 className={styles.russian} onClick={() => showTranslation(false)} >
            {props.russian}
          </h2>
        </div>
      ) : (
        <Button
          button="Показать перевод"
          buttonstyle={styles.button}
          onClick={click}
          ref={ref}
        ></Button>
      )}
      <div className={styles.topic}>Тема: {props.tags}</div>
    </div>
  );
});

WordCard.defaultProps = {
  english: "Слово не определено",
  transcription: "",
  russian: "Слово не определено",
  tags: "",
};

export default WordCard;
