import axios from "axios";
import noData from "../../Assets/images/No data.svg";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import ProductItem from "./ProductItem";
import ProductLoading from "./../Loading/ProductLoading";
import FilterCategory from "./FilterCategory";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { useEffect } from "react";

export default function AllProducts() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const categoryId = searchParams.get("category");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchProducts = async ({ pageParam = 1 }) => {
    const url = categoryId
      ? `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}&page=${pageParam}&limit=6`
      : `https://ecommerce.routemisr.com/api/v1/products?page=${pageParam}&limit=6`;
    const response = await axios.get(url);
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(
      categoryId ? ["products", categoryId] : ["products"],
      fetchProducts,
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.data.length === 0) {
            return undefined;
          }
          return allPages.length + 1;
        },
      }
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="wrapper min-h-screen">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-4 w-full animate-fadeIn">
            {isLoading ? (
              [1, 2, 3].map((i) => <ProductLoading key={i} />)
            ) : (
              <>
                {data?.pages.map((page) =>
                  page.data.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                )}

                {data?.pages[0]?.data.length === 0 && (
                  <div className="col-span-3 flex flex-col items-center justify-center text-xl mb-20 w-full animate-fadeIn">
                    <img src={noData} alt="No Data" className="w-72" />
                    <p>Sorry, Products Are Not Available..</p>
                  </div>
                )}
                {isFetchingNextPage &&
                  [1, 2, 3].map((i) => <ProductLoading key={i} />)}
              </>
            )}
          </div>

          <FilterCategory categoryId={categoryId} />
        </div>

        <div ref={ref} className="h-10 mt-24"></div>
      </section>
    </>
  );
}

// import axios from "axios";
// import noData from "../../Assets/images/No data.svg";
// import { ToastContainer } from "react-toastify";
// import { Link, useLocation, useParams } from "react-router-dom";
// import ProductItem from "./ProductItem";
// import ProductLoading from "./../Loading/ProductLoading";
// import FilterCategory from "./FilterCategory";
// import { useInfiniteQuery } from "react-query";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";
// import { SquaresPlusIcon } from "@heroicons/react/24/outline";
// import { categories } from "../../constants";

// export default function AllProducts() {
//   const param = useParams();
//   } = useLocation();
//   const [limit, setLimit] = useState(6); // Control the limit of products per page
//   const { ref, inView } = useInView(); // IntersectionObserver

//   // Fetch products with pagination
//   const fetchProducts = ({ pageParam = 1 }) => {
//     return axios.get(
//       `https://ecommerce.routemisr.com/api/v1/products?page=${pageParam}&limit=${limit}`
//     );
//   };

//   const {
//     data: productsData,
//     isLoading,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//   } = useInfiniteQuery("products", fetchProducts, {
//     getNextPageParam: (lastPage, allPages) => {
//       const nextPage = allPages.length + 1;
//       return lastPage?.data?.data.length ? nextPage : undefined;
//     },
//   });

//   // Filter products based on category
//   const filteredProducts = productsData?.pages
//     ?.flatMap((page) => page.data.data)
//     .filter((product) =>
//       param.category ? product.category.slug === param.category : true
//     );

//   // Trigger fetch when inView changes
//   useEffect(() => {
//     if (inView && hasNextPage) {
//       fetchNextPage();
//     }
//   }, [inView, hasNextPage, fetchNextPage]);

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <section className="wrapper">
//         <h1 className="text-3xl font-bold mb-8">All Products</h1>
//         <div className="flex lg:flex-row flex-col-reverse">
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-4 w-full animate-fadeIn">
//             {isLoading &&
//               [1, 2, 3].map((_, index) => (
//                 <ProductLoading key={`loading-${index}`} />
//               ))}

//             {filteredProducts?.map((product) => (
//               <ProductItem key={product.id} product={product} />
//             ))}

//             {filteredProducts?.length === 0 && (
//               <div className="col-span-3 flex flex-col items-center justify-center text-xl mb-20 w-full animate-fadeIn">
//                 <img src={noData} alt="No Data" className="w-72" />
//                 <p>Sorry, products are not available.</p>
//               </div>
//             )}

//             {isFetching &&
//               [1, 2, 3].map((_, index) => (
//                 <ProductLoading key={`loading-fetching-${index}`} />
//               ))}
//           </div>

//           {/* <FilterCategory pathname={pathname} /> */}
//           <div className="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible md:opacity-1 opacity-1 mb-10 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium border border-gray-200  bg-white dark:border-neutral-800 dark:bg-black rounded-xl  pb-0 py-5 transition-all">
//             <p className="ml-2 flex items-center gap-1">
//               <SquaresPlusIcon className="h-5 w-5 text-blue-600" />
//               Categories :
//             </p>
//             <div className="font-extralight text-lg">
//               {categories.map((category) => (
//                 <Link
//                   to={`/products/${category?.slug}`}
//                   key={category.slug}
//                   className={`block py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 dark:to-transparent my-3 border-l-2 border-l-transparent ${
//                     pathname === `/products/${category?.slug}` &&
//                     "border-l-blue-600"
//                   }`}
//                 >
//                   {category.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div ref={ref} className="h-10"></div>
//       </section>
//     </>
//   );
// }
