import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext = createContext();

let headers = { token: localStorage.getItem("userToken") };
async function addToCart(productId) {
  let response = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      productId,
    },
    {
      headers,
    }
  );
  return response;
}
async function getLoggedUserCart() {
  let response = await axios
    .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers,
    })
    .catch((err) => err);
  return response;
}
async function removeCart(productId) {
  let response = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers,
    }
  );
  return response;
}
async function updateCart(productId, count) {
  let response = await axios.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      count,
    },
    {
      headers,
    }
  );
  return response;
}
async function removeAllCarts() {
  let response = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers,
    }
  );
  return response;
}
async function onlinePayment(cartId, params, values) {
  let response = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${params}`,
    {
      values,
    },
    {
      headers,
    }
  );
  return response;
}
//
async function getUserOrders() {
  let response = await axios
    .get(
      "https://ecommerce.routemisr.com/api/v1/orders/user/656525c0a15dbd4a0b658547"
    )
    .catch((err) => err);
  return response.data;
}
export default function CartContextProvider(props) {
  const [cartId, setCartId] = useState("");

  async function getCartId() {
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .catch((err) => err);
    setCartId(data?.data._id);
  }

  useEffect(() => {
    getCartId();
  }, []);

  return (
    <cartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeCart,
        updateCart,
        removeAllCarts,
        onlinePayment,
        cartId,
        getUserOrders,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
