import React, { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

function ContactForm() {
  //desctructuring the keys from the useInput return object
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: number,
    isValid: numberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangeHandler,
    blurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.length < 25 && EmailValidator === true
  );

  let formIsValid = false;
  if (nameIsValid && numberIsValid && messageIsValid && emailIsValid) {
    formIsValid = true;
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetEmailInput();
    resetNameInput();
    resetNumberInput();
    resetMessageInput();
  }

  function EmailValidator(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log("email correct:", email);
      return true;
    } else {
      console.log("email error:", email);
      return false;
    }
  }

  const styleObj = {
    textAlign: "left",
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <label className="error">Name must not be empty</label>
        )}
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && <label className="error">Email not valid</label>}
        <br />
        <label>Number:</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={number}
          onBlur={numberBlurHandler}
          onChange={numberChangeHandler}
        />
        {numberInputHasError && (
          <label className="error">Number must not be empty</label>
        )}
        <br />
        <label>Message:</label>
        <br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onBlur={messageBlurHandler}
          onChange={messageChangeHandler}
        ></textarea>
        <br />
        {messageInputHasError && (
          <label className="error">Message must not be empty</label>
        )}
        <div>
          <button
            disabled={!formIsValid}
            type="submit"
            id="submit"
            onClick={formSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
