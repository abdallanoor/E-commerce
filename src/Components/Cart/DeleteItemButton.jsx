import { useState, useContext } from "react";
import LoadingDots from "./../Loading/LoadingDots";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cartContext } from "./../../Context/CartContext";

export default function DeleteItemButton({ productId }) {
  const [loading, setLoading] = useState(false);

  let { removeCart, setCartDetails } = useContext(cartContext);
  //Remove
  async function removeItem(id) {
    setLoading(true);
    let { data } = await removeCart(id);
    setCartDetails(data);
    setLoading(false);
  }
  return (
    <>
      <button
        onClick={() => removeItem(productId)}
        className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
      >
        {loading ? (
          <LoadingDots className="bg-black dark:bg-white" />
        ) : (
          <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
        )}
      </button>
    </>
  );
}
