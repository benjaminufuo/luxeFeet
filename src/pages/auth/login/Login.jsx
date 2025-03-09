import React, { useContext, useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../global/Context";

const Login = () => {
  const navigate = useNavigate();
  const { saveUser } = useContext(UserContext);
  const [ischecked, setIschecked] = useState("");
  const [input, setInput] = useState({
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(input);
    console.log("submit succesful", input);
  };

  return (
    <main className="loginmain">
      <section className="logincontainer">
        <div className="logintextconatiner">
          <span className="loginlogo">Login</span>
          <p className="welcome">Enter Login details to get access</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputcontainer">
            <h2 className="label">Username or Email Address</h2>
            <input
              className="logininput"
              placeholder="Username / Email address"
              name="contact"
              type="contact"
              value={input.contact}
              onChange={handleChange}
            />
          </div>
          <div className="inputcontainer">
            <h2 className="label">Password</h2>
            <input
              className="logininput"
              placeholder="Enter password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <div className="checkforgetpassword">
            <div className="checkbox">
              <input
                type="checkbox"
                className="checkboxtic"
                checked={ischecked}
                onChange={() => setIschecked((prev) => !prev)}
              />
              <h2 className="checklabel">Keep me logged in</h2>
            </div>

            <span className="forgetpassword">Forgot Password?</span>
          </div>
          <div className="createaccount">
            <span className="registeraccount">
              Don’t have an account?{" "}
              <p className="signup" onClick={() => navigate("/signup")}>
                Sign Up
              </p>
              here
            </span>
            <button className="loginbtn" onClick={() => navigate("/")}>
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
