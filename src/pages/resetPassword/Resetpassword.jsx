import React, { useState, useEffect } from "react";
import "./resetPassword.css";
import { RiDoorLockLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { resetPassword } from "../../api/Api";
import { useNavigate } from "react-router";

const Resetpassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [updateMessage, setUpdateMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!input.password || !input.confirmPassword) {
      toast.error("Please enter your password");
      return;
    }
    setUpdateMessage("");
    await resetPassword(
      input.password,
      input.confirmPassword,

      setUpdateMessage
    );

    if (success) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <main className="resetmain">
      <form onSubmit={handleResetPassword} className="resercontainer">
        <div className="resetticon">
          <RiDoorLockLine className="RiDoorLockLineicon" />
        </div>
        <div className="resettext">
          <h2>Forget password?</h2>
          <p>Enter new password to resetyour password</p>
        </div>
        <div className="resetinputcontainer">
          <label className="resetlabel">Password</label>
          <input
            className="resetinput"
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
        </div>
        <div className="resetinputcontainer">
          <label className="resetlabel">Retype password</label>
          <input
            className="resetinput"
            placeholder="Retype password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={input.forgetPassword}
          />
        </div>
        <div className="resetbtncontainer">
          <button>Reset password</button>
        </div>
      </form>
    </main>
  );
};

export default Resetpassword;
