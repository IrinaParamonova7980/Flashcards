import styles from "./tableRow.module.scss";
//import saveIcon from "../assets/save.svg";
//import cancelIcon from "../assets/cancel.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

export default function TableRow(props) {
  const [editing, editWord] = useState(true);
  const [userData, setUserData] = useState(props);
  const [valueUser, setValueUser] = useState({
    english: props.english || "",
    transcription: props.transcription || "",
    russian: props.russian || "",
    tags: props.tags || "",
  });
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setValueUser({ ...valueUser, [e.target.name]: e.target.value });
    if (e.target.value.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (valueUser.english.length < 3) {
      console.log("Ошибка в поле 'Слово'");
    } else if (valueUser.transcription.length < 3) {
      console.log("Ошибка в поле 'Транскрипция'");
    } else if (valueUser.russian.length < 3) {
      console.log("Ошибка в поле 'Перевод'");
    } else if (valueUser.tags.length < 3) {
      console.log("Ошибка в поле 'Тема'");
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
              className={isDisabled ? styles.input_empty : styles.input}
              value={valueUser.english}
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
              className={isDisabled ? styles.input_empty : styles.input}
              value={valueUser.transcription}
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
              className={isDisabled ? styles.input_empty : styles.input}
              value={valueUser.russian}
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
              className={isDisabled ? styles.input_empty : styles.input}
              value={valueUser.tags}
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
            <button
              alt={"Сохранить"}
              onClick={handleSave}
              disabled={isDisabled}
            >
              Сохранить
            </button>
            {/* <img
              src={saveIcon}
              alt={"Сохранить"}
              className={styles.image}
              onClick={handleSave}
              disabled={isDisabled}
            ></img> */}
            <button
              alt={"Отменить"}
              onClick={() => {
                setUserData(props);
                editWord(true);
              }}
            >
              Отменить
            </button>
            {/* <img
              src={cancelIcon}
              alt={"Отменить"}
              className={styles.image}
              onClick={() => {
                setUserData(props);
                editWord(true);
              }}
            ></img> */}
          </td>
        )}
      </tr>
      {/* {error && <tr className={styles.error}>{"Поле не заполнено" }</tr> } */}
    </>
  );
}
