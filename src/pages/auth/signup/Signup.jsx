import React, { useState } from "react";
import "../login/login.css";
import "../signup/signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    contact: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login succesfully", input);
  };
  return (
    <main className="signupnmain">
      <section className="signupcontainer">
        <div className="signuptextconatiner">
          <span className="signuplogo">Signup</span>
          <p className="access">Create your account to get full access</p>
        </div>
        <form className="signupform" onSubmit={handleSubmit}>
          <div className="inputcontainer">
            <h2 className="label">Full Name</h2>
            <input
              className="logininput"
              type="contact"
              name="contact"
              value={input.contact}
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>
          <div className="inputcontainer">
            <h2 className="label">Email Address</h2>
            <input
              className="logininput"
              placeholder="Enter email address"
              name="email"
              type="email"
              value={input.email}
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
          <div className="inputcontainer">
            <h2 className="label">Confirm Password</h2>
            <input
              className="logininput"
              placeholder="Confirm password"
              name="confirmpassword"
              type="password"
              value={input.confirmpassword}
              onChange={handleChange}
            />
          </div>

          <div className="register">
            <span className="registeraccount">
              Already have an account?\
              <p className="signup" onClick={() => navigate("/login")}>
                Login
              </p>
              here
            </span>
            <button className="loginbtn" onClick={() => navigate("/login")}>
              Signup
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
