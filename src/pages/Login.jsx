import Input from "../components/Input";
import Button from "../components/Button";
import inputImg from "../assets/image.png";
import styles from "./Login.module.css";

export default function Login() {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };
  return (

    <div className={styles.container}>
      <img src={inputImg} alt="background" className={styles.backgroundImage} />
      <div className={styles.formContainer}>
        <form>
          <h1>LOG IN</h1>
          <div className={styles.divider}></div>
          <Input type="text" placeholder="Email" name="email"/>
          <Input type="password" placeholder="Password" name="password"/>
          <Button text= "Enter" onClick={handleButtonClick} />
        </form>
      </div>
    </div>
  );
}
