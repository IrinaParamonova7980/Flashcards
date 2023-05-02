import styles from "./tableRow.module.scss";
import data from "../../data.json";
import saveIcon from "../assets/save.svg";
import cancelIcon from "../assets/cancel.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

export default function TableRow(props) {
  const [editing, editWord] = useState(true);
  const [userData, newValue] = useState(data);

  function cancelChanges() {
    editWord(true);
    handleClear();
  }

  function handleClear() {
    const cancel = data.map((item) => {
      return {
        id: item.id,
        english: item.english,
        transcription: item.transcription,
        russian: item.russian,
        tags: item.tags,
      };
    });
    newValue(cancel);
  }

  function onChangeWord(e, id, field) {
    const changeWord = userData.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: (item[field] = e.target.value) };
      } else {
        return { ...item };
      }
    });
    newValue(changeWord);
  }

  return (
    <tr className={styles.container}>
      {editing ? (
        <td className={styles.word}>{props.english}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={props.english}
            onChange={(e) => onChangeWord(e, props.id, "english")}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{props.transcription}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={props.transcription}
            onChange={(e) => onChangeWord(e, props.id, "transcription")}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{props.russian}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={props.russian}
            onChange={(e) => onChangeWord(e, props.id, "russian")}
          ></input>
        </td>
      )}
      {editing ? (
        <td className={styles.word}>{props.tags}</td>
      ) : (
        <td>
          <input
            type="text"
            className={styles.input}
            value={props.tags}
            onChange={(e) => onChangeWord(e, props.id, "tags")}
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
            onClick={cancelChanges}
          ></img>
        </td>
      )}
    </tr>
  );
}
