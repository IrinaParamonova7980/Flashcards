import styles from "./header.module.scss";
import logo from "./../assets/logo.svg";
import Button from "../common/button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
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
      <div className={styles.button_block}>
        <Link to="*">
          <Button button="Войти" buttonstyle={styles.enter}></Button>
        </Link>
        <Link to="*">
          <Button
            button="Регистрация"
            buttonstyle={styles.registration}
          ></Button>
        </Link>
      </div>
    </div>
  );
}
