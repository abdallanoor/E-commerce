import React, { useContext } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { ThreeDots } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { cartContext } from "../../Context/CartContext";
// import Style from './ProductDetails.module.css'

export default function ProductDetails() {

  let param = useParams()

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  let { data, isLoading, isError } = useQuery('ProductDetails', () => getProductDetails(param.id), {
    // cacheTime: 3000,
    // refetchOnMount: false,
    // staleTime: 30000,
    // refetchInterval: 1000
  })
  //Add To Cart
  let { addToCart } = useContext(cartContext);
  async function addProduct(productId) {
    let response = await addToCart(productId);
    console.log(response);
  }
  return <>
    <h1>ProductDetails</h1>
    {data?.data.data ? <div className='row py-2 align-items-center'>
      <div className="col-md-4">
        <img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
      </div>
      <div className="col-md-8">
        <h2 className="h5">{data?.data.data.title}</h2>
        <p>{data?.data.data.description}</p>
        <h6 className='text-main'>{data?.data.data.category.name}</h6>
        <h6 className='text-main'>{data?.data.data.price} EGP</h6>
        <div className="d-flex justify-content-between">
          <span>Ratings Quantity : {data?.data.data.ratingsQuantity}</span>
          <span><i className='fas fa-star rating-color'>{data?.data.data.ratingsAverage}</i></span>
        </div>
        <button onClick={() => addProduct(data?.data.data.id)} className='btn bg-main text-white w-100 mt-2'>Add To Cart</button>
      </div>
    </div> : ''}
  </>

}
