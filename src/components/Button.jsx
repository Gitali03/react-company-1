import PropTypes from "prop-types";
import styles from "./button.module.css";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};
