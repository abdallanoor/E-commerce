import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
//
import { cartContext } from "./../../Context/CartContext";
import { userContext } from "./../../Context/UserContext";
import CartDetails from "./CartDetails";

export default function CartMenu() {
  let { isOpen, openCart, closeCart, cartDetails } = useContext(cartContext);
  let { userToken } = useContext(userContext);

  return (
    <>
      <button onClick={openCart}>
        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
          <ShoppingCartIcon className="h-4 transition-all ease-in-out hover:scale-110 " />
          <div
            className={`${
              !cartDetails ||
              cartDetails.length === 0 ||
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

                <button
                  className="focus-visible:outline-none"
                  onClick={closeCart}
                >
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white ">
                    <XMarkIcon className="h-6 transition-all ease-in-out hover:scale-110 " />
                  </div>
                </button>
              </div>

              {!cartDetails ||
              cartDetails.length === 0 ||
              cartDetails?.data?.products.length === 0 ||
              userToken == null ? (
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
    </>
  );
}
