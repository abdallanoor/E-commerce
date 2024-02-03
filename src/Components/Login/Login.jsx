import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userContext } from "../../Context/UserContext";

// import Style from './Login.module.css'

export default function Login() {
  let { setUserToken } = useContext(userContext)
  //Navigate
  let Navigate = useNavigate();
  //Yup Validation
  let userSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,10}$/, "Password start with Uppercase")
      .required("password is required")
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
      localStorage.setItem('userToken', data.token)
      //set Token in var.. userToken
      setUserToken(data.token)
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
      <div className="w-75 mx-auto py-4">
        <h2>Login Now</h2>
        {Error ? <div className="alert alert-danger p-2">{Error}</div> : ""}

        <form onSubmit={formik.handleSubmit}>

          <label htmlFor="email">Email :</label>
          <input
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="email"
            id="email"
            type="email"
            className="form-control mb-2"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger p-2">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">password :</label>
          <input
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="password"
            type="password"
            id="password"
            className="form-control mb-2"
            autoComplete="on"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger p-2">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}


          {Loading ? (
            <button type="submit" className="btn bg-main text-white mt-2">
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="btn bg-main text-white mt-2"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}
