import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import Style from './Products.module.css'
import { cartContext } from "../../Context/CartContext";
//
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../ToastAlerts";
export default function FeaturedProducts() {

  //getFeaturedProducts
  function getFeaturedProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isFetching, isError, refetch } = useQuery(
    "fraturedProducts",
    getFeaturedProducts,
    {
      // cacheTime: 3000,
      // refetchOnMount: false,
      // staleTime: 30000,
      // refetchInterval: 1000
    }
  );
  //Add To Cart
  let { addToCart } = useContext(cartContext);
  async function addProduct(productId) {
    let response = await addToCart(productId);
    if (response.data.status === "success") {
      toastSuccess("Product Successfully Added.");
    }
  }

  return (
    <>
      <h1 className="mb-3">Featured Products</h1>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading ? (
        <div className="w-100 py-5 d-flex justify-content-center">
          <ThreeDots />{" "}
        </div>
      ) : (
        <div className="row">
          {data?.data.data.map((product) => (
            <div key={product._id} className="col-md-3 mb-2">
              <div className="product overflow-hidden cursor-pointer px-2 py-2">
                <Link to={`/ProductDetails/${product.id}`}>
                  <img
                    className="w-100"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  <span className="text-main font-sm fw-bolder">
                    {product.category.name}
                  </span>
                  <h3 className="h6">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <h3></h3>
                  <div className="d-flex justify-content-between mt-3">
                    <span>{product.price} EGP</span>
                    <span>
                      <i className="fas fa-star rating-color">
                        {product.ratingsAverage}
                      </i>
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => addProduct(product.id)}
                  className="btn bg-main w-100 text-white btn-sm mt-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
