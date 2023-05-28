import styles from "./loading.module.scss";
import loading from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className={styles.container}>
      <img src={loading} className={styles.image} alt="Loading..." />
    </div>
  );
}
