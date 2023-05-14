import styles from "./tableRow.module.scss";
import saveIcon from "../assets/save.svg";
import cancelIcon from "../assets/cancel.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

export default function TableRow(props) {
  const [editing, editWord] = useState(true);
  const [userData, setUserData] = useState(props);
  const [value, setValue] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags,
  });

  const handleChange = (e) => {
    setValue(([e.target.name] = e.target.value));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      value.english.length &&
      value.transcription.length &&
      value.russian.length &&
      value.tags.length === 0
    ) {
      console.log("Поле не заполнено");
    }
  };

  return (
    <>
      <tr className={styles.container}>
        {editing ? (
          <td className={styles.word}>{userData.english}</td>
        ) : (
          <td>
            <input
              type="text"
              name="english"
              className={styles.input}
              value={value.english}
              onChange={handleChange}
            ></input>
          </td>
        )}
        {editing ? (
          <td className={styles.word}>{userData.transcription}</td>
        ) : (
          <td>
            <input
              type="text"
              name="transcription"
              className={styles.input}
              value={value.transcription}
              onChange={handleChange}
            ></input>
          </td>
        )}
        {editing ? (
          <td className={styles.word}>{userData.russian}</td>
        ) : (
          <td>
            <input
              type="text"
              name="russian"
              className={styles.input}
              value={value.russian}
              onChange={handleChange}
            ></input>
          </td>
        )}
        {editing ? (
          <td className={styles.word}>{userData.tags}</td>
        ) : (
          <td>
            <input
              type="text"
              name="tags"
              className={styles.input}
              value={value.tags}
              onChange={handleChange}
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
            <img
              src={saveIcon}
              alt={"Сохранить"}
              className={styles.image}
              onClick={handleSave}
            ></img>
            <img
              src={cancelIcon}
              alt={"Отменить"}
              className={styles.image}
              onClick={() => {
                setUserData(props);
                editWord(true);
              }}
            ></img>
          </td>
        )}
      </tr>
      {/* {error && <tr className={styles.error}>{"Поле не заполнено" }</tr> } */}
    </>
  );
}
