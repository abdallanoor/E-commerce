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

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  let param = useParams();

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading, isError, refetch } = useQuery(
    "ProductDetails",
    () => getProductDetails(param.id),
    {
      // cacheTime: 3000,
      // refetchOnMount: false,
      // staleTime: 30000,
      // refetchInterval: 1000
    }
  );

  //Add To Cart
  let { addToCart, openCart } = useContext(cartContext);
  async function addProduct(productId) {
    setLoading(true);
    let response = await addToCart(productId);
    setLoading(false);
    openCart();
  }
  useEffect(() => {
    refetch();
  }, [param]);

  return (
    <>
      <div className="flex items-center justify-center max-w-7xl m-auto  wrapper animate-fadeIn">
        {isLoading ? (
          <div className="">
            <Triangle
              visible
              height="200"
              width="200"
              color="#2563eb"
              ariaLabel="triangle-loading"
              wrapperStyle={{ fontSize: "150px" }}
              wrapperclassName="w-full col-span-3 flex justify-center m-auto"
            />
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
