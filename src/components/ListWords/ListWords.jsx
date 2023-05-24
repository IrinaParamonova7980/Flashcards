import styles from "./listWords.module.scss";
import TableRow from "../tableRow/TableRow";
import { useContext } from "react";
import { WordContext } from "../wordsContext/WordContext";

export default function ListWords() {
  const { data } = useContext(WordContext);

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
        </tbody>
      </table>
    </div>
  );
}
