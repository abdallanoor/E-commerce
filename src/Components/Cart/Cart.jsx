import React, { useContext, useState } from 'react'
// import Style from './Cart.module.css'
import { Helmet } from "react-helmet";
import { cartContext } from './../../Context/CartContext';
import { ThreeDots } from "react-loader-spinner";
//
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../ToastAlerts";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartDetails, setCartDetails] = useState(null)

  let { getLoggedUserCart, removeCart, updateCart, removeAllCarts } = useContext(cartContext);
  //get cart
  async function getCart() {
    let { data } = await getLoggedUserCart()
    setCartDetails(data)
  }

  //Remove
  async function removeItem(id) {
    let { data } = await removeCart(id)
    setCartDetails(data)
    if (data.status === "success") {
      toastSuccess("Product Deleted.")
    }
  }
  //update count
  async function updateCount(id, count) {
    let { data } = await updateCart(id, count)
    setCartDetails(data)
    if (data.status === "success") {
      toastSuccess("Item Count Update.")
    }
  }
  //remove all
  async function removeAllItems() {
    let { data } = await removeAllCarts()
    setCartDetails(data)
    if (data.status === "success") {
      toastSuccess("Cart Removed.")
    }
  }
  useEffect(() => {
    getCart()
  }, [])

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cart</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Cart</h1>
    <ToastContainer
      position="bottom-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {cartDetails ? <div className='w-75 my-3 mx-auto p-3 bg-main-light'>
      <h3>Shopping Cart</h3>
      <h4 className="h6 text-main fw-bolder">Cart Item : {cartDetails.numOfCartItems}</h4>
      <h4 className="h6 text-main fw-bolder mb-4">Total Cart Price : {cartDetails.data.totalCartPrice} EGP</h4>
      {cartDetails.data.products.map((product) =>
        <div key={product.product.id} className='row border-bottom py-2'>
          <div className="col-md-2">
            <img className='w-100 mb-2' src={product.product.imageCover} alt={product.product.title} />
          </div>
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="h6">{product.product.title.split(' ').slice(0, 3).join(' ')}</h3>
                <h6 className="text-main">Price : {product.price} EGP</h6>
              </div>
              <div>
                <button onClick={() => updateCount(product.product._id, product.count + 1)} className='btn brdr-main p-1'>+</button>
                <span className='mx-2'>{product.count}</span>
                <button onClick={() => updateCount(product.product._id, product.count - 1)} className='btn brdr-main p-1'>-</button>
              </div>
            </div>
            <button onClick={() => removeItem(product.product.id)} className='btn p-0' ><i className='text-danger fas fa-trash-can'></i> Remove</button>
          </div>
        </div>)}
      <div className="d-flex justify-content-between mt-3">
        <Link to={'/address'} className='btn btn-success text-white'>Online Payment</Link>
        <button className='btn btn-success'>Cach On Delevary</button>
        <button onClick={removeAllItems} className='btn btn-danger'>Remove All Carts</button>
      </div>

    </div> : <div className="w-100 py-5 d-flex justify-content-center">
      <ThreeDots />{" "}
    </div>}
  </>

}
