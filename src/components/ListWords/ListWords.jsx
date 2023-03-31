import styles from "./listWords.module.scss";
import data from "../../data.json";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import { useState } from "react";

export default function ListWords(props) {
  const [pressed, editWord] = useState(true);

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
      {pressed ? (
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
          <tr className={styles.input_block}>
            <td>
              <input type="text" className={styles.input}>
                {props.english}
              </input>
            </td>
            <td>
              <input type="text" className={styles.input}>
                {props.transcription}
              </input>
            </td>
            <td>
              <input type="text" className={styles.input}>
                {props.russian}
              </input>
            </td>
            <td>
              <input type="text" className={styles.input}>
                {props.tags}
              </input>
            </td>
            <td className={styles.button_block}>
              <button className={styles.button_save}>"Сохранить"</button>
              <button
                className={styles.button_cancel}
                onClick={() => {
                  editWord(true);
                }}
              >
                "Отмена"
              </button>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
