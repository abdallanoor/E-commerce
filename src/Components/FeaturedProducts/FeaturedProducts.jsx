import React, { useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import Style from './Products.module.css'
import { cartContext } from "../../Context/CartContext";
import hat from "../../Assets/images/hat-1.avif";
import hat2 from "../../Assets/images/clothes category3.jpg";
//
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../ToastAlerts";
import LoadingDots from "./../LoadingDots/LoadingDots";
export default function FeaturedProducts() {
  const [Loading, setLoading] = useState(false);
  const [editData, setEditData] = useState([]);
  //getFeaturedProducts
  function getFeaturedProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isFetching, isError, refetch } = useQuery(
    "fraturedProducts",
    getFeaturedProducts,
    {
      // cacheTime: 3000,
      // refetchOnMount: false,
      // staleTime: 30000,
      // refetchInterval: 1000
    }
  );
  if (data?.data.data.length > 4) {
    setEditData(data?.data.data.reverse().splice(0, 3));
  }
  //Add To Cart
  let { addToCart, openCart } = useContext(cartContext);

  async function addProduct(productId) {
    setLoading(true);
    let response = await addToCart(productId);
    setLoading(false);
    openCart();
  }
  return (
    <>
      {/* <h1 className="mb-3">Featured Products</h1> */}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading ? (
        <div className="w-full py-5 flex justify-center ">
          <Triangle
            visible
            height="200"
            width="200"
            color="#2563eb"
            ariaLabel="triangle-loading"
            wrapperStyle={{ fontSize: "150px" }}
            wrapperClassNameclassName="w-full col-span-3 flex justify-center m-auto"
          />
        </div>
      ) : (
        <section className="wrapper min-h-screen py-10">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-10">Featured Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-x-12 lg:gap-y-7 gap-4 m-auto">
              {editData.map((product) => (
                <div
                  key={product._id}
                  className="md:p-4 lg:p-7 p-3  rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-md w-full justify-center justify-items-center justify-self-center"
                >
                  <Link to={`/ProductDetails/${product.id}`}>
                    <img
                      className="w-full dark:bg-neutral-950 rounded-lg self-stretch h-80   mb-7 object-cover"
                      src={product.imageCover}
                      alt={product.title}
                    />
                  </Link>
                  <div>
                    <p className="font-semibold text-xl mb-2 h-auto">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </p>
                    <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
                      {product.title.split(" ").slice(0, 2).join(" ")}...
                      <Link
                        className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
                        to={`/ProductDetails/${product.id}`}
                      >
                        Read More
                      </Link>
                    </p>
                    <span className="lable">{product.category.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
                        Price
                      </p>
                      <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
                        {product.price} EGP
                      </p>
                    </div>
                    <div className="flex text-white justify-between items-center">
                      <button
                        onClick={() => addProduct(product.id)}
                        className="py-2 px-4 button flex gap-2 items-center"
                      >
                        Add To Cart
                        {Loading ? (
                          <LoadingDots className="bg-white" />
                        ) : (
                          <ShoppingCartIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="lg:w-10/12 md:w-10/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto">
              {editData.map((product) => (
                <div
                  key={product._id}
                  className="md:p-4 lg:p-7 p-3  rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-md w-full justify-center justify-items-center justify-self-center"
                >
                  <Link to={`/ProductDetails/${product.id}`}>
                    <img
                      className="w-full dark:bg-neutral-950 rounded-lg self-stretch h-72  max-md:h-96  mb-7 object-cover"
                      src={product.imageCover}
                      alt={product.title}
                    />
                  </Link>
                  <div>
                    <p className="font-semibold text-xl mb-2 h-auto">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </p>
                    <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
                      {product.title.split(" ").slice(0, 2).join(" ")}...
                      <Link
                        className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
                        to={`/ProductDetails/${product.id}`}
                      >
                        Read More
                      </Link>
                    </p>
                    <span className="lable">{product.category.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
                        Price
                      </p>
                      <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
                        {product.price} EGP
                      </p>
                    </div>
                    <div className="flex text-white justify-between items-center">
                      <button
                        onClick={() => addProduct(product.id)}
                        className="py-2 px-4 button flex gap-2 items-center"
                      >
                        Add To Cart
                        <ShoppingCartIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {editData.map((product) => (
              <div
                key={product._id}
                className="group flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-md"
              >
                <Link
                  className="relative mx-3 mt-3 flex h-80 sm:h-60  overflow-hidden rounded-xl"
                  to={`/ProductDetails/${product.id}`}
                >
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover bg-white dark:bg-neutral-950"
                    src={product.imageCover}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-full h-full w-full  object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0 bg-white dark:bg-neutral-950"
                    src={product.images[0]}
                    alt="product image"
                  />
                  <svg
                    className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                    />
                  </svg>
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <Link to={`/ProductDetails/${product.id}`}>
                    <h5 className="text-xl tracking-tight ">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h5>
                  </Link>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold ">
                        ${product.price}
                      </span>
                      <span className="text-sm  line-through">$699</span>
                    </p>
                  </div>
                  <button
                    onClick={() => addProduct(product.id)}
                    className="flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center w-full text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div> */}

          {/* <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {editData?.map((product) => (
              <li className="aspect-square transition-opacity animate-fadeIn">
                <Link
                  className="relative inline-block h-full w-full  "
                  to={`/ProductDetails/${product.id}`}
                >
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden duration-200 rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800 dark:hover:border-blue-600">
                    <img
                      alt="Acme Baby Cap"
                      className="relative h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 "
                      src={product.imageCover}
                      alt={product.title}
                    />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                          {product.title.split(" ").slice(0, 2).join(" ")}
                        </h3>
                        <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                          $10.00
                          <span className="ml-1 inline @[275px]/label:inline">
                            USD
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul> */}
        </section>
      )}
    </>
  );
}
