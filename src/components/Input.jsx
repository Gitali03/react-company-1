import PropTypes from "prop-types";
import styles from "./input.module.css";

export default function Input({ type, placeholder, name, required = false }) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
