import React, { useEffect } from 'react'
// import Style from './Categories.module.css'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/CategoriesSlice';
import { ThreeDots } from 'react-loader-spinner';


export default function Categories() {
  let dispatch = useDispatch()
  let { isLoading, isError, categories } = useSelector((store) => store.categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Categories</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    <h1>Categories</h1>

    {isLoading ? <div className='loading'>
      <ThreeDots />
    </div> :
      <div className="row">
        {categories.map((category) => <div className="col-md-2" key={category._id}>
          <div className="category cursor-pointer"  >
            <img className='w-100' src={category.image} alt={category.name} />
            <h4 className="h6 my-2">{category.name}</h4>
          </div>
        </div>)}
      </div>
    }
  </>

}
