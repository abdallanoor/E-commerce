import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
// import Style from './ProductDetails.module.css'
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import LoadingDots from "./../LoadingDots/LoadingDots";

import hat from "../../Assets/images/hat-1.avif";
import hat2 from "../../Assets/images/clothes category3.jpg";
import ImageSlider from "./ImageSlider";
import { ToastContainer } from "react-toastify";
import { userContext } from "./../../Context/UserContext";
import { toastWarning } from "./../../ToastAlerts";

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  let param = useParams();

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading, refetch } = useQuery(
    "ProductDetails",
    () => getProductDetails(param.id),
    {
      cacheTime: 1000,
      // refetchOnMount: false,
      // staleTime: 30000,
      // refetchInterval: 1000
    }
  );

  //Add To Cart
  let { addToCart, openCart, getCart } = useContext(cartContext);
  let { userToken } = useContext(userContext);

  async function addProduct(productId) {
    if (userToken) {
      setLoading(true);
      let response = await addToCart(productId);
      setLoading(false);
      openCart();
      getCart();
    } else {
      toastWarning("Login First");
    }
  }
  useEffect(() => {
    refetch();
  }, [param]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex items-center justify-center max-w-7xl m-auto  wrapper animate-fadeIn">
        {isLoading ? (
          <div className="bg-white  w-full dark:bg-black border border-neutral-200  rounded-xl p-4 max-md:p-4 lg:p-10 dark:border-neutral-800 ">
            <div className=" animate-pulse ">
              <div className="w-2/3 h-4 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
              <div className="w-full h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
              <div className="w-full h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
              <div className="w-1/2 h-8 bg-gray-200 rounded dark:bg-grayshade-100"></div>
            </div>
          </div>
        ) : (
          <div>
            {data?.data.data ? (
              <div className="relative flex lg:flex-row flex-col bg-white  dark:bg-black border border-neutral-200  rounded-xl p-4 max-md:p-4 lg:p-10 dark:border-neutral-800 animate-fadeIn">
                <ImageSlider
                  imageList={data?.data.data.images}
                  setImgIndex={setImgIndex}
                  imgIndex={imgIndex}
                  alt={data?.data.data.title}
                />
                <div className="lg:p-8 max-md:p-0 flex flex-col justify-center basis-full lg:basis-7/12">
                  <p className="text-4xl max-xl:text-2xl font-semibold">
                    {data?.data.data.title}
                  </p>
                  <span className="lable w-max">
                    {data?.data.data.category.name}
                  </span>
                  <p className="text-xl  max-xl:text-base font-medium text-grayshade-50 my-10">
                    {data?.data.data.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-grayshade-100 dark:text-grayshade-50 text-lg">
                        Price
                      </p>
                      <p className="font-bold text-grayshade-300 dark:text-white text-2xl">
                        {data?.data.data.price} EGP
                      </p>
                    </div>
                    <div className="flex text-white justify-between items-center">
                      <button
                        onClick={() => addProduct(data?.data.data.id)}
                        className="py-2 px-4 button flex gap-2 items-center"
                      >
                        Add To Cart
                        {loading ? (
                          <LoadingDots className="bg-white" />
                        ) : (
                          <ShoppingCartIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
}
