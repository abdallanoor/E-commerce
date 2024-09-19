import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import {
  AtSymbolIcon,
  IdentificationIcon,
  PhoneIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import logoNav from "../../Assets/images/logo.png";
import logo from "../../Assets/images/LogoSvg.svg";
import logo2 from "../../Assets/images/LogoSvg2.svg";
import register from "../../Assets/images/register.jpg";

import LoadingDots from "./../Loading/LoadingDots";
import DarkMode from "./../DarkMode/DarkMode";

export default function Register() {
  //Navigate
  let Navigate = useNavigate();
  //Yup Validation
  let userSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name minlenght is 3")
      .max(20, "Name maxlenght is 20")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/, "phone is invalid")
      .required("Phone is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,10}$/, "Password start with Uppercase")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "")
      .required("Password Confirmation is required"),
  });

  //Loading
  const [Loading, setLoading] = useState(false);
  //Error Message
  const [Error, setError] = useState(null);
  //Post Api
  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios
      .post(`${process.env.REACT_APP_API_KEY}/auth/signup`, values)
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
    if (data.message === "success") {
      setLoading(false);
      Navigate("/login");
    }
  }

  //Set Variables Use Hook useFormik
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: userSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <section>
        <div className="relative flex items-center justify-between p-4 lg:px-6">
          <Link
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            to="/"
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white  dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl overflow-hidden">
              <img src={logoNav} alt="pixel store" />
            </div>
            <div className="ml-2 flex-none text-sm font-bold uppercase">
              pixel Store
            </div>
          </Link>
          <div className="hidden">
            <DarkMode />
          </div>
        </div>
        <div className="lg:grid min-h-[calc(100vh-72px)] lg:grid-cols-12">
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
                Welcome to Pixel Store
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Explore fashion trends, enhance your shopping online. Register
                for exclusive deals & seamless purchasing.
              </p>
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
                  Welcome to Pixel Store
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Explore fashion trends, enhance your shopping online. Register
                  for exclusive deals & seamless purchasing.
                </p>
              </div>

              {Error ? (
                <div
                  role="alert"
                  className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-6"
                >
                  <p className="block font-medium text-red-800 dark:text-red-50">
                    {Error}
                  </p>
                </div>
              ) : (
                ""
              )}

              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Name"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <IdentificationIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                  {formik.errors.name && formik.touched.name ? (
                    <div
                      role="alert"
                      className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                    >
                      <p className="block font-medium text-red-800 dark:text-red-50">
                        {formik.errors.name}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone" className="sr-only">
                    Phone
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

                  {formik.errors.phone && formik.touched.phone ? (
                    <div
                      role="alert"
                      className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                    >
                      <p className="block font-medium text-red-800 dark:text-red-50">
                        {formik.errors.phone}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="email"
                      id="email"
                      type="email"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <AtSymbolIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>

                  {formik.errors.email && formik.touched.email ? (
                    <div
                      role="alert"
                      className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                    >
                      <p className="block font-medium text-red-800 dark:text-red-50">
                        {formik.errors.email}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      id="password"
                      name="password"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <LockClosedIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <div
                      role="alert"
                      className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                    >
                      <p className="block font-medium text-red-800 dark:text-red-50">
                        {formik.errors.password}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password Confirmation" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      value={formik.values.rePassword}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      id="Password Confirmation"
                      name="rePassword"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                      placeholder="Password Confirmation"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <CheckCircleIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>

                  {formik.errors.rePassword && formik.touched.rePassword ? (
                    <div
                      role="alert"
                      className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                    >
                      <p className="block font-medium text-red-800 dark:text-red-50">
                        {formik.errors.rePassword}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-neutral-900 dark:focus:ring-offset-gray-900"
                    />

                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className="flex items-center cursor-pointer shrink-0 rounded-md bg-black px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring dark:bg-white dark:text-black"
                  >
                    Create an account
                    {Loading ? (
                      <LoadingDots className="bg-white dark:bg-black" />
                    ) : (
                      ""
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      Login
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
