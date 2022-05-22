// import { useState, useRef } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlueHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlueHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlueHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstNameValue, lastNameValue, emailValue);
    console.log("submit");
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={
            !firstNameHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="first"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlueHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">Please Enter a first name</p>
          )}
        </div>
        <div
          className={
            !lastNameHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlueHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a last name</p>
          )}
        </div>
      </div>
      <div className={!emailHasError ? "form-control" : "form-control invalid"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlueHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
