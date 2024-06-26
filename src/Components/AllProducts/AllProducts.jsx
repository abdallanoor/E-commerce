import { useState, useEffect } from "react";
import axios from "axios";
import noData from "../../Assets/images/No data.svg";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import ProductLoading from "./../Loading/ProductLoading";
import FilterCategory from "./FilterCategory";

export default function AllProducts() {
  const [productloading, setProductLoading] = useState(false);
  const [editData, setEditData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCat, setSelectedCat] = useState(0);

  let param = useParams();

  function getFeaturedProducts() {
    setProductLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((response) => {
        setEditData(response?.data?.data.reverse());
        setSelectedCat(0);
        setProductLoading(false);
      });
  }
  function getCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) => {
        setCategoryData(response?.data?.data);
        setSelectedCat(response?.data?.data._id);
      });
  }

  function getAllCategories(id) {
    setProductLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/?category=${id}`)
      .then((response) => {
        setEditData(response?.data?.data.reverse());
        console.log(response?.data?.data);
        setProductLoading(false);
      });
  }

  useEffect(() => {
    getFeaturedProducts();
    getCategories();
  }, []);

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
        <h1 className="text-3xl font-bold mb-10">All Products</h1>
        <div className=" flex lg:flex-row flex-col-reverse animate-fadeIn">
          <>
            {productloading ? (
              <ProductLoading />
            ) : (
              <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 animate-fadeIn">
                {editData.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
                })}
                {editData.length == 0 && (
                  <div className="col-span-3 flex flex-col items-center justify-center text-xl mb-20 w-full animate-fadeIn">
                    <img src={noData} alt="No Data" className="w-72" />
                    <p>Sorry Products Is Not Available..</p>
                  </div>
                )}
              </div>
            )}
          </>
          <FilterCategory
            setEditData={setEditData}
            getAllCategories={getAllCategories}
            getFeaturedProducts={getFeaturedProducts}
            categoryData={categoryData}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        </div>
      </section>
    </>
  );
}
