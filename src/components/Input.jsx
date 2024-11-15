import PropTypes from 'prop-types';
import styles from "./input.module.css";

export default function Input({ type, placeholder, name }) {
  return (
    <div>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,      
  placeholder: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired       
};
