import React, { useState, useContext, use, useEffect } from "react";
import "../login/login.css";
import "../signup/signup.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../../api/Api";

const Signup = () => {
  const navigate = useNavigate();
  const [disabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full name is required";
      } else {
        const names = value.split(" ");
        for (let i = 0; i < names.length; i++) {
          if (names[i].charAt(0) !== names[i].charAt(0).toUpperCase()) {
            error = "Each name must start with a capital letter";
            break;
          }
        }
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Email should be between 6 and 60 characters";
      } else if (!validateEmail(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Password dhould be between 6 and 60 characters";
      }
    }

    if (name === "confirmPassword") {
      if (value !== input.password) {
        error = "Passwords do not match";
      }
    }

    if (name === "username") {
      if (!value.trim()) {
        error = "Username is required";
      } else if (value.length < 6 || value.length > 20) {
        error = "Username should be between 6 and 20 characters";
      }
    }

    setErrorMessage((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
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
        navigate("/verify");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  useEffect(() => {
    const { fullName, email, username, password, confirmPassword } = input;
    if (
      fullName.trim() !== "" &&
      validateEmail(email) &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      password.length >= 6 &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [input]);

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
              type="text"
              name="fullName"
              value={input.fullName}
              placeholder="Enter full name"
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errorMessage.fullName && (
              <p className="error">{errorMessage.fullName}</p>
            )}
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
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errorMessage.email && (
              <p className="error">{errorMessage.email}</p>
            )}
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
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errorMessage.username && (
              <p className="error">{errorMessage.username}</p>
            )}
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
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errorMessage.password && (
              <p className="error">{errorMessage.password}</p>
            )}
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
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errorMessage.confirmPassword && (
              <p className="error">{errorMessage.confirmPassword}</p>
            )}
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
