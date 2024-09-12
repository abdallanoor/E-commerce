import React from "react";
// import Style from './Notfound.module.css'
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <main className="flex items-center justify-center p-2 md:p-16 h-screen relative z-0 bg-black">
        <section className="flex items-center  justify-center mx-auto flex-col">
          <h1 className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-900 text-transparent bg-clip-text text-[100px] font-extrabold leading-[152px]">
            404
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-white leading-[70px]">
            Oops! The page does not exist
          </h2>
          <div className="my-10 w-full ">
            <p className=" text-center text-blue-600 text-2xl leading-[31px]">
              Sorry! We couldn’t find the page.
            </p>
          </div>
          <Link
            className="flex items-center justify-center min-h-[48px] cursor-pointer rounded-full  bg-blue-600 px-6 py-3  text-[14px] font-semibold leading-[16px] text-white"
            to="/"
          >
            Go back to Homepage →
          </Link>

          <div className="flex items-center justify-center absolute inset-0 z-[-1] flex-col lg:flex-row">
            <div className="flex items-center justify-center h-full w-full">
              <div className="texture-animated h-full w-full lg:h-[85%] lg:w-[85%] 3xl:h-full 3xl:w-full"></div>
            </div>
            <div className="flex items-center justify-center h-full w-full">
              <div className="texture-animated h-full w-full lg:h-[85%] lg:w-[85%] 3xl:h-full 3xl:w-full"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
