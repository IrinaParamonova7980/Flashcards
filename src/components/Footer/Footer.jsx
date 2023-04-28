import styles from "./footer.module.scss";
import logo from "./../assets/logo.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_block}>
        <img src={logo} className={styles.logo} alt={"FleshCards"}></img>
        <div className={styles.name}>FleshCards</div>
      </div>
      <div className={styles.links_block}>
        <a href="" className={styles.text}>
          Учить
        </a>        
      </div>
    </div>
  );
}


