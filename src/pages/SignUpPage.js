import React, { useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './page.css';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../firebase.js';
import { ref, set } from 'firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import LoginFormContainer from '../components/loginFormContainer/LoginFormContainer.js';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [signUpError, setSignUpError] = useState(null);
  const userNameRef = useRef();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!userNameRef.current.value.trim()) {
      setSignUpError('Please enter a username');
      return;
    }

    const { email, password, username } = event.target.elements;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const uid = userCredential.user.uid;

      await set(ref(db, `users/${uid}`), {
        email: email.value,
        username: username.value,
      });
      dispatch(authActions.login(uid));
    } catch (error) {
      console.error(error);
      setSignUpError('Incorrect email or password. Please try again.');
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <div className="login-signup">
      <LoginFormContainer>
        <h5 className="card-title mb-4">Sign Up</h5>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              ref={userNameRef}
              type="text"
              className="form-control"
              id="username"
              maxLength={15}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          {signUpError && (
            <div className="alert alert-danger" role="alert">
              {signUpError}
            </div>
          )}
          <div className="d-grid gap-2">
            <button type="submit" className="btn button-login-color">
              Sign up
            </button>
          </div>
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link className="link-login-color" to="/login">
              Login now!
            </Link>
          </div>
        </form>
      </LoginFormContainer>
    </div>
  );
};

export default SignUpForm;
