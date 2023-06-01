import React, { useState } from "react";
import styles from "./carousel.module.scss";
import forward from "../assets/forward.svg";
import back from "../assets/back.svg";
import WordCard from "../wordCard/WordCard";
import { inject, observer } from "mobx-react";

const Carousel = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const words = wordsStore.words;
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const { id, english, transcription, russian, tags } = words[index];

    const clickButtonBack = () => {
      index > 0 ? setIndex(index - 1) : setIndex(words.length - 1);
    };

    const clickButtonForward = () => {
      index < words.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

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
          {index + 1} / {words.length}
        </div>
        <div className={styles.count}>Выучено слов: {count}</div>
      </>
    );
  })
);

export default Carousel;
