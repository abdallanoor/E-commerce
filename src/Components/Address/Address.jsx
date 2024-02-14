import React, { useContext, useState } from "react";
// import Style from './Address.module.css'
import { useFormik } from "formik";
import { cartContext } from "../../Context/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  AtSymbolIcon,
  IdentificationIcon,
  PhoneIcon,
  LockClosedIcon,
  CheckCircleIcon,
  BanknotesIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import logo from "../../Assets/images/LogoSvg.svg";
import logo2 from "../../Assets/images/LogoSvg2.svg";
import register from "../../Assets/images/register.jpg";
import LoadingDots from "./../LoadingDots/LoadingDots";

export default function Address() {
  //Loading
  const [Loading, setLoading] = useState(false);

  let { onlinePayment, cartId } = useContext(cartContext);
  async function onSubmit(values) {
    setLoading(true);
    let { data } = await onlinePayment(cartId, "http://localhost:3000", {
      shippingAddress: values,
    });
    window.location.href = data?.session.url;
    setLoading(false);
  }
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit,
  });
  return (
    <>
      <section>
        <div className="lg:grid h-section lg:grid-cols-12 animate-fadeIn">
          <section className="relative flex h-32 items-end bg-neutral-900 lg:col-span-5 lg:h-full xl:col-span-5">
            <img
              alt="register"
              src={register}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" to="/">
                <span className="sr-only">Home</span>
                <img src={logo} alt="logo" className="h-8 sm:h-10" />
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Online Payment
              </h2>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-7">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20 dark:bg-black"
                  to="/"
                >
                  <span className="sr-only">Home</span>
                  <img src={logo2} alt="Logo2" className="h-8 sm:h-10" />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                  Online Payment
                </h1>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="city" className="sr-only">
                    City :
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text"
                      name="city"
                      id="city"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="City"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <HomeIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone" className="sr-only">
                    Phone :
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Phone"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <PhoneIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                </div>

                <div className="col-span-6">
                  <label htmlFor="details" className="sr-only">
                    Details :
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.details}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text"
                      name="details"
                      id="details"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Details"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <IdentificationIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={formik.handleSubmit}
                    disabled={!(formik.isValid && formik.dirty)}
                    className="flex items-center justify-center gap-2 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition  hover:bg-blue-700 hover:text-white"
                  >
                    Pay Now <BanknotesIcon className="w-5 " />
                    {Loading ? <LoadingDots className="bg-white" /> : ""}
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

      {/* <form className="mt-3" onSubmit={formik.handleSubmit}>
        <h1>Online Payment</h1>
        <div className="form-group mb-2">
          <label htmlFor="details">Details :</label>
          <input
            type="text"
            name="details"
            id="details"
            className="form-control"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="city">City :</label>
          <input
            type="text"
            name="city"
            id="city"
            className="form-control"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {Loading ? (
          <button className="btn btn-success text-white mt-2">
            <i className="fas fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button
            className="btn btn-success text-white mt-2"
            onClick={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Pay Now
          </button>
        )}
      </form> */}
    </>
  );
}
