import styles from "./listWords.module.scss";
import data from "../../data.json";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import Button from "../common/button/Button";
import { useState } from "react";

export default function ListWords() {
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

  function onChangeEnglish(e, id, field) {
    const changeWordEnglish = userData.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: (item[field] = e.target.value) };
      } else {
        return { ...item };
      }
    });
    newValue(changeWordEnglish);
  }

  function onChangeTranscription(e, id) {
    const changeWordTranscription = userData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          transcription: (item.transcription = e.target.value),
        };
      } else {
        return { ...item };
      }
    });
    newValue(changeWordTranscription);
  }

  function onChangeRussian(e, id) {
    const changeWordRussian = userData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          russian: (item.russian = e.target.value),
        };
      } else {
        return { ...item };
      }
    });
    newValue(changeWordRussian);
  }

  function onChangeTags(e, id) {
    const changeWordTags = userData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          tags: (item.tags = e.target.value),
        };
      } else {
        return { ...item };
      }
    });

    newValue(changeWordTags);
  }

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
                  onChange={(e) => onChangeEnglish(e, data.id, 'english')}
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
                  value={data.transcription}
                  onChange={(e) => onChangeTranscription(e, data.id)}
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
                  value={data.russian}
                  onChange={(e) => onChangeRussian(e, data.id)}
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
                  value={data.tags}
                  onChange={(e) => onChangeTags(e, data.id)}
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
                  onClick={cancelChanges}
                ></Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
