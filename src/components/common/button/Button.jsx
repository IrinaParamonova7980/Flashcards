import styles from "./button.module.scss";

export default function Button(props) {
  return (
    <button className={`${styles.button} ${props.buttonstyle}`} {...props} >
      {props.button}
    </button>
  );
}
