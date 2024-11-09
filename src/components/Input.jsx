import styles from "./input.module.css";
export default function Input() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        name="password"
      />
    </div>
  );
}
