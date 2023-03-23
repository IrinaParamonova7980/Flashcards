import styles from "./footer.module.scss";
import logo from "./../assets/logo.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_block}>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.name}>FleshCards</div>
      </div>
      <div className={styles.links_block}>
        <a href="" className={styles.text}>
          Учить
        </a>
        <a href="" className={styles.text}>
          Добавить слова
        </a>
      </div>
    </div>
  );
}

export default Footer;
