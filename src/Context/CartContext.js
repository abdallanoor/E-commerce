import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { userContext } from "./UserContext";

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
async function removeCart(productId) {
  let response = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers,
    }
  );
  return response;
}
async function increaseItemQuantity(productId, count) {
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
async function reduceItemQuantity(productId, count) {
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
async function cashPayment(cartId, values) {
  let response = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
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

export default function CartContextProvider(props) {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartId, setCartId] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // const getCart = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://ecommerce.routemisr.com/api/v1/cart",
  //       {
  //         headers,
  //       }
  //     );
  //     setCartDetails(data);
  //   } catch (error) {
  //     if (error) {
  //       setCartDetails([]);
  //     }
  //   }
  // };

  async function getCartId() {
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .catch((err) => err);
    setCartId(data?.data._id);
  }
  //get cart
  async function getCart() {
    let response = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .catch((err) => err);
    setCartDetails(response?.data);
  }
  let { userToken } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getCart();
      getCartId();
    }
  }, []);
  return (
    <cartContext.Provider
      value={{
        addToCart,
        removeCart,
        increaseItemQuantity,
        updateCart,
        reduceItemQuantity,
        removeAllCarts,
        onlinePayment,
        cashPayment,
        cartId,
        isOpen,
        openCart,
        closeCart,
        getCartId,
        cartDetails,
        setCartDetails,
        getCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
