import React from 'react'
// import Style from './MainSlider.module.css'
import Slider from "react-slick";
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return <>
    <div className="row gx-0">
      <div className="col-md-9 mb-4">
        <Slider  {...settings}>
          <img height={450} className='fit-main w-100' src={slide1} alt="slider" />
          <img height={450} className='fit-main w-100' src={slide3} alt="slider" />
          <img height={450} className='fit-main w-100' src={slide2} alt="slider" />
        </Slider>
      </div>
      <div className="col-md-3 mb-4">
        <img height={225} className='w-100 fit-main' src={slide3} alt="slider" />
        <img height={225} className='w-100 fit-main' src={slide2} alt="slider" />
      </div>
    </div>

  </>

}
