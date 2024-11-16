import Input from "../components/Input";
import Button from "../components/Button";
import inputImg from "../assets/image.png";
import styles from "./Login.module.css";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    alert(`Login information email: ${email}, pwd: ${password}`);
  };

  return (
    <div className={styles.container}>
      <img src={inputImg} alt="background" className={styles.backgroundImage} />
      <div  className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>LOG IN</h1>
          <div className={styles.divider}></div>
          <Input required type="email" placeholder="Email" name="email" />
          <Input
            required
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button type="submit" text="Enter" />
        </form>
      </div>
    </div>
  );
}
