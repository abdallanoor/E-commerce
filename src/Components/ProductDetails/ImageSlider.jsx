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
