import React, { useState } from "react";
import styles from "./flippingCards.module.scss";
//import WordCart from "../wordCard/WordCard";
import data from "../../data.json";
import { useEffect } from "react";

export default function FlippingCards() {
  const [card, setCard] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = card.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, card]);

  return (
    <div className={styles.section}>
      <div className={styles.section_center}>
        <button
          className={styles.prev}
          onClick={() => setIndex((prevState) => prevState - 1)}
        >
          Назад
        </button>

        {card.map((person, personIndex) => {
          const { id, english, transcription, russian, tags } = person;

          let position = "styles.nextSlide";
          if (personIndex === index) {
            position = "styles.activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === card.length - 1)
          ) {
            position = "styles.lastSlide";
          }

          return (
            <article className={position} key={id}>
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
          className={styles.next}
          onClick={() => setIndex((prevState) => prevState + 1)}
        >
          Вперед
        </button>
      </div>
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
