import React, { useCallback, useState } from "react";
import styles from "./flippingCards.module.scss";
import forward from "../assets/forward.svg";
import back from "../assets/back.svg";
import data from "../../data.json";
import { useEffect } from "react";
import WordCard from "../wordCard/WordCard";

export default function FlippingCards(prop) {
  const [index, setIndex] = useState(prop.index || 0);

  const clickButtonBack = useCallback(() => setIndex(() => index - 1), [index]);
  const clickButtonForward = useCallback(() => setIndex(() => index + 1), [index]);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <>
      <div className={styles.section_center}>
        {data.map((card, cardIndex) => {
          const { id, ...props } = card;

          let position = "nextSlide";
          if (cardIndex === index) {
            position = "activeSlide";
          }

          if (cardIndex === index - 1) {
            position = "lastSlide";
          }

          return (
            <article className={styles[position]} key={id}>
              <WordCard key={id} {...props}></WordCard>
            </article>
          );
        })}

        <img
          src={back}
          alt={"Назад"}
          className={styles.prev}
          onClick={clickButtonBack}
        ></img>

        <img
          src={forward}
          alt={"Вперед"}
          className={styles.next}
          onClick={clickButtonForward}
        ></img>
      </div>
      <div className={styles.numberCard}>
        {index + 1} / {data.length}
      </div>
    </>
  );
}
