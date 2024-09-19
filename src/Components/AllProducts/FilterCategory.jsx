import { Link } from "react-router-dom";
import { categories } from "../../constants";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

export default function FilterCategory({ categoryId }) {
  function CategoryLink({ to, isActive, label }) {
    return (
      <Link
        to={to}
        className={`block py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 border-l-2 border-zinc-50 dark:border-zinc-950 ${
          isActive ? "border-l-black dark:border-l-white" : ""
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <>
      <div className="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible md:opacity-1 opacity-1 mb-8 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium border border-gray-200  bg-white dark:border-neutral-800 dark:bg-black rounded-xl  pb-0 py-5 transition-all">
        <p className="ml-2 flex items-center gap-1">
          <SquaresPlusIcon className="h-5 w-5 text-black dark:text-white" />
          Categories :
        </p>
        <div className="font-extralight text-lg">
          <CategoryLink
            to={`/products`}
            isActive={!categoryId}
            label="All Products"
          />

          {categories.map((category) => (
            <CategoryLink
              key={category.name}
              to={`/products?category=${category.id}`}
              isActive={category.id === categoryId}
              label={category.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
