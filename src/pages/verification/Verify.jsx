import React, { useState } from "react";
import "./verify.css";
import { useNavigate } from "react-router";

import toast, { Toaster } from "react-hot-toast";

const Verify = () => {
  const navigate = useNavigate();

  return (
    <div className="verifymain">
      <Toaster />
      <div className="verify">
        <h1 className="verifyH1">YOU NEED TO VERIFY YOUR EMAIL!!!</h1>
        <h3> Click here to verify your email</h3>

        <button className="verifyBtn" onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Verify;
