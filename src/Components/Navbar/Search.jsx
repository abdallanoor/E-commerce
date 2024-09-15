<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { toastWarning } from "./../../ToastAlerts";

export default function Search() {
  function notWorking() {
    toastWarning("Apologies, Currently Unavailable.");
  }
  return (
    <>
      <div
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
        onClick={notWorking}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for products..."
          className="w-full rounded-lg border focus-visible:ring-offset-2 bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4" />
        </div>
      </div>
    </>
  );
}
<<<<<<< HEAD
=======
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { toastWarning } from "./../../ToastAlerts";

export default function Search() {
  function notWorking() {
    toastWarning("Apologies, Currently Unavailable.");
  }
  return (
    <>
      <div
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
        onClick={notWorking}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for products..."
          className="w-full rounded-lg border focus-visible:ring-offset-2 bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4" />
        </div>
      </div>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
