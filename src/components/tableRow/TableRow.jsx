import styles from "./tableRow.module.scss";
import saveIcon from "../assets/save.svg";
import cancelIcon from "../assets/cancel.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

export default function TableRow(props) {
  const [editing, editWord] = useState(true);
  const [userData, newValue] = useState(props);

  return (
    <tr className={styles.container}>
      {editing ? (
        <td className={styles.word}>{userData.english}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={userData.english}
            onChange={(e) => newValue(e.target.value)}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{userData.transcription}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={userData.transcription}
            onChange={(e) => newValue(e.target.value)}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{userData.russian}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={userData.russian}
            onChange={(e) => newValue(e.target.value)}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{userData.tags}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={userData.tags}
            onChange={(e) => newValue(e.target.value)}
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
          <img src={deleteIcon} alt={"Удалить"} className={styles.image}></img>
        </td>
      ) : (
        <td className={styles.button_block}>
          <img src={saveIcon} alt={"Сохранить"} className={styles.image}></img>
          <img
            src={cancelIcon}
            alt={"Отменить"}
            className={styles.image}
            onClick={() => {
              newValue(props);
              editWord(true);
            }}
          ></img>
        </td>
      )}
    </tr>
  );
}
