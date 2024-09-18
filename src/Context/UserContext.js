import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export let userContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    }
  }, [userToken]);

  return (
    <userContext.Provider
      value={{
        userToken,
        setUserToken,
        userId,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
