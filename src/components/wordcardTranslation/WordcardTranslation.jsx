import styles from "./wordcardTranslation.module.scss";

function WordcardTranslation(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{props.russian}</h2>
    </div>
  );
}

export default WordcardTranslation;
