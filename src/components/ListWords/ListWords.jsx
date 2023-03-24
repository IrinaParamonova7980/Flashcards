import styles from "./listWords.module.scss";

function ListWords(props) {
  return (
    <table className={styles.table}>
      <tr className={styles.body}>
        <td className={styles.word}>{props.english}</td>
        <td className={styles.word}>{props.transcription}</td>
        <td className={styles.word}>{props.russian}</td>
        <td className={styles.word}>{props.tags}</td>
        <td className={styles.button_block}>
          <button className={styles.button}>Редактировать</button>
          <button className={styles.button}>Удалить</button>
        </td>
      </tr>
    </table>
  );
}

export default ListWords;
