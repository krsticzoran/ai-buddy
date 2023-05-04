import React from 'react';

const LoginFormContainer = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
