import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../Ui/Card.js";
import Button from "../Ui/Button.js";
import ErrorModal from "../Ui/ErrorModal.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: "Invalid Input",
        msg: "Please enter username and age",
      });
    }
    // Remember, everything from the dom is a string. We can force a conversion to a number with  a + character
    if (+enteredAge < 1) {
      return setError({
        title: "Invalid Age",
        msg: "Age must be a positve number",
      });
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => setError(null);

  return (
    <div>
      {error && (
        <ErrorModal
          onClearError={errorHandler}
          title={error.title}
          msg={error.msg}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
