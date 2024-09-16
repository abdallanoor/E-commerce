import { Link } from "react-router-dom";
import { categories } from "../../constants";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

export default function FilterCategory({ pathname }) {
  return (
    <>
      <div className="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible md:opacity-1 opacity-1 mb-10 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium border border-gray-200  bg-white dark:border-neutral-800 dark:bg-black rounded-xl  pb-0 py-5 transition-all">
        <p className="ml-2 flex items-center gap-1">
          <SquaresPlusIcon className="h-5 w-5 text-blue-600" />
          Categories :
        </p>
        <div className="font-extralight text-lg">
          {categories.map((category) => (
            <Link
              to={`/products/${category?.slug}`}
              key={category.slug}
              className={`block py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 border-l-2 border-l-transparent ${
                pathname === `/products/${category?.slug}` &&
                "border-l-blue-600"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
