import React from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/form/FormContainer";

const SignUpForm = () => {
  return (
    <FormContainer>
      <h5 className="card-title mb-4">Sign Up</h5>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
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
