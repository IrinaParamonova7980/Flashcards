import styles from "./header.module.scss";
import logo from "./../assets/logo.png";
import Button from "../common/button/Button";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo_block}>
        <img src={logo} className={styles.logo} alt={"FleshCards"}></img>
        <div className={styles.name}>FleshCards</div>
      </div>
      <div className={styles.button_block}>
        <Button button="Войти" buttonStyle={styles.enter}></Button>
        <Button button="Регистрация" buttonStyle={styles.registration}></Button>
      </div>
    </div>
  );
}

export default Header;
