import React, { useContext, useEffect, useState } from "react";
import "../login/login.css";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../../global/Context";
import toast, { Toaster } from "react-hot-toast";
import { userLogIn } from "../../../api/Api";

const Login = () => {
  const navigate = useNavigate();
  const [ischecked, setIschecked] = useState("");
  const [disabled, setIsDisabled] = useState(true);
  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
  });
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Email must be between 6 and 60 characters";
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
    setLoginError((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setIsDisabled(!(input.email && input.password));
    validateField(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      toast.error("Enter your email and password");
      return;
    }
    try {
      const response = await userLogIn(input, navigate);
      if (!response.data.isVerified) {
        toast.error("Verify your email to log in");
        return;
      }
      toast.success("Login successful redirecting....");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Login failed, please try again.");
      console.error("Login error:", error);
    }
  };
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  useEffect(() => {
    const { email, password } = input;
    if (
      email.trim() !== "" &&
      validateEmail(email) &&
      password.trim() !== "" &&
      password.length >= 6
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [input]);

  return (
    <main className="loginmain">
      <Toaster />
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
              name="email"
              type="email"
              value={input.email}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {loginError.email && <p className="error">{loginError.email}</p>}
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
            {loginError.password && (
              <p className="error">{loginError.password}</p>
            )}
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
            <button
              className="loginbtn"
              type="submit"
              disabled={disabled}
              style={{ backgroundColor: disabled ? "#b8bab8" : "#88c8bc" }}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
