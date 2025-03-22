import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://ecommerce-project-m2bb.onrender.com/api/v1";
export const userSignUp = async (
  fullName,
  email,
  username,
  password,
  confirmPassword
) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      fullName,
      email,
      username,
      password,
      confirmPassword,
    });
    toast.success("sign up successful, Check email to verify");
    console.log("this is the response ", response);
    localStorage.setItem("token", response.data);
    console.log("this is", response.data);
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    toast.error("Sign up error");
  }
};

export const userLogIn = async (input, navigate) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, input);
    const userInfo = { id: response.data._id, token: response.data.token };
    localStorage.setItem("token", response.token);
    console.log(userInfo);
    toast.success("Login successful");
    setTimeout(() => {
      navigate("/");
    }, 5000);
    console.log(response);
  } catch (error) {
    if (error.response && error.response.data) {
      if (!error.response.data.isVerified) {
        console.log("login error");
        toast.error("Failed to log in, please verify email to log in");
      }
    }
  }
};

export const forgetPassword = async (setUpdate, email) => {
  try {
    const response = await axios.post(`${baseUrl}/forget-password`, {
      email,
    });
    toast.success("Check your email to reset password");
    console.log(response);
    setUpdate(response.data.message);
    console.log(response.data);
  } catch (error) {
    console.error("Unable to send reset email", error);
    setUpdate("Failed to send reset link");
  }
};

export const resetPassword = async (
  password,
  confirmPassword,
  setUpdateMessage,
  token
) => {
  try {
    if (!token) {
      toast.error("Reset token not found. Request a new link.");
      return false;
    }
    const response = await axios.post(`${baseUrl}/reset-password/${token}`, {
      password,
      confirmPassword,
    });
    console.log(response.data);
    setUpdateMessage(response.data.message);
    toast.success("Password reset succesful");
    localStorage.removeItem("resetToken");
    return true;
  } catch (error) {
    console.log("Unable to reset password");
    setUpdateMessage("Unable to reset password");
    toast.error("Unable to reset password");
    return false;
  }
};
