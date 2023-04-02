import styles from "./listWords.module.scss";
import data from "../../data.json";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import Button from "../common/button/Button";
import { useState } from "react";

export default function ListWords() {
  const [editing, editWord] = useState(true);
  const [userData, newValue] = useState(data);

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
      <tbody className={styles.body}>
        {userData.map((data) => (
          <tr key={data.id}>
            {editing ? (
              <td className={styles.word}>{data.english}</td>
            ) : (
              <td>
                <input
                  type="text"
                  className={styles.input}
                  value={data.english}
                  onChange={(e) => newValue(e.target.value)}

                  // onChange={newValue(
                  //   userData.map((item) => (
                  //     <td>
                  //       <input
                  //         type="text"
                  //         className={styles.input}
                  //         value={(e) => e.target.value}
                  //       ></input>
                  //     </td>
                  //   ))
                  // )}
                ></input>
              </td>
            )}
            {editing ? (
              <td className={styles.word}>{data.transcription}</td>
            ) : (
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={data.transcription}
                ></input>
              </td>
            )}
            {editing ? (
              <td className={styles.word}>{data.russian}</td>
            ) : (
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={data.russian}
                ></input>
              </td>
            )}
            {editing ? (
              <td className={styles.word}>{data.tags}</td>
            ) : (
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={data.tags}
                ></input>
              </td>
            )}
            {editing ? (
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
            ) : (
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
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// const handleClear = () =>  {
//   newValue('')
// }
