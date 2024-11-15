import PropTypes from "prop-types";
import styles from "./button.module.css";
export default function Button({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.button} type="submit">
        {text}
      </button>
    </div>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
