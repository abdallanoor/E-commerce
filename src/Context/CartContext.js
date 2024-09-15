<<<<<<< HEAD
<<<<<<< HEAD
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { userContext } from "./UserContext";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  const [headers, setHeader] = useState(null);
  const [cartDetails, setCartDetails] = useState([]);
  const [cartId, setCartId] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  let { userToken } = useContext(userContext);

  function assignHeader() {
    setHeader({ token: localStorage.getItem("userToken") });
  }

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
  //get cart
  async function getCart() {
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers,
      })
      .catch((err) => err);
    setCartDetails(data);
    setCartId(data?.data._id);
  }

  useEffect(() => {
    assignHeader();
    if (userToken) {
      getCart();
    }
  }, [userToken]);

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
        cartDetails,
        setCartDetails,
        getCart,
        assignHeader,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
=======
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { userContext } from "./UserContext";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  const [headers, setHeader] = useState(null);
  const [cartDetails, setCartDetails] = useState([]);
  const [cartId, setCartId] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  let { userToken } = useContext(userContext);

  function assignHeader() {
    setHeader({ token: localStorage.getItem("userToken") });
  }

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
  //get cart
  async function getCart() {
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers,
      })
      .catch((err) => err);
    setCartDetails(data);
    setCartId(data?.data._id);
  }

  useEffect(() => {
    assignHeader();
    if (userToken) {
      getCart();
    }
  }, [userToken]);

  return (
    <cartContext.Provider
      value={{
        addToCart,
        removeCart,
        increaseItemQuantity,
        updateCart,
        reduceItemQuantity,
        onlinePayment,
        cashPayment,
        cartId,
        isOpen,
        openCart,
        closeCart,
        cartDetails,
        setCartDetails,
        getCart,
        assignHeader,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
<<<<<<< HEAD
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
