import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { signinService } from "../../services/signinService";
function Signin({ setToken }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="h4 text-primary" style={{ marginBottom: "10px" }}>
          Sign In Page
        </h2>
        <form className="login-form">
          <input ref={emailRef} type="text" placeholder="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button
            type="button"
            onClick={() => {
              var user = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
              };
              signinService(user, navigate, setToken);
            }}
          >
            Sign In
          </button>
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
