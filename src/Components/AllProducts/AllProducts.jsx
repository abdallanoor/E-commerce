import axios from "axios";
import noData from "../../Assets/images/No data.svg";
import { ToastContainer } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import ProductLoading from "./../Loading/ProductLoading";
import FilterCategory from "./FilterCategory";
import { useQuery } from "react-query";

export default function AllProducts() {
  const param = useParams();
  const { pathname } = useLocation();

  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = productsData?.data?.data
    .filter((product) => {
      if (!param.category) return true;
      return product.category.slug === param.category;
    })
    .reverse();

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
      <section className="wrapper">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        <div className=" flex lg:flex-row flex-col-reverse">
          <>
            {isLoading ? (
              <ProductLoading />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-4 w-full animate-fadeIn">
                {filteredProducts.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
                })}
                {filteredProducts.length == 0 && (
                  <div className="col-span-3 flex flex-col items-center justify-center text-xl mb-20 w-full animate-fadeIn">
                    <img src={noData} alt="No Data" className="w-72" />
                    <p>Sorry Products Is Not Available..</p>
                  </div>
                )}
              </div>
            )}
          </>

          <FilterCategory pathname={pathname} />
        </div>
      </section>
    </>
  );
}
