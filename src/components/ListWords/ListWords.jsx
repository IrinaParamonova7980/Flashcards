import styles from "./listWords.module.scss";
import TableRow from "../tableRow/TableRow";
import React, { useState } from "react";
import { useContext } from "react";
import { WordContext } from "../wordsContext/WordContext";

export default function ListWords() {
  const { data } = useContext(WordContext);
  const [writeWord, setWriteWord] = useState(false);
  const [valueUser, setValueUser] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });
  const [wordList, setWordList] = useState(data);

  const handleChange = (e) => {
    setValueUser({ ...valueUser, [e.target.name]: e.target.value });
  };

  let maxId = 0;
  wordList.forEach(
    (article) => (maxId = article.id > maxId ? article.id : maxId)
  );

  const addWord = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        id: maxId,
        english: valueUser.english,
        transcription: valueUser.transcription,
        russian: valueUser.russian,
        tags: valueUser.tags,
        tags_json: valueUser.tags,
      }),
    };
    fetch("api/words/add", requestOptions)
      .then((response) => response.json())
      .then((newWord) => {
        setWordList((wordList) => [...wordList, newWord]);
      })
      .catch((error) => console.log(error.message));

    setValueUser({ english: "", transcription: "", russian: "", tags: "" });
    setWriteWord(false);
    window.location.reload();
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
          {data.map((item) => (
            <TableRow key={item.id} {...item}></TableRow>
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
                <button
                  className={styles.button_save}
                  onClick={() => {
                    addWord();
                  }}
                >
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
}
