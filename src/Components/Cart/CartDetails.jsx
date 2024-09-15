<<<<<<< HEAD
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./../../Context/CartContext";
import DeleteItemButton from "./DeleteItemButton";
import IncreaseItemQuantityButton from "./IncreaseItemQuantityButton";
import ReduceItemQuantityButton from "./ReduceItemQuantityButton";

export default function CartDetails() {
  let { closeCart, cartDetails } = useContext(cartContext);

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
                <DeleteItemButton productId={product.product.id} />
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
                  <ReduceItemQuantityButton
                    productId={product.product._id}
                    productCount={product.count}
                  />
                  <p className="w-6 text-center">
                    <span className="w-full text-sm">{product.count}</span>
                  </p>
                  <IncreaseItemQuantityButton
                    productId={product.product._id}
                    productCount={product.count}
                  />
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
=======
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./../../Context/CartContext";
import DeleteItemButton from "./DeleteItemButton";
import IncreaseItemQuantityButton from "./IncreaseItemQuantityButton";
import ReduceItemQuantityButton from "./ReduceItemQuantityButton";

export default function CartDetails() {
  let { closeCart, cartDetails } = useContext(cartContext);

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
                <DeleteItemButton productId={product.product.id} />
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
                  <ReduceItemQuantityButton
                    productId={product.product._id}
                    productCount={product.count}
                  />
                  <p className="w-6 text-center">
                    <span className="w-full text-sm">{product.count}</span>
                  </p>
                  <IncreaseItemQuantityButton
                    productId={product.product._id}
                    productCount={product.count}
                  />
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
>>>>>>> f53b233 (Update product details)
