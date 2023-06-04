import styles from "./tableRow.module.scss";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useState } from "react";

const TableRow = (props) => {
  const [editing, editWord] = useState(true);
  const [userData, setUserData] = useState(props);
  const [valueUser, setValueUser] = useState({
    id: props.id || "",
    english: props.english || "",
    transcription: props.transcription || "",
    russian: props.russian || "",
    tags: props.tags || "",
  });
  const [isDisabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");

  const handleChange = (e) => {
    setValueUser({ ...valueUser, [e.target.name]: e.target.value });
    if (e.target.value.length === 0) {
      setDisabled(true);
      setErrorField("Заполните поле");
    } else {
      setDisabled(false);
    }
  };

  // const errorСhecking = (e) => {
  //   const re = /^\D+$/;
  //   if (!re.test(valueUser.english)) {
  //     setErrorField("Ошибка в поле ввода");
  //   } else if (!re.test(valueUser.transcription)) {
  //     setErrorField("Ошибка в поле ввода");
  //   } else if (!re.test(valueUser.russian)) {
  //     setErrorField("Ошибка в поле ввода");
  //   } else if (!re.test(valueUser.tags)) {
  //     setErrorField("Ошибка в поле ввода");
  //   } else {
  //     setErrorField("");
  //     editWord(true);
  //   }
  // };

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
              onClick={() => props.deleteWord(valueUser.id)}
            ></img>
          </td>
        ) : (
          <td className={styles.button_block}>
            <button
              className={styles.button_save}
              alt={"Сохранить"}
              onClick={() => props.handleSave(valueUser, valueUser.id)}
              disabled={isDisabled}
            >
              Сохранить
            </button>
            <button
              className={styles.button_cancel}
              alt={"Отменить"}
              onClick={() => {
                setUserData(props);
                editWord(true);
              }}
            >
              Отменить
            </button>
            {errorField && <div className={styles.error}>{errorField}</div>}
          </td>
        )}
      </tr>
    </>
  );
};

export default TableRow;
