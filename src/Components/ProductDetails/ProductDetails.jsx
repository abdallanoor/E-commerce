import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
// import Style from './ProductDetails.module.css'
import { useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import LoadingDots from "./../Loading/LoadingDots";

import ImageSlider from "./ImageSlider";
import { ToastContainer } from "react-toastify";
import { userContext } from "./../../Context/UserContext";
import { toastWarning } from "./../../ToastAlerts";
import ContentLoading from "./../Loading/ContentLoading";

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [imageList, setImageList] = useState([]);
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

  // test merge

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
      <div className="flex items-center justify-center max-w-7xl m-auto wrapper animate-fadeIn">
        {isLoading ? (
          <div className="bg-white w-full dark:bg-black border border-neutral-200  rounded-md p-4 max-md:p-4 lg:p-10 dark:border-neutral-800 ">
            <ContentLoading />
          </div>
        ) : (
          <>
            {data?.data.data ? (
              <div className="relative flex lg:flex-row flex-col gap-5 bg-white dark:bg-black border border-neutral-200  rounded-md p-4 max-md:p-4 lg:p-10 dark:border-neutral-800 animate-fadeIn">
                <ImageSlider
                  imageList={data?.data.data.images}
                  setImgIndex={setImgIndex}
                  imgIndex={imgIndex}
                  alt={data?.data.data.title}
                />
                <div className="flex flex-col justify-center basis-full lg:basis-8/12">
                  <p className="text-lg font-semibold">
                    {data?.data.data.title}
                  </p>
                  <span className="lable w-max">
                    {data?.data.data.category.name}
                  </span>
                  <p className="font-medium text-grayshade-50 my-5">
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
                        className="py-2 px-4 button flex gap-2 items-center text-center  rounded-lg text-white bg-blue-600"
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
          </>
        )}
      </div>

      {/* <div>
        <ImageSlider
          imageList={data?.data.data.images}
          setImgIndex={setImgIndex}
          imgIndex={imgIndex}
          alt={data?.data.data.title}
        />
      </div> */}
    </>
  );
}
