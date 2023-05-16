import styles from "./button.module.scss";
import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return (
    <button
      className={`${styles.button} ${props.buttonstyle}`}
      {...props}
      ref={ref}
    >
      {props.button}
    </button>
  );
});

export default Button;
