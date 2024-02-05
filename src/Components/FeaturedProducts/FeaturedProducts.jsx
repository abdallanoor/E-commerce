import React, { useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import Style from './Products.module.css'
import { cartContext } from "../../Context/CartContext";
import hat from "../../Assets/images/hat-1.avif";
//
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../ToastAlerts";
export default function FeaturedProducts() {
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
    setEditData(data?.data.data.reverse().splice(0, 4));
  }
  //Add To Cart
  let { addToCart } = useContext(cartContext);
  async function addProduct(productId) {
    let response = await addToCart(productId);
    if (response.data.status === "success") {
      toastSuccess("Product Successfully Added.");
    }
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
          <ThreeDots color="#2563eb" />{" "}
        </div>
      ) : (
        // <div className="row">
        //   {data?.data.data.map((product) => (
        //     <div key={product._id} className="col-md-3 mb-2">
        //       <div className="product overflow-hidden cursor-pointer px-2 py-2">
        //         <Link to={`/ProductDetails/${product.id}`}>
        //           <img
        //             className="w-100"
        //             src={product.imageCover}
        //             alt={product.title}
        //           />
        //           <span className="text-main font-sm fw-bolder">
        //             {product.category.name}
        //           </span>
        //           <h3 className="h6">
        //             {product.title.split(" ").slice(0, 2).join(" ")}
        //           </h3>
        //           <h3></h3>
        //           <div className="d-flex justify-content-between mt-3">
        //             <span>{product.price} EGP</span>
        //             <span>
        //               <i className="fas fa-star rating-color">
        //                 {product.ratingsAverage}
        //               </i>
        //             </span>
        //           </div>
        //         </Link>
        //         <button
        //           onClick={() => addProduct(product.id)}
        //           className="btn bg-main w-100 text-white btn-sm mt-2"
        //         >
        //           Add To Cart
        //         </button>
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {editData.map((product) => (
              <div
                key={product._id}
                className="group flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-transparent shadow-md"
              >
                <Link
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  to={`/ProductDetails/${product.id}`}
                >
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={product.imageCover}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={product.images[0]}
                    alt="product image"
                  />
                  {/* <!-- <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          </div> --> */}
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
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span> */}
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight ">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold ">
                        ${product.price}
                      </span>
                      <span className="text-sm  line-through">$699</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                  </a>
                </div>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
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
                          {product.title}
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
          </ul>
        </section>
      )}
    </>
  );
}
