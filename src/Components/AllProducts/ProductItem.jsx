import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { toastWarning } from "../../ToastAlerts";
import { cartContext } from "./../../Context/CartContext";
import { userContext } from "./../../Context/UserContext";
import LoadingDots from "./../Loading/LoadingDots";

export default function ProductItem({ product }) {
  const [loading, setLoading] = useState(false);

  let { addToCart, openCart, getCart } = useContext(cartContext);
  let { userToken } = useContext(userContext);
  const navigate = useNavigate();

  async function addProduct(productId) {
    if (userToken) {
      setLoading(true);
      await addToCart(productId);
      getCart();
      setLoading(false);
      openCart();
    } else {
      navigate("/login");
      toastWarning("Login First");
    }
  }
  return (
    <>
      <div
        key={product.id}
        className="md:p-4 lg:p-7 p-3 rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-black shadow-md w-full justify-center justify-items-center justify-self-center"
      >
        <Link to={`/ProductDetails/${product.id}`}>
          <img
            className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
            width="233px"
            height="288px"
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
              className="py-2 px-4 button flex gap-2 text-sm items-center text-center rounded-lg text-white dark:text-black bg-black dark:bg-white disabled:opacity-50"
              disabled={loading}
            >
              Add To Cart
              {loading ? (
                <span className="h-4 w-4 flex items-center justify-center">
                  <LoadingDots className="bg-white dark:bg-black " />
                </span>
              ) : (
                <ShoppingCartIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
