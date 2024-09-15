<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noData from "../../Assets/images/No data.svg";
import { userContext } from "./../../Context/UserContext";
import { cartContext } from "./../../Context/CartContext";
import ContentLoading from "./../Loading/ContentLoading";

export default function Orders() {
  const [userOrder, setUserOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  let { getUserOrders, userId, userToken } = useContext(userContext);
  let { getCart } = useContext(cartContext);

  async function getOrders(userId) {
    setLoading(true);
    let orders = await getUserOrders(userId);
    if (orders?.length > 0) {
      setUserOrder(orders[0]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (userToken) {
      getOrders(userId);
      getCart();
    }
  }, [userId]);

  return (
    <>
      <section className="flex items-center wrapper animate-fadeIn">
        <div className="justify-center flex-1 max-w-7xl px-6 py-6 mx-auto bg-white rounded-md border dark:border-neutral-800 dark:bg-black lg:py-10 lg:px-10 ">
          {loading ? (
            <ContentLoading />
          ) : userOrder?.__v === 0 ? (
            <div className="animate-fadeIn">
              <div className="mb-16 text-center">
                <h1 className="mb-6 text-2xl font-semibold leading-7 tracking-wide text-gray-700  lg:text-4xl dark:text-gray-300 lg:leading-9">
                  Thank you for your Order, {userOrder?.user?.name}!
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  your order number is: {userOrder?.id}
                </p>
              </div>
              <div className="max-w-4xl mx-auto mb-10">
                <h2 className="mb-4 text-xl font-medium dark:text-gray-400">
                  What you ordered:
                </h2>
                {userOrder?.cartItems?.map((product) => (
                  <div
                    key={product._id}
                    className="p-10 mb-8 bg-white rounded-md shadow dark:bg-grayshade-400 sm:flex sm:items-center xl:py-5 xl:px-12"
                  >
                    <Link
                      to={`/ProductDetails/${product.product.id}`}
                      className="mr-6 md:mr-12"
                    >
                      <img
                        className=" w-full lg:w-[80px] h-[200px] lg:h-[80px] rounded-sm object-cover  mx-auto mb-6 sm:mb-0 "
                        src={product.product.imageCover}
                        alt={product.product.title}
                      />
                    </Link>
                    <div>
                      <Link
                        className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
                        to={`/ProductDetails/${product.product.id}`}
                      >
                        {product.product.title}
                      </Link>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Category :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.product.category.name}
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Brand :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.product.brand.name}
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Quantity :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.count}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-4xl mx-auto ">
                <h2 className="mb-4 text-xl font-medium dark:text-gray-400 ">
                  Order Details:
                </h2>
                <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                  <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400 font-heading">
                    <span>Shipping</span>
                    <span className="flex items-center">
                      <span className="ml-3 mr-1 text-sm">EGP.</span>
                      <span className="text-xl">
                        {userOrder?.shippingPrice}
                      </span>
                    </span>
                  </div>
                  <div className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400">
                    <div className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 dark:bg-gray-600">
                      <div className="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
                        {userOrder?.cartItems?.length}
                      </div>
                    </div>
                    <span className="mr-16">Products</span>
                  </div>
                  <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400 font-heading">
                    <span>Total</span>
                    <span className="flex items-center text-blue-500 dark:text-blue-400">
                      <span className="ml-3 mr-1 text-sm">EGP.</span>
                      <span className="text-xl">
                        {userOrder?.totalOrderPrice}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 ">
                  <Link
                    to="/"
                    className="w-full px-6 py-3 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300"
                  >
                    Go back shopping
                  </Link>
                  {/* <button className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-800 dark:bg-gray-700">
                    Download Invoice
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center animate-fadeIn">
              <div className="flex items-center text-center flex-col gap-2">
                <img src={noData} alt="No Data" className="w-64" />
                <p className="text-xl">No items found!</p>
                <p className="text-gray-500 dark:text-gray-400">
                  We couldn'd find items that matched your search in the given
                  time period
                </p>
              </div>
            </div>
          )}

          {/* {} */}
        </div>
      </section>
    </>
  );
}
=======
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noData from "../../Assets/images/No data.svg";
import { userContext } from "./../../Context/UserContext";
import { cartContext } from "./../../Context/CartContext";
import ContentLoading from "./../Loading/ContentLoading";

export default function Orders() {
  const [userOrder, setUserOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  let { getUserOrders, userId, userToken } = useContext(userContext);
  let { getCart } = useContext(cartContext);

  async function getOrders(userId) {
    setLoading(true);
    let orders = await getUserOrders(userId);
    if (orders?.length > 0) {
      setUserOrder(orders[0]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (userToken) {
      getOrders(userId);
      getCart();
    }
  }, [userId]);

  return (
    <>
      <section className="flex items-center wrapper animate-fadeIn">
        <div className="justify-center flex-1 max-w-7xl px-6 py-6 mx-auto bg-white rounded-md border dark:border-neutral-800 dark:bg-black lg:py-10 lg:px-10 ">
          {loading ? (
            <ContentLoading />
          ) : userOrder?.__v === 0 ? (
            <div className="animate-fadeIn">
              <div className="mb-16 text-center">
                <h1 className="mb-6 text-2xl font-semibold leading-7 tracking-wide text-gray-700  lg:text-4xl dark:text-gray-300 lg:leading-9">
                  Thank you for your Order, {userOrder?.user?.name}!
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  your order number is: {userOrder?.id}
                </p>
              </div>
              <div className="max-w-4xl mx-auto mb-10">
                <h2 className="mb-4 text-xl font-medium dark:text-gray-400">
                  What you ordered:
                </h2>
                {userOrder?.cartItems?.map((product) => (
                  <div
                    key={product._id}
                    className="p-10 mb-8 bg-white rounded-md shadow dark:bg-grayshade-400 sm:flex sm:items-center xl:py-5 xl:px-12"
                  >
                    <Link
                      to={`/ProductDetails/${product.product.id}`}
                      className="mr-6 md:mr-12"
                    >
                      <img
                        className=" w-full lg:w-[80px] h-[200px] lg:h-[80px] rounded-sm object-cover  mx-auto mb-6 sm:mb-0 "
                        src={product.product.imageCover}
                        alt={product.product.title}
                      />
                    </Link>
                    <div>
                      <Link
                        className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
                        to={`/ProductDetails/${product.product.id}`}
                      >
                        {product.product.title}
                      </Link>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Category :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.product.category.name}
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Brand :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.product.brand.name}
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Quantity :
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            {product.count}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-4xl mx-auto ">
                <h2 className="mb-4 text-xl font-medium dark:text-gray-400 ">
                  Order Details:
                </h2>
                <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                  <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400 font-heading">
                    <span>Shipping</span>
                    <span className="flex items-center">
                      <span className="ml-3 mr-1 text-sm">EGP.</span>
                      <span className="text-xl">
                        {userOrder?.shippingPrice}
                      </span>
                    </span>
                  </div>
                  <div className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400">
                    <div className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 dark:bg-gray-600">
                      <div className="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
                        {userOrder?.cartItems?.length}
                      </div>
                    </div>
                    <span className="mr-16">Products</span>
                  </div>
                  <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-400 dark:bg-grayshade-400 font-heading">
                    <span>Total</span>
                    <span className="flex items-center text-blue-500 dark:text-blue-400">
                      <span className="ml-3 mr-1 text-sm">EGP.</span>
                      <span className="text-xl">
                        {userOrder?.totalOrderPrice}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 ">
                  <Link
                    to="/"
                    className="w-full px-6 py-3 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300"
                  >
                    Go back shopping
                  </Link>
                  {/* <button className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-800 dark:bg-gray-700">
                    Download Invoice
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center animate-fadeIn">
              <div className="flex items-center text-center flex-col gap-2">
                <img src={noData} alt="No Data" className="w-64" />
                <p className="text-xl">No items found!</p>
                <p className="text-gray-500 dark:text-gray-400">
                  We couldn'd find items that matched your search in the given
                  time period
                </p>
              </div>
            </div>
          )}

          {/* {} */}
        </div>
      </section>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
