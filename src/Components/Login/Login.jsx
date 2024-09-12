import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { userContext } from "../../Context/UserContext";
import { cartContext } from "./../../Context/CartContext";
import logo from "../../Assets/images/logo.png";
import {
  AtSymbolIcon,
  EyeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import LoadingDots from "./../Loading/LoadingDots";
import DarkMode from "./../DarkMode/DarkMode";

export default function Login() {
  let { setUserToken } = useContext(userContext);
  let { assignHeader } = useContext(cartContext);
  //Navigate
  let Navigate = useNavigate();
  //Yup Validation
  let userSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,10}$/, "Password start with Uppercase")
      .required("Password is required"),
  });

  //Loading
  const [Loading, setLoading] = useState(false);
  //Error Message
  const [Error, setError] = useState(null);
  //Post Api
  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
    if (data.message === "success") {
      setLoading(false);
      //set Token in localstorage
      localStorage.setItem("userToken", data.token);
      //set Token in var.. userToken
      setUserToken(data.token);
      assignHeader();
      Navigate("/");
    }
  }

  //Set Variables Use Hook useFormik
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <section className="min-h-[calc(100vh-72px)]">
        <div className="relative flex items-center justify-between p-4 lg:px-6">
          <Link
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            to="/"
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white  dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl overflow-hidden">
              <img src={logo} alt="pixel store" />
            </div>
            <div className="ml-2 flex-none text-sm font-bold uppercase">
              pixel Store
            </div>
          </Link>
          <div className="hidden">
            <DarkMode />
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="mx-auto max-w-screen-xl min-h-[calc(100vh-72px)] px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl font-bold  sm:text-3xl">
              Hala! Let's get started
            </h1>
            {/* <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Explore fashion trends, enhance your shopping online. Login for
              exclusive deals & seamless purchasing.
            </p> */}
            <div className="mx-auto mt-4 max-w-md text-center text-gray-500">
              <div>For Test</div>
              <div>Email: abdallah@yahoo.com</div>
              <div>Password: Abdo123</div>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg dark:shadow-sm dark:shadow-neutral-600 sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">
                Login to your account
              </p>
              {Error ? (
                <div
                  role="alert"
                  className="rounded border-s-4 flex gap-1 border-red-500 bg-red-50 dark:bg-red-700/10 p-3 mt-2"
                >
                  <p className="block font-medium text-red-800 dark:text-red-50">
                    {Error}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div>
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
                    placeholder="Enter email"
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

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="password"
                    type="password"
                    id="password"
                    className="w-full rounded-lg border border-gray-200  p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400"
                    placeholder="Enter password"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <EyeIcon className="h-4 w-4 text-gray-400" />
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

              <button
                type="submit"
                className="relative flex items-center justify-center w-full h-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
              >
                Login
                <div className="absolute text-white right-0 mr-4">
                  {Loading ? (
                    <LoadingDots className="mb-3 bg-white " />
                  ) : (
                    <PaperAirplaneIcon className="h-4 text-white" />
                  )}
                </div>
              </button>

              <p className="text-center text-sm text-gray-500">
                No account?{" "}
                <Link
                  className="text-gray-700 underline dark:text-gray-200"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
