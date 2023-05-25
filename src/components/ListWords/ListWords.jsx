import styles from "./listWords.module.scss";
import TableRow from "../tableRow/TableRow";
import React, { useState } from "react";
import { useContext } from "react";
import { WordContext } from "../wordsContext/WordContext";

export default function ListWords() {
  const { data } = useContext(WordContext);
  const [writeWord, setWriteWord] = useState(false);
  const [valueUser, setValueUser] = useState("");
  const [wordList, setWordList] = useState(data);
  const [newWords, setNewWords] = useState({});

  const handleChange = (e) => {
    setValueUser({ ...valueUser, [e.target.name]: e.target.value });
  };

  let newWord;

  // function addWord() {
  //   newWord = {
  //     id: data.id + 1,
  //     english: e.target.value,
  //     transcription: e.target.value,
  //     russian: e.target.value,
  //     tags: e.target.value,
  //   };

  //   setWordList([...wordList, newWord]);
  //   setNewWords("");
  // }


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
                    addWord;
                  }}
                >
                  Добавить
                </button>
                <button
                  className={styles.button_cancel}
                  onClick={() => {
                    setWriteWord(false);
                    setValueUser("");
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
          setAddWord(true);
        }}
      >
        Добавить слово
      </button>
    </div>
  );
}
