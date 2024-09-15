<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
import { useState, useContext } from "react";
import { cartContext } from "./../../Context/CartContext";
import LoadingDots from "./../Loading/LoadingDots";
import { MinusIcon } from "@heroicons/react/24/outline";

export default function ReduceItemQuantityButton({ productId, productCount }) {
  const [loading, setLoading] = useState(false);
  let { reduceItemQuantity, setCartDetails } = useContext(cartContext);

  async function reduceCount(id, count) {
    setLoading(true);
    let { data } = await reduceItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }
  return (
    <>
      <button
        onClick={() => reduceCount(productId, productCount - 1)}
        aria-label="Reduce item quantity"
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
      >
        {loading ? (
          <LoadingDots className="bg-black dark:bg-white" />
        ) : (
          <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
        )}{" "}
      </button>
    </>
  );
}
<<<<<<< HEAD
=======
import { useState, useContext } from "react";
import { cartContext } from "./../../Context/CartContext";
import LoadingDots from "./../Loading/LoadingDots";
import { MinusIcon } from "@heroicons/react/24/outline";

export default function ReduceItemQuantityButton({ productId, productCount }) {
  const [loading, setLoading] = useState(false);
  let { reduceItemQuantity, setCartDetails } = useContext(cartContext);

  async function reduceCount(id, count) {
    setLoading(true);
    let { data } = await reduceItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }
  return (
    <>
      <button
        onClick={() => reduceCount(productId, productCount - 1)}
        aria-label="Reduce item quantity"
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
      >
        {loading ? (
          <LoadingDots className="bg-black dark:bg-white" />
        ) : (
          <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
        )}{" "}
      </button>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
