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
