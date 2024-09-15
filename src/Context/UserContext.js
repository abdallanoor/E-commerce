<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export let userContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState("");

  async function getUserOrders(userId) {
    let response = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
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
<<<<<<< HEAD
=======
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export let userContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState("");

  async function getUserOrders(userId) {
    let response = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
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
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
