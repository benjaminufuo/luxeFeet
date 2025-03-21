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
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }
  return null
}

// Create axios instance with authorization header
const api = axios.create({
  baseURL: baseUrl,
})

// Add request interceptor to include token in requests
api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = Bearer ${token}
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Women's products API functions
export const getAllWomenProducts = async () => {
  try {
    const response = await api.get("/getAllWomen")
    return response.data.data
  } catch (error) {
    console.error("Get all women products error:", error.response?.data || error.message)
    toast.error("Failed to fetch products")
    throw error
  }
}

export const getWomenProduct = async (id) => {
  try {
    const response = await api.get(`/getOneWomen/${id}`)
    return response.data.data
  } catch (error) {
    console.error("Get women product error:", error.response?.data || error.message)
    toast.error("Failed to fetch product details")
    throw error
  }
}

export const createWomenProduct = async (productData) => {
  try {
    const response = await api.post("/createWomen", productData)
    toast.success("Product created successfully")
    return response.data.data
  } catch (error) {
    console.error("Create women product error:", error.response?.data || error.message)
    toast.error("Failed to create product")
    throw error
  }
}

export const updateWomenProduct = async (id, productData) => {
  try {
    const response = await api.put(`/updateWomenProduct/${id}, productData`)
    toast.success("Product updated successfully")
    return response.data.data
  } catch (error) {
    console.error("Update women product error:", error.response?.data || error.message)
    toast.error("Failed to update product")
    throw error
  }
}

export const deleteWomenProduct = async (id) => {
  try {
    const response = await api.delete(`/deleteWomenProduct/${id}`)
    toast.success("Product deleted successfully")
    return response.data.data
  } catch (error) {
    console.error("Delete women product error:", error.response?.data || error.message)
    toast.error("Failed to delete product")
    throw error
  }
}