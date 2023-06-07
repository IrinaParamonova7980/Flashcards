import styles from "./tableRow.module.scss";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { inject, observer } from "mobx-react";
import { useState } from "react";

const TableRow = inject(["wordsStore"])(
  observer(({ wordsStore, word }) => {
    const [editing, editWord] = useState(true);
    const [userData, setUserData] = useState(word);
    const [isDisabled, setDisabled] = useState(false);
    const [errorField, setErrorField] = useState("");

    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
      if (e.target.value.length === 0) {
        setDisabled(true);
        setErrorField("Заполните поле");
      } else {
        setDisabled(false);
        setErrorField("");
      }
    };

    const handleSave = (event) => {
      event.preventDefault();
      if (
        userData.english !== "" &&
        userData.transcription !== "" &&
        userData.russian !== "" &&
        userData.tags !== ""
      ) {
        setDisabled(true);
        setErrorField("Заполните поле");
      }
      const re = /^\D+$/;
      if (!re.test(userData.english)) {
        setErrorField("Ошибка в поле ввода");
      } else if (!re.test(userData.transcription)) {
        setErrorField("Ошибка в поле ввода");
      } else if (!re.test(userData.russian)) {
        setErrorField("Ошибка в поле ввода");
      } else if (!re.test(userData.tags)) {
        setErrorField("Ошибка в поле ввода");
      } else {
        wordsStore.updateWord(userData);
        setErrorField("");
        editWord(true);
      }
    };

    const onDelete = () => {
      wordsStore.deleteWord(userData.id);
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
                value={userData.english}
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
                value={userData.transcription}
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
                value={userData.russian}
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
                value={userData.tags}
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
                onClick={onDelete}
              ></img>
            </td>
          ) : (
            <td className={styles.button_block}>
              <button
                className={styles.button_save}
                alt={"Сохранить"}
                onClick={handleSave}
                disabled={isDisabled}
              >
                Сохранить
              </button>
              <button
                className={styles.button_cancel}
                alt={"Отменить"}
                onClick={() => {
                  setUserData(word);
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
  })
);

export default TableRow;
