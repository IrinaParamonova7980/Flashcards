import { Link } from "react-router-dom";
import styles from "./nomatch.module.scss";
import noMatch from "../assets/noMatch.jpg";

export default function NoMatch() {
  return (
    <div className={styles.container}>
      <img src={noMatch} className={styles.image} alt="Oooops..."></img>
      <div>
        <h1 className={styles.header}>404</h1>
        <p className={styles.notfaund}>PAGE NOT FOUND</p>
        <Link to="/" className={styles.link}>
          Come back Home
        </Link>
      </div>
    </div>
  );
}
