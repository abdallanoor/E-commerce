<<<<<<< HEAD
<<<<<<< HEAD
function ImageSlider({ imageList, setImgIndex, imgIndex, alt }) {
  return (
    <div className="flex lg:flex-row lg:min-w-96 h-full w-full basis-full lg:basis-5/12 flex-col-reverse justify-around items-center">
      <div className="flex flex-row lg:flex-col flex-wrap justify-around">
        {imageList.map((image, index) => (
          <img
            className={`lg:w-20 md:w-16 w-14 lg:h-20 md:h-16 h-14 my-5  max-md:mx-2 max-lg:mx-5  object-contain rounded-md cursor-pointer  ${
              imgIndex === index ? "opacity-30" : ""
            }`}
            key={index}
            src={image}
            onClick={() => setImgIndex(index)}
            alt={alt}
            width="80px"
            height="80px"
          />
        ))}
      </div>
      <img
        className="lg:w-4/6 max-sm:w-full rounded-md object-cover"
        src={imageList[imgIndex]}
        alt={alt}
        width="290px"
        height="480px"
      />
    </div>
  );
}

export default ImageSlider;
=======
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
import Slider from "react-slick";

function ImageSlider({ imageList, setImgIndex, imgIndex, alt }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="w-full basis-1/3 flex flex-col gap-5 items-center">
      <img
        className="lg:w-72 max-sm:w-full h-96 rounded-md object-cover"
        src={imageList[imgIndex]}
        alt={alt}
        width="290px"
        height="480px"
      />

      <Slider {...settings} className="w-64">
        {imageList.map((image, index) => (
          <img
            className={`rounded-md w-20 h-20 object-cover cursor-pointer border hover:border-grayshade-50 dark:border-grayshade-300 transition-colors ${
              imgIndex === index ? "opacity-50 border-grayshade-50" : ""
            }`}
            key={index}
            src={image}
            onClick={() => setImgIndex(index)}
            alt={`${alt} ${index + 1}`}
            width="80px"
            height="80px"
          />
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
<<<<<<< HEAD
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
