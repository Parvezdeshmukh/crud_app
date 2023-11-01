import React from "react";

import { Link } from "react-router-dom";
import "../login/Login.css";

function Login() {




  return (
    <>
      <div className="login-page">
        <div className="form-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="form-header">
            <h2>Login</h2>
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <Link to="/ReadTable">
              <div className="d-grid">
                <button className="btn btn-primary " type="submit">
                  Login
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
