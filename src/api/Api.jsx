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
    toast.success("sign up successful");
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
    navigate("/");
    console.log(response);
  } catch (error) {
    console.log("login error", error);
    toast.error("Failed to log in");
  }
};

export const getAllProduct = async (setState) => {
  try {
    const response = await axios.get(`${baseUrl}/getAllProducts`);
    setState(response.data.data);
  } catch (error) {
    console.log("unable to get", error);
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
