import styles from "./listWords.module.scss";
import data from "../../data.json";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import Button from "../common/button/Button";

function ListWords(props) {
  return (
    <table className={styles.table}>
      <caption className={styles.heading}>Список слов</caption>
      <thead className={styles.thead}>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th ></th>
        </tr>
      </thead>
      {props.newWord ? (
        <tbody className={styles.body}>
          {data.map((data) => (
            <tr key={data.id}>
              <td className={styles.word}>{data.english}</td>
              <td className={styles.word}>{data.transcription}</td>
              <td className={styles.word}>{data.russian}</td>
              <td className={styles.word}>{data.tags}</td>
              <td className={`${styles.button_block} ${styles.cool1}`}>
                <img
                  src={editIcon}
                  alt={"Редактировать"}
                  className={styles.image}
                ></img>
                <img
                  src={deleteIcon}
                  alt={"Удалить"}
                  className={styles.image}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className={styles.body}>
          <tr className={styles.input_block}>
            <td>
              <input type="text" className={styles.input}></input>
            </td>
            <td>
              <input type="text" className={styles.input}></input>
            </td>
            <td>
              <input type="text" className={styles.input}></input>
            </td>
            <td>
              <input type="text" className={styles.input}></input>
            </td>
            <td className={`${styles.button_block} ${styles.cool1}`}>
              <Button
                button="Сохранить"
                buttonStyle={styles.button_save}
              ></Button>
              <Button
                button="Отмена"
                buttonStyle={styles.button_cancel}
              ></Button>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default ListWords;
