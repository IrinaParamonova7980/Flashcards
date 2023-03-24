import styles from "./header.module.scss";
import logo from "./../assets/logo.png";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo_block}>
          <img src={logo} className={styles.logo} alt={"FleshCards"}></img>
          <div className={styles.name}>FleshCards</div>
        </div>
        <div className={styles.button_block}>
          <button className={styles.enter}>Войти</button>
          <button className={styles.registration}>Регистрация</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
