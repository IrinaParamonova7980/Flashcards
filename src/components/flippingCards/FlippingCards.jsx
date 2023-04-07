import React, { useState } from "react";
import styles from "./flippingCards.module.scss";
//import WordCart from "../wordCard/WordCard";
import data from "../../data.json";
import { useEffect } from "react";

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
            <div>
              <h2>{english}</h2>
              <div>{transcription}</div>
              <div>
                <h2>{russian}</h2>
              </div>
              <div>{tags}</div>
            </div>
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

// export default function FlippingCards(props) {
//   const [count, setCount] = useState(0);
//   const { ...itemProps } = props;

//    return (
//     <>
//       <div className={styles.container}>
//         <button onClick={() => setCount(count - 1)} className={styles.button}>
//           Назад
//         </button>
//         <div>
//           {data.map((data) => (
//             <WordCart key={data.id} {...itemProps}>
//               english={data.english}
//               transcription={data.transcription}
//               russian={data.russian}
//               tags={data.tags}
//             </WordCart>
//           ))}
//         </div>
//         <button onClick={() => setCount(count + 1)} className={styles.button}>
//           Вперед
//         </button>
//       </div>
//     </>
//   );
// }

// ||(index === 0 && cardIndex === card.length - 1)
