import React from "react";
import "./Signin.css";
function Signin() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ marginBottom: "10px", color: "green" }}>Sign In Page</h2>
        <form className="login-form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">OR</div>
        <button className="facebook-login">Log in with Facebook</button>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </div>
      <div className="signup-box">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default Signin;
