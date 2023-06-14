import styles from "./header.module.scss";
import logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.link}>
        <div className={styles.logo_block}>
          <img src={logo} className={styles.logo} alt={"FlashCards"}></img>
          <div className={styles.name}>FlashCards</div>
        </div>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.links_block}>
          <li>
            <Link to="/" className={styles.text}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/game" className={styles.text}>
              Учить
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
