import styles from "./error.module.scss";
import error from "../assets/error.svg";

export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Похоже, произошла ошибка...</h2>
      <img src={error} className={styles.image} alt="Ошибка" />
    </div>
  );
}
