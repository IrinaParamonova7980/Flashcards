import styles from "./listWords.module.scss";
import data from "../../data.json";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import Button from "../common/button/Button";
import { useState } from "react";

export default function ListWords() {
  const [editing, editWord] = useState(true);

  return (
    <table className={styles.table}>
      <caption className={styles.heading}>Список слов</caption>
      <thead className={styles.thead}>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th></th>
        </tr>
      </thead>
      {editing ? (
        <tbody className={styles.body}>
          {data.map((data) => (
            <tr key={data.id}>
              <td className={styles.word}>{data.english}</td>
              <td className={styles.word}>{data.transcription}</td>
              <td className={styles.word}>{data.russian}</td>
              <td className={styles.word}>{data.tags}</td>
              <td className={styles.button_block}>
                <img
                  src={editIcon}
                  alt={"Редактировать"}
                  className={styles.image}
                  onClick={() => {
                    editWord(false);
                  }}
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
          {data.map((data) => (
            <tr className={styles.input_block}>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  value={data.english}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  value={data.transcription}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  value={data.russian}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  value={data.tags}
                ></input>
              </td>
              <td className={styles.button_block}>
                <Button
                  button="Сохранить"
                  buttonstyle={styles.button_save}
                ></Button>
                <Button
                  button="Отмена"
                  buttonstyle={styles.button_cancel}
                  click={() => {
                    editWord(true);
                  }}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
