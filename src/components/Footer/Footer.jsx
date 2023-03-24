import styles from "./footer.module.scss";
import logo from "./../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo_block}>
          <img src={logo} className={styles.logo} alt={"FleshCards"}></img>
          <div className={styles.name}>FleshCards</div>
        </div>
        <div className={styles.links_block}>
          <div className={styles.text}>
            Учить
          </div>
          <div className={styles.text}>
            Добавить слова
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
