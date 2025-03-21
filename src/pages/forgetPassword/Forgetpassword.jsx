import React, { useEffect, useState } from "react";
import "./forgetPassword.css";
import { FaKeycdn } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { forgetPassword } from "../../api/Api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const Forgetpassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "" });
  const [updateMessage, setUpdateMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleForgetPassword = async (e) => {
    e.preventDefault();

    if (!input.email) {
      toast.error("Please enter your email");
      return;
    }
    setUpdateMessage("");
    await forgetPassword(setUpdateMessage, input.email);

    if (updateMessage) {
      toast.success(updateMessage);
    }
    setTimeout(() => {
      navigate("/resetpassword");
    }, 3000);
  };

  return (
    <main className="forgetmain">
      <form onSubmit={handleForgetPassword} className="forgetcontainer">
        <div className="forgeticon">
          <FaKeycdn className="fakeycdnicon" />
        </div>
        <div className="forgettext">
          <h2>Forget password?</h2>
          <p>No wories we will send you reset instructions</p>
        </div>
        <div className="forgetinputcontainer">
          <label className="forgetlabel">Email</label>
          <input
            className="forgetinput"
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
        </div>
        <div className="btncontainer">
          <button>Reset password</button>
        </div>
        <div className="back">
          <IoIosArrowRoundBack
            className="backicon"
            onClick={() => navigate("/login")}
          />
          <p>Back to login</p>
        </div>
      </form>
    </main>
  );
};

export default Forgetpassword;
