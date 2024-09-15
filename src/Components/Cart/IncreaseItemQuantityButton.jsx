<<<<<<< HEAD
import { useState, useContext } from "react";
import { cartContext } from "./../../Context/CartContext";
import LoadingDots from "./../Loading/LoadingDots";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function IncreaseItemQuantityButton({
  productId,
  productCount,
}) {
  const [loading, setLoading] = useState(false);
  let { increaseItemQuantity, setCartDetails } = useContext(cartContext);

  async function increaseCount(id, count) {
    setLoading(true);
    let { data } = await increaseItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => increaseCount(productId, productCount + 1)}
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
      >
        {loading ? (
          <LoadingDots className="bg-black dark:bg-white" />
        ) : (
          <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
        )}
      </button>
    </>
  );
}
=======
import { useState, useContext } from "react";
import { cartContext } from "./../../Context/CartContext";
import LoadingDots from "./../Loading/LoadingDots";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function IncreaseItemQuantityButton({
  productId,
  productCount,
}) {
  const [loading, setLoading] = useState(false);
  let { increaseItemQuantity, setCartDetails } = useContext(cartContext);

  async function increaseCount(id, count) {
    setLoading(true);
    let { data } = await increaseItemQuantity(id, count);
    setCartDetails(data);
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => increaseCount(productId, productCount + 1)}
        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
      >
        {loading ? (
          <LoadingDots className="bg-black dark:bg-white" />
        ) : (
          <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
        )}
      </button>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
