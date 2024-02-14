import React, { useState, useContext } from "react";
import LoadingDots from "./../LoadingDots/LoadingDots";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cartContext } from "./../../Context/CartContext";

export default function CartDetails() {
  const [loading, setLoading] = useState(false);

  let {
    removeCart,
    increaseItemQuantity,
    reduceItemQuantity,
    closeCart,
    cartDetails,
    setCartDetails,
  } = useContext(cartContext);

  //Remove
  async function removeItem(id) {
    setLoading(true);
    let { data } = await removeCart(id);
    setCartDetails(data);
    setLoading(false);
  }
  //update count
  async function increaseCount(id, count) {
    setLoading(true);
    let { data } = await increaseItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }
  async function reduceCount(id, count) {
    setLoading(true);
    let { data } = await reduceItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden p-1">
      <ul className="flex-grow overflow-auto py-4 edit-scroll ">
        {cartDetails?.data?.products.map((product) => (
          <li
            key={product.product.id}
            className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
          >
            <div className="relative flex w-full flex-row justify-between px-1 py-4 animate-fadeIn">
              <div className="absolute z-40 -mt-2 ml-[55px]">
                <button
                  onClick={() => removeItem(product.product.id)}
                  className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
                >
                  {loading ? (
                    <LoadingDots className="bg-black dark:bg-white" />
                  ) : (
                    <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
                  )}
                </button>
              </div>
              <Link
                className="z-30 flex flex-row space-x-4"
                to={`/ProductDetails/${product.product._id}`}
                onClick={closeCart}
              >
                <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <img
                    width="64"
                    height="64"
                    className="object-cover"
                    src={product.product.imageCover}
                    alt={product.product.title}
                  />
                </div>
                <div className="flex flex-1 flex-col text-base">
                  <span className="leading-tight">
                    {product.product.title.split(" ").slice(0, 3).join(" ")}
                  </span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {product.product.category.name}
                  </p>
                </div>
              </Link>
              <div className="flex h-16 flex-col justify-between">
                <p className="flex justify-end space-y-2 text-right text-sm">
                  {product.price}
                  <span className="ml-1 inline">EGP</span>
                </p>
                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                  <button
                    onClick={() =>
                      reduceCount(product.product._id, product.count - 1)
                    }
                    aria-label="Reduce item quantity"
                    className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                  >
                    {loading ? (
                      <LoadingDots className="bg-black dark:bg-white" />
                    ) : (
                      <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
                    )}{" "}
                  </button>
                  <p className="w-6 text-center">
                    <span className="w-full text-sm">{product.count}</span>
                  </p>
                  <button
                    onClick={() =>
                      increaseCount(product.product._id, product.count + 1)
                    }
                    aria-label="Increase item quantity"
                    className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                  >
                    {loading ? (
                      <LoadingDots className="bg-black dark:bg-white" />
                    ) : (
                      <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
          <p>Taxes</p>
          <p className="text-right text-base text-black dark:text-white">
            0.00<span className="ml-1 inline">EGP</span>
          </p>
        </div>
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
          <p>Shipping</p>
          <p className="text-right">Calculated at checkout</p>
        </div>
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
          <p>Total</p>
          <p className="text-right text-base text-black dark:text-white">
            {cartDetails?.data?.totalCartPrice}
            <span className="ml-1 inline">EGP</span>
          </p>
        </div>
      </div>
      <Link
        onClick={closeCart}
        to={"/address"}
        className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
