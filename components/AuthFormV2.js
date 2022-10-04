import React, { useState, createContext } from "react";
import useInput from "../hooks/use-input";
import LoadingSpinner from "./LoadingSpinner";
import { app } from "../firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

function AuthFormV2() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) => value.trim() !== "" && value.length < 25 && value.length > 8
  );

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.length < 25);

  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  function formSignUpHandler2(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoggedin(true);
        setIsLoading(false)
        resetEmailInput()
        resetPasswordInput()
        console.log(email, 'User Signed Up');
      })
      .catch((error) => {
        //Not signed in
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoggedin(false);
        setIsLoading(false)
        resetEmailInput()
        resetPasswordInput()
        console.log(errorCode, errorMessage, 'User not signed up');
      });
  }

  function formLoginHandler2(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoggedin(true);
        resetEmailInput()
        resetPasswordInput()
        const idT = user.getIdToken()
        console.log(idT, email, ' user logged in');
      })
      .catch((error) => {
        //Not signed in
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoggedin(false);
        resetEmailInput()
        resetPasswordInput()
        console.log(errorCode, errorMessage, 'user not logged in');
      });
  }

  function formLogoutHandler(event) {
      event.preventDefault()
      signOut(auth).then(() => {
        // Sign-out successful.
        setIsLoggedin(false)
        console.log('user logged out')
      }).catch((error) => {
        // An error happened.
        console.log('user not logged out')
      });
      
  }

  return (
    <div>
      <form>
        <div>
          <h4>Login or Signup!</h4>
          <label>Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            className="fixed-input"
          />
          {emailInputHasError && (
            <label className="error">Email not valid</label>
          )}
          <br />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            className="fixed-input"
          />
          <br />
          {passwordInputHasError && (
            <label className="error">Password not valid</label>
          )}
          <br />
        </div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && !isLoggedIn && (
          <button
            className="button-modal"
            onClick={formSignUpHandler2}
            disabled={!formIsValid}
          >
            Sign Up
          </button>
        )}
        {!isLoading && !isLoggedIn && (
          <button
            className="button-modal"
            onClick={formLoginHandler2}
            disabled={!formIsValid}
          >
            Login
          </button>
        )}
        <br />
        {isLoggedIn && <button className="button-modal" onClick={formLogoutHandler}>Logout</button>}
      </form>
    </div>
  );
}

export default AuthFormV2;
