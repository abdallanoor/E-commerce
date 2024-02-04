import React from "react";
// import Style from './MainSlider.module.css'
import Slider from "react-slick";
import slide1 from "../../Assets/images/t-shirt-1.avif";
import slide2 from "../../Assets/images/hat-1.avif";
import slide3 from "../../Assets/images/bag-1-dark.avif";
import slide4 from "../../Assets/images/banner-4.jpeg";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 ">
        <div className="md:col-span-4 md:row-span-2">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/acme-geometric-circles-t-shirt"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img
                alt="Acme Circles T-Shirt"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                sizes="(min-width: 768px) 66vw, 100vw"
                src={slide1}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    Acme Circles T-Shirt
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $20.00
                    <span className="ml-1 inline  @[275px]/label:inline">
                      USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/acme-drawstring-bag"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white  hover:border-blue-600 dark:hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img
                alt="Acme Drawstring Bag"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                sizes="(min-width: 768px) 33vw, 100vw"
                src={slide2}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    Acme Drawstring Bag
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $12.00
                    <span className="ml-1 inline  @[275px]/label:inline">
                      USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/acme-cup"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img
                alt="Acme Cup"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                sizes="(min-width: 768px) 33vw, 100vw"
                src={slide3}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    Acme Cup
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $15.00
                    <span className="ml-1 inline  @[275px]/label:inline">
                      USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* <div className="row gx-0">
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
    </div> */}
    </>
  );
}
