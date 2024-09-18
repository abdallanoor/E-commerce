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
        cacheTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
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
        <h1 className="text-3xl font-bold mb-8">Products</h1>
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
