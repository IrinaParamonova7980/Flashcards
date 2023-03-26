import styles from "./button.module.scss";

function Button(props) {
  return <button className={`${styles.button} ${props.buttonStyle}`}>{props.button}</button>;
}

export default Button;
