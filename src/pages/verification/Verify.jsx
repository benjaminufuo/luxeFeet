import React, { useState } from "react";
import "./verify.css";
import { useNavigate } from "react-router";
import { verifyUser } from "../../api/Api";
import toast, { Toaster } from "react-hot-toast";

const Verify = () => {
  const navigate = useNavigate();

  const [disabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailVerify = async () => {
    setIsLoading(true);
    try {
      await verifyUser();
      toast.success("Email verified successfully");
    } catch (error) {
      toast.error("failed to verify, try again");
      setIsLoading(false);
    }
  };
  return (
    <div className="verifymain">
      <Toaster />
      <div className="verify">
        <h1 className="verifyH1">YOU NEED TO VERIFY YOUR EMAIL!!!</h1>
        <h3> Click here to verify your email</h3>

        <button
          className="verifyBtn"
          onClick={handleEmailVerify}
          disabled={isLoading}
        >
          verify
        </button>
        {isLoading ? "Verifying" : "Verify email"}

        <button
          className="verifyBtn"
          onClick={() => navigate("/login")}
          disabled={disabled}
          style={{ backgroundColor: disabled ? "#b8bab8" : "#88c8bc" }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Verify;
