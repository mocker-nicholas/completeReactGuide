import React from "react";
import Card from "./Card.js";
import Button from "./Button.js";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClearError}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClearError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
