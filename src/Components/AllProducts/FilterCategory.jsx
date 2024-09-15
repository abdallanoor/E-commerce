<<<<<<< HEAD
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function FilterCategory({
  setEditData,
  getAllCategories,
  getFeaturedProducts,
  categoryData,
  selectedCat,
  setSelectedCat,
}) {
  const categoryHandler = (id) => {
    getAllCategories(id);
    setSelectedCat(id);
  };
  return (
    <>
      <div className="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible md:opacity-1 opacity-1 mb-10 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium border border-gray-200  bg-white dark:border-neutral-800 dark:bg-black rounded-xl  pb-0 py-5 transition-all animate-fadeIn">
        <p className="ml-2 flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-2 text-blue-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
          </svg>{" "}
          Categories :
        </p>
        <ul className="font-extralight text-lg ">
          <li
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent  my-3 ${
              selectedCat == 0 && "border-l-2 border-blue-600"
            }`}
            onClick={() => getFeaturedProducts()}
          >
            All
          </li>
          <li
            onClick={() => categoryHandler(`6439d5b90049ad0b52b90048`)}
            key={`6439d5b90049ad0b52b90048`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d5b90049ad0b52b90048` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Men's Fashion
          </li>
          <li
            onClick={() => categoryHandler(`6439d58a0049ad0b52b9003f`)}
            key={`6439d58a0049ad0b52b9003f`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d58a0049ad0b52b9003f` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Women's Fashion
          </li>
          <li
            onClick={() => categoryHandler(`6439d2d167d9aa4ca970649f`)}
            key={`6439d2d167d9aa4ca970649f`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d2d167d9aa4ca970649f` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Electronics
          </li>
          <li
            onClick={() => categoryHandler(`6439d2f467d9aa4ca97064a8`)}
            key={`6439d2f467d9aa4ca97064a8`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d2f467d9aa4ca97064a8` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Mobiles
          </li>
          {/* {categoryData.map((cat) => (
            <li
              onClick={() => categoryHandler(cat._id)}
              key={cat._id}
              className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
                selectedCat == cat._id && "border-l-2 border-blue-600"
              }`}
            >
              {cat.name}
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
=======
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function FilterCategory({
  setEditData,
  getAllCategories,
  getFeaturedProducts,
  categoryData,
  selectedCat,
  setSelectedCat,
}) {
  const categoryHandler = (id) => {
    getAllCategories(id);
    setSelectedCat(id);
  };
  return (
    <>
      <div className="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible md:opacity-1 opacity-1 mb-10 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium border border-gray-200  bg-white dark:border-neutral-800 dark:bg-black rounded-xl  pb-0 py-5 transition-all animate-fadeIn">
        <p className="ml-2 flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-2 text-blue-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
          </svg>{" "}
          Categories :
        </p>
        <ul className="font-extralight text-lg ">
          <li
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent  my-3 ${
              selectedCat == 0 && "border-l-2 border-blue-600"
            }`}
            onClick={() => getFeaturedProducts()}
          >
            All
          </li>
          <li
            onClick={() => categoryHandler(`6439d5b90049ad0b52b90048`)}
            key={`6439d5b90049ad0b52b90048`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d5b90049ad0b52b90048` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Men's Fashion
          </li>
          <li
            onClick={() => categoryHandler(`6439d58a0049ad0b52b9003f`)}
            key={`6439d58a0049ad0b52b9003f`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d58a0049ad0b52b9003f` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Women's Fashion
          </li>
          <li
            onClick={() => categoryHandler(`6439d2d167d9aa4ca970649f`)}
            key={`6439d2d167d9aa4ca970649f`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d2d167d9aa4ca970649f` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Electronics
          </li>
          <li
            onClick={() => categoryHandler(`6439d2f467d9aa4ca97064a8`)}
            key={`6439d2f467d9aa4ca97064a8`}
            className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
              selectedCat == `6439d2f467d9aa4ca97064a8` &&
              "border-l-2 border-blue-600"
            }`}
          >
            Mobiles
          </li>
          {/* {categoryData.map((cat) => (
            <li
              onClick={() => categoryHandler(cat._id)}
              key={cat._id}
              className={`py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 animate-fadeIn ${
                selectedCat == cat._id && "border-l-2 border-blue-600"
              }`}
            >
              {cat.name}
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
