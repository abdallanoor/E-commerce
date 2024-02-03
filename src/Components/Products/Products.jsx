import React from 'react'
// import Style from './Products.module.css'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { increase,decrease } from '../../Redux/CounterSlice';

export default function Products() {

  let { counter } = useSelector((store) => store.counter)

  let dispatsh = useDispatch()
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Products</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Products {counter}</h1>
    <button onClick={() => dispatsh(increase())} className='btn btn-danger'>Increase</button>
    <button onClick={() => dispatsh(decrease())} className='btn btn-danger mx-3'>Decrease</button>
  </>

}
