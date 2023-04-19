import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/form/FormContainer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db, auth } from "../firebase.js";
import { getDatabase, ref, set } from "firebase/database";
import { AuthContext } from "../store/auth-contex";
import { Navigate } from "react-router-dom";

const SignUpForm = () => {
  const authCtx = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState(null);
  const userNameRef = useRef();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!userNameRef.current.value.trim()) {
      setSignUpError("Please enter a username");
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

      authCtx.login();
    } catch (error) {
      console.error(error);
      setSignUpError("Incorrect email or password. Please try again.");
    }
  };
  if (authCtx.isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <FormContainer>
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
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
        <div className="text-center mt-3">
          <span>Already have an account?</span> <Link to="/login">Login</Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
