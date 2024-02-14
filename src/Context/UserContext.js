import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export let userContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState("");

  async function getUserOrders(userId) {
    let response = await axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
        // "https://ecommerce.routemisr.com/api/v1/orders/user/65caa53e7b9cb7ea0ffe91e3"
      )
      .catch((err) => err);
    return response?.data?.reverse();
  }

  useEffect(() => {
    if (userToken) {
      const token = localStorage.getItem("userToken");
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    }
  }, [userToken]);

  return (
    <userContext.Provider
      value={{ userToken, setUserToken, getUserOrders, userId }}
    >
      {props.children}
    </userContext.Provider>
  );
}
