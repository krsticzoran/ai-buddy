import React from "react";

const FormContainer = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
