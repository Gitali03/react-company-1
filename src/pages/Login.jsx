// src/pages/Login.jsx
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import inputImg from "../assets/image.png";
import styles from "./Login.module.css"; 

export default function Login() {
  return (
    <div className={styles.container}>
      <img src={inputImg} alt="background" className={styles.backgroundImage} />
      <div className={styles.formContainer}>
        <form>
          <h1>LOG IN</h1>
          <div className={styles.divider}></div>
          <Input />
          <Button />
        </form>
      </div>
    </div>
  );
}
