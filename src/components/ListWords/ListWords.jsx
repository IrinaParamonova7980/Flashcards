import styles from "./listWords.module.scss";
//import data from "../../data.json";
import TableRow from "../tableRow/TableRow";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";

const ListWords = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    useEffect(() => {
      wordsStore.fetchData();
    }, []);

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
              <TableRow key={item.id} {...item}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  })
);

export default ListWords;
