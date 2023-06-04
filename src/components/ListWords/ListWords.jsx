import styles from "./listWords.module.scss";
import TableRow from "../tableRow/TableRow";
import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";

const ListWords = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    useEffect(() => {
      wordsStore.fetchData();
    }, [wordsStore]);

    const [writeWord, setWriteWord] = useState(false);
    const [valueUser, setValueUser] = useState({
      id: "",
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });

    const handleChange = (e) => {
      setValueUser({ ...valueUser, [e.target.name]: e.target.value });
    };

    const addNewWord = () => {
      wordsStore.addWord(valueUser);
      setValueUser({ english: "", transcription: "", russian: "", tags: "" });
      setWriteWord(false);
    };

    return (
      <div className={styles.listwords_block}>
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
          <tbody>
            {wordsStore.words.map((item) => (
              <TableRow
                key={item.id}
                {...item}
                deleteWord={wordsStore.deleteWord}
                handleSave={wordsStore.updateWord}
              ></TableRow>
            ))}
            {writeWord ? (
              <tr>
                <td>
                  <input
                    type="text"
                    name="english"
                    className={styles.input}
                    value={valueUser.english}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="transcription"
                    className={styles.input}
                    value={valueUser.transcription}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="russian"
                    className={styles.input}
                    value={valueUser.russian}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="tags"
                    className={styles.input}
                    value={valueUser.tags}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className={styles.button_block}>
                  <button className={styles.button_save} onClick={addNewWord}>
                    Добавить
                  </button>
                  <button
                    className={styles.button_cancel}
                    onClick={() => {
                      setWriteWord(false);
                    }}
                  >
                    Отменить
                  </button>{" "}
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
        <button
          className={styles.button}
          onClick={() => {
            setWriteWord(true);
          }}
        >
          Новое слово
        </button>
      </div>
    );
  })
);

export default ListWords;
