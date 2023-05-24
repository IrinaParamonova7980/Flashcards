import React, { useCallback, useState } from "react";
import styles from "./carousel.module.scss";
import forward from "../assets/forward.svg";
import back from "../assets/back.svg";
import WordCard from "../wordCard/WordCard";
import { useContext } from "react";
import { WordContext } from "../wordsContext/WordContext";

export default function Carousel(prop) {
  const { data } = useContext(WordContext);
  const [index, setIndex] = useState(prop.index || 0);
  const [count, setCount] = useState(0);
  const { id, english, transcription, russian, tags } = data[index];

  const clickButtonBack = useCallback(() => {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }, [index, data.length]);

  const clickButtonForward = useCallback(() => {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }, [index, data.length]);

  const addToWord = () => {
    setCount(count + 1);
  };

  return (
    <>
      <article className={styles.section}>
        <img
          src={back}
          alt={"Назад"}
          className={styles.back}
          onClick={clickButtonBack}
        ></img>
        <WordCard
          key={id}
          english={english}
          transcription={transcription}
          russian={russian}
          tags={tags}
          onAddToWord={addToWord}
        ></WordCard>
        <img
          src={forward}
          alt={"Вперед"}
          className={styles.forward}
          onClick={clickButtonForward}
        ></img>
      </article>

      <div className={styles.numberCard}>
        {index + 1} / {data.length}
      </div>
      <div className={styles.count}>Выучено слов: {count}</div>
    </>
  );
}
