import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from "react-slick";
// import Style from './CategorySlider.module.css'

export default function CategorySlider() {
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let { data, isLoading, isError } = useQuery('CategorySlider', getCategories)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return <>
    {data?.data.data ? <Slider className='mb-5' {...settings}>
      {data?.data.data.map((category) => <div key={category._id}><img className='fit mb-2 w-100' src={category.image} alt={category.name}></img> <h2 className="h6 text-center">{category.name}</h2></div>
      )}
    </Slider > : ''
    }
  </>

}
