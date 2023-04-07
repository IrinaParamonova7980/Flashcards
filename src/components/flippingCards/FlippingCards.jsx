import React, { useState } from "react";
import styles from "./flippingCards.module.scss";
//import forward from "../assets/forward.svg";
//import back from "../assets/back.svg";
import data from "../../data.json";
import { useEffect } from "react";
import WordCard from "../wordCard/WordCard";

export default function FlippingCards() {
  const [cards, setCard] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = cards.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cards]);

  return (
    <div className={styles.section_center}>
      {cards.map((card, cardIndex) => {
        const { id, english, transcription, russian, tags } = card;

        let position = "nextSlide";
        if (cardIndex === index) {
          position = "activeSlide";
        }

        if (cardIndex === index - 1) {
          position = "lastSlide";
        }

        return (
          <article className={styles[position]} key={id}>
            <WordCard
              english={english}
              transcription={transcription}
              russian={russian}
              tags={tags}
              key={id}
            ></WordCard>
          </article>
        );
      })}

      <button
        className={styles.prev}
        onClick={() => setIndex((prevState) => prevState - 1)}
      >
        Назад
      </button>
      <button
        className={styles.next}
        onClick={() => setIndex((prevState) => prevState + 1)}
      >
        Вперед
      </button>
    </div>
  );
}
