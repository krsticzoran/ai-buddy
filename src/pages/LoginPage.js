import React from "react";
import { Link } from "react-router-dom";

import FormContainer from "../components/form/FormContainer";

const LoginPage = () => {
  return (
    <FormContainer>
      <h5 className="card-title mb-4">Login</h5>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="text-center mt-3">
          <span>Don't have an account yet?</span>{" "}
          <Link to="/signup">Sign up now!</Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;
