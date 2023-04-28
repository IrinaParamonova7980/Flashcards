import styles from "./footer.module.scss";
import logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_block}>
        <img src={logo} className={styles.logo} alt={"FleshCards"}></img>
        <div className={styles.name}>FleshCards</div>
      </div>
      <div>
        <Link to="/game" className={styles.text}>
          Учить
        </Link>
      </div>
    </div>
  );
}
