import React, { useState, useContext, use } from "react";
import "../login/login.css";
import "../signup/signup.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../../api/Api";

const Signup = () => {
  const navigate = useNavigate();
  const [disabled, setIsDisabled] = useState(true);
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setIsDisabled(
      !(
        input.fullName &&
        input.email &&
        input.username &&
        input.password &&
        input.confirmPassword
      )
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { fullName, email, username, password, confirmPassword } = input;
    if (password !== confirmPassword) {
      toast.error("password does not match!");
      return;
    }

    try {
      await userSignUp(
        fullName,
        email,
        username,
        password,
        confirmPassword,
        navigate
      );
      if (success) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      setIsDisabled(false);
    }
  };
  return (
    <main className="signupnmain">
      <Toaster />
      <section className="signupcontainer">
        <div className="signuptextconatiner">
          <span className="signuplogo">Signup</span>
          <p className="access">Create your account to get full access</p>
        </div>
        <form className="signupform" onSubmit={handleSignup}>
          <div className="inputcontainer">
            <h2 className="label">Full Name</h2>
            <input
              className="logininput"
              type="fullName"
              name="fullName"
              value={input.fullName}
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
            <h2 className="label">Username</h2>
            <input
              className="logininput"
              type="username"
              name="username"
              value={input.username}
              placeholder="Enter Username"
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
              name="confirmPassword"
              type="password"
              value={input.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="register">
            <span className="registeraccount">
              Already have an account?
              <p className="signup" onClick={() => navigate("/login")}>
                Login
              </p>
              here
            </span>
            <button
              className="loginbtn"
              type="submit"
              onClick={() => navigate("/verify")}
              disabled={disabled}
              style={{ backgroundColor: disabled ? "#b8bab8" : "#88c8bc" }}
            >
              Signup
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
