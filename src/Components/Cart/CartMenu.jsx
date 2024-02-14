import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  XMarkIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import logo from "../../Assets/images/logo512.png";
import LoadingDots from "./../LoadingDots/LoadingDots";
//
import { cartContext } from "./../../Context/CartContext";
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../ToastAlerts";
import { userContext } from "./../../Context/UserContext";
import CartDetails from "./CartDetails";

export default function CartMenu() {
  // const [cartDetails, setCartDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  let { isOpen, openCart, closeCart, cartDetails, getCart } =
    useContext(cartContext);

  let { userToken } = useContext(userContext);

  // useEffect(() => {
  //   if (userToken) {
  //     getCart();
  //   }
  // }, []);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
          <ShoppingCartIcon className="h-4 transition-all ease-in-out hover:scale-110 " />
          <div
            className={`${
              !cartDetails ||
              cartDetails?.numOfCartItems === 0 ||
              userToken == null
                ? "hidden"
                : ""
            } absolute  right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white`}
          >
            {cartDetails ? <div>{cartDetails.numOfCartItems}</div> : ""}
          </div>
        </div>
      </button>

      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <XMarkIcon className="h-6 transition-all ease-in-out hover:scale-110 " />
                  </div>
                </button>
              </div>

              {!cartDetails || cartDetails?.data?.products.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">
                    Your cart is empty.
                  </p>
                </div>
              ) : (
                <CartDetails />
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      {/* <div
        className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px] translate-x-0 duration-200"
        id="headlessui-dialog-panel-:rj:"
        data-headlessui-state="open"
        show={isOpen}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">My Cart</p>
          <button aria-label="Close cart" onClick={closeCart}>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 transition-all ease-in-out hover:scale-110 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="flex h-full flex-col justify-between overflow-hidden p-1">
          <ul className="flex-grow overflow-auto py-4">
            <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
              <div className="relative flex w-full flex-row justify-between px-1 py-4">
                <div className="absolute z-40 -mt-2 ml-[55px]">
                  <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                    <button
                      type="submit"
                      aria-label="Remove cart item"
                      aria-disabled="false"
                      className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                    <p aria-live="polite" className="sr-only" role="status"></p>
                  </form>
                </div>
                <a
                  className="z-30 flex flex-row space-x-4"
                  href="/product/acme-geometric-circles-t-shirt?color=Black&amp;size=XS"
                >
                  <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <img
                      alt="Acme Circles T-Shirt"
                      loading="lazy"
                      width="64"
                      height="64"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover"
                      srcset="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=128&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&amp;w=128&amp;q=75"
                    />
                  </div>
                  <div className="flex flex-1 flex-col text-base">
                    <span className="leading-tight">Acme Circles T-Shirt</span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Black / XS
                    </p>
                  </div>
                </a>
                <div className="flex h-16 flex-col justify-between">
                  <p className="flex justify-end space-y-2 text-right text-sm">
                    $15.00<span className="ml-1 inline">EGO</span>
                  </p>
                  <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                    <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                      <button
                        type="submit"
                        aria-label="Reduce item quantity"
                        aria-disabled="false"
                        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4 dark:text-neutral-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 12h-15"
                          ></path>
                        </svg>
                      </button>
                      <p
                        aria-live="polite"
                        className="sr-only"
                        role="status"
                      ></p>
                    </form>
                    <p className="w-6 text-center">
                      <span className="w-full text-sm">1</span>
                    </p>
                    <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
                      <button
                        type="submit"
                        aria-label="Increase item quantity"
                        aria-disabled="false"
                        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4 dark:text-neutral-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          ></path>
                        </svg>
                      </button>
                      <p
                        aria-live="polite"
                        className="sr-only"
                        role="status"
                      ></p>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p>Taxes</p>
              <p className="text-right text-base text-black dark:text-white">
                $0.00<span className="ml-1 inline">EGO</span>
              </p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p>Shipping</p>
              <p className="text-right">Calculated at checkout</p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p>Total</p>
              <p className="text-right text-base text-black dark:text-white">
                $15.00<span className="ml-1 inline">EGO</span>
              </p>
            </div>
          </div>
          <a
            href="https://dev-vercel-shop.myshopify.com/cart/c/c1-6488c1fbe2a137759f8af1c150c80b09?key=b6f1e3cf01fc6bd66bf89f9fad296d20"
            className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
          >
            Proceed to Checkout
          </a>
        </div>
      </div> */}
    </>
  );
}
