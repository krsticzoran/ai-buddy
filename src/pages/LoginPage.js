import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FormContainer from "../components/form/FormContainer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db, auth } from "../firebase.js";
import { AuthContext } from "../store/auth-contex";
import "./page.css";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const uid = userCredential.user.uid;
      authCtx.addId(uid);
      authCtx.login();
    } catch (error) {
      setLoginError(error.message);
    }
  };

  if (authCtx.isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <FormContainer>
      <h5 className="card-title mb-4">Login</h5>
      <form onSubmit={handleLogin}>
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

        {loginError && (
          <div className="alert alert-danger" role="alert">
            {"Incorrect email or password. Please try again."}
          </div>
        )}

        <div className="d-grid gap-2">
          <button type="submit" className="btn  button-login-color">
            Login
          </button>
        </div>
        <div className="text-center mt-3">
          <span>Don't have an account yet?</span>{" "}
          <Link className="link-login-color" to="/signup">
            Sign up now!
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;
