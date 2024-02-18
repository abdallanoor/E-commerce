import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import Style from './Products.module.css'
import { cartContext } from "../../Context/CartContext";
import noData from "../../Assets/images/No data.svg";
//
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from "react-toastify";
import { toastWarning } from "../../ToastAlerts";
import LoadingDots from "./../LoadingDots/LoadingDots";
import FilterCategory from "./../FilterCategory/FilterCategory";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { userContext } from "./../../Context/UserContext";

import { useParams } from "react-router-dom";

export default function FeaturedProducts() {
  const [productloading, setProductLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCat, setSelectedCat] = useState(0);

  let param = useParams();

  function getFeaturedProducts() {
    setProductLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((response) => {
        setEditData(response?.data?.data.reverse());
        setSelectedCat(0);
        setProductLoading(false);
      });
  }
  function getCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) => {
        setCategoryData(response?.data?.data);
        setSelectedCat(response?.data?.data._id);
      });
  }

  function getAllCategories(id) {
    setProductLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/?category=${id}`)
      .then((response) => {
        setEditData(response?.data?.data.reverse());
        console.log(response?.data?.data);
        setProductLoading(false);
      });
  }
  //Add To Cart
  let { addToCart, openCart, getCart, getCartId } = useContext(cartContext);
  let { userToken, userId } = useContext(userContext);

  async function addProduct(productId) {
    if (userToken) {
      setLoading(true);
      let response = await addToCart(productId);
      getCart();
      setLoading(false);
      openCart();
    } else {
      toastWarning("Login First");
    }
  }
  useEffect(() => {
    getFeaturedProducts();
    getCategories();
  }, []);

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
      <section className="wrapper">
        <h1 className="text-3xl font-bold mb-10">All Products</h1>
        <div className="w-full flex lg:flex-row flex-col-reverse animate-fadeIn">
          <div className="lg:w-10/12 md:w-10/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto max-sm:px-5 animate-fadeIn">
            {productloading ? (
              <>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
                <div className="w-full animate-pulse">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
                </div>
              </>
            ) : (
              editData.map((product) => (
                <div
                  key={product.id}
                  className="md:p-4 lg:p-7 p-3 rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-black shadow-md w-full justify-center justify-items-center justify-self-center animate-fadeIn"
                >
                  <Link to={`/ProductDetails/${product.id}`}>
                    <img
                      className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
                      src={product.imageCover}
                      alt={product.title}
                    />
                  </Link>
                  <div>
                    <p className="font-semibold text-xl mb-2 h-auto">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </p>
                    <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
                      {product.description.slice(0, 25)}...
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
                        disabled={loading}
                        className="py-2 px-4 button flex gap-2 text-sm items-center"
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
              ))
            )}
            {editData.length == 0 && (
              <div className=" flex flex-col items-center justify-center text-xl mb-20 w-full animate-fadeIn">
                <img src={noData} alt="No Data" className="w-72" />
                <p>Sorry Products Is Not Available..</p>
              </div>
            )}
          </div>
          <FilterCategory
            setEditData={setEditData}
            getAllCategories={getAllCategories}
            getFeaturedProducts={getFeaturedProducts}
            categoryData={categoryData}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        </div>
      </section>
    </>
  );
}

// editData.map((product) => (
//   <div
//     key={product._id}
//     className="md:p-4 lg:p-7 p-3 rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-md w-full justify-center justify-items-center justify-self-center"
//   >
//     <Link to={`/ProductDetails/${product.id}`}>
//       <img
//         className="w-full dark:bg-neutral-950 rounded-lg self-stretch h-80   mb-7 object-cover"
//         src={product.imageCover}
//         alt={product.title}
//       />
//     </Link>
//     <div>
//       <p className="font-semibold text-xl mb-2 h-auto">
//         {product.title.split(" ").slice(0, 3).join(" ")}
//       </p>
//       <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
//         {product.title.split(" ").slice(0, 2).join(" ")}...
//         <Link
//           className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
//           to={`/ProductDetails/${product.id}`}
//         >
//           Read More
//         </Link>
//       </p>
//       <span className="lable">{product.category.name}</span>
//     </div>
//     <div className="flex justify-between items-center">
//       <div>
//         <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
//           Price
//         </p>
//         <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
//           {product.price} EGP
//         </p>
//       </div>
//       <div className="flex text-white justify-between items-center">
//         <button
//           onClick={() => addProduct(product.id)}
//           className="py-2 px-4 button flex gap-2 items-center"
//         >
//           Add To Cart
//           {loading ? (
//             <LoadingDots className="bg-white" />
//           ) : (
//             <ShoppingCartIcon className="h-4 w-4" />
//           )}
//         </button>
//       </div>
//     </div>
//   </div>
// ))

{
  /* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          </div> */
}
