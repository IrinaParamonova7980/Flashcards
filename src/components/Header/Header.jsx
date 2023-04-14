import styles from "./header.module.scss";
import logo from "./../assets/logo.svg";
import Button from "../common/button/Button";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo_block}>
        <img src={logo} className={styles.logo} alt={"FlashCards"}></img>
        <div className={styles.name}>FlashCards</div>
      </div>
      <div className={styles.button_block}>
        <Button button="Войти" buttonstyle={styles.enter}></Button>
        <Button button="Регистрация" buttonstyle={styles.registration}></Button>
      </div>
    </div>
  );
}

export default Header;
