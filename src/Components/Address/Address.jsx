import React, { useContext, useState } from "react";
// import Style from './Address.module.css'
import { useFormik } from "formik";
import { cartContext } from "../../Context/CartContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

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
      <form className="mt-3" onSubmit={formik.handleSubmit}>
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
      </form>
    </>
  );
}
