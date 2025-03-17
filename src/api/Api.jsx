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
    toast.error("failed to log inb ");
  }
};
