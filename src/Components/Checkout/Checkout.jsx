import { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { cartContext } from "../../Context/CartContext";
import { userContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import {
  IdentificationIcon,
  PhoneIcon,
  BanknotesIcon,
  HomeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import logo from "../../Assets/images/LogoSvg.svg";
import logo2 from "../../Assets/images/LogoSvg2.svg";
import register from "../../Assets/images/register.jpg";
import LoadingDots from "../Loading/LoadingDots";

export default function Address() {
  const [payLoading, setPayLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cashPayment, onlinePayment, cartId, getCart, cartDetails } =
    useContext(cartContext);
  const { userToken } = useContext(userContext);

  const handlePayment = async (action, values, setSubmitting) => {
    try {
      action === "onlinePayment" ? setPayLoading(true) : setLoading(true);
      const { data } =
        action === "onlinePayment"
          ? await onlinePayment(cartId, "https://pixelstore.vercel.app", {
              shippingAddress: values,
            })
          : await cashPayment(cartId, { shippingAddress: values });
      action === "onlinePayment" ? setPayLoading(false) : setLoading(false);
      window.location.href =
        action === "onlinePayment"
          ? data?.session.url
          : "https://pixelstore.vercel.app/allorders";
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: { details: "", phone: "", city: "" },
    onSubmit: (values, { setSubmitting }) =>
      handlePayment(values.submitAction, values, setSubmitting),
  });

  useEffect(() => {
    if (userToken) getCart();
  }, [userToken]);

  const renderInputField = (id, name, type, placeholder, Icon) => (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-transparent dark:text-white dark:border-neutral-600 dark:placeholder:text-neutral-400 disabled:opacity-50 disabled:cursor-no-drop"
        disabled={cartDetails?.numOfCartItems === 0}
      />
      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
        <Icon className="h-4 w-4 text-gray-400" />
      </span>
    </div>
  );

  const renderButton = (action, label, Icon, isLoading) => (
    <button
      type="submit"
      onClick={() =>
        formik.setValues({ ...formik.values, submitAction: action })
      }
      disabled={
        !(formik.isValid && formik.dirty) ||
        isLoading ||
        cartDetails?.numOfCartItems === 0
      }
      className="flex items-center w-full justify-center gap-2 rounded-md px-12 py-3 text-sm font-medium text-white dark:text-black bg-black dark:bg-white disabled:opacity-50"
    >
      {label}
      {isLoading ? (
        <LoadingDots className="bg-white dark:bg-black" />
      ) : (
        <Icon className="w-5" />
      )}
    </button>
  );

  return (
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
              <img src={logo} alt="logo" className="h-8 sm:h-10" />
            </Link>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-7">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20 dark:bg-black"
                to="/"
              >
                <img src={logo2} alt="Logo2" className="h-8 sm:h-10" />
              </Link>
            </div>
            {cartDetails?.numOfCartItems === 0 && (
              <p className="text-red-600 font-bold">
                Your cart is empty. Please add items to proceed.
              </p>
            )}

            <div>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Checkout
              </h1>
              <p className="text-sm text-neutral-400 mt-1 dark:text-neutral-300">
                Please enter your information to proceed with the checkout.
              </p>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                {renderInputField("city", "city", "text", "City", HomeIcon)}
              </div>
              <div className="col-span-6 sm:col-span-3">
                {renderInputField("phone", "phone", "tel", "Phone", PhoneIcon)}
              </div>
              <div className="col-span-6">
                {renderInputField(
                  "details",
                  "details",
                  "text",
                  "Details",
                  IdentificationIcon
                )}
              </div>

              <div className="col-span-6 flex justify-between items-center gap-4 flex-col sm:flex-row">
                {renderButton(
                  "onlinePayment",
                  "Payment",
                  BanknotesIcon,
                  payLoading
                )}
                {renderButton("delivery", "Delivery", TruckIcon, loading)}
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
