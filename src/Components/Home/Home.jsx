import React, { useEffect, useContext, useState } from "react";
// import Style from './Home.module.css'
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "./../MainSlider/MainSlider";
import { Helmet } from "react-helmet";
import { userContext } from "./../../Context/UserContext";
import { cartContext } from "./../../Context/CartContext";
import axios from "axios";

export default function Home() {
  let { setCartDetails, cartDetails } = useContext(cartContext);
  let headers = { token: localStorage.getItem("userToken") };

  let { userToken, userId } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      async function getCart() {
        let { data } = await axios
          .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
          .catch((err) => err);
        setCartDetails(data);
      }
      getCart();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Pixel Srote</title>
      </Helmet>

      {/* <MainSlider /> */}
      {/* <CategorySlider /> */}
      <FeaturedProducts />
    </>
  );
}
