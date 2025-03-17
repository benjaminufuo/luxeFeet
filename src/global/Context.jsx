import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to parse user data", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const saveUser = (userDetails) => {
    if (userDetails && typeof userDetails === "object") {
      localStorage.setItem("user", JSON.stringify(userDetails));
      setUser(userDetails);
    } else {
      console.error("Invalid user details", userDetails);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, saveUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
