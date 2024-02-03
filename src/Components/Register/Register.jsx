import React from "react";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// import Style from './Register.module.css'

export default function Register() {
  //Navigate
  let Navigate = useNavigate();
  //Yup Validation
  let userSchema = Yup.object({
    name: Yup.string()
      .min(3, "name minlenght is 3")
      .max(20, "name maxlenght is 20")
      .required("name is required"),
    phone: Yup.string()
      .matches(/^01[0125]\d{8}$/, "phone is invalid")
      .required("phone is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,10}$/, "Password start with Uppercase")
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "")
      .required("repassword is required"),
  });

  //Loading
  const [Loading, setLoading] = useState(false);
  //Error Message
  const [Error, setError] = useState(null);
  //Post Api
  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
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
      // photo: ''
    },
    validationSchema: userSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h2>Register Now</h2>
        {Error ? <div className="alert alert-danger p-2">{Error}</div> : ""}

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="name"
            id="name"
            type="text"
            className="form-control mb-2"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger p-2">{formik.errors.name}</div>
          ) : (
            ""
          )}

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

          <label htmlFor="phone">Phone :</label>
          <input
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="phone"
            type="tel"
            id="phone"
            className="form-control mb-2"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger p-2">{formik.errors.phone}</div>
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

          <label htmlFor="rePassword">Re Password :</label>
          <input
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="rePassword"
            type="password"
            id="rePassword"
            className="form-control mb-2"
            autoComplete="on"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger p-2">
              {formik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          {/* <label htmlFor="UploadFile"> Upload File</label>
        <input onChange={(e) =>
          formik.setFieldValue('photo', e.currentTarget.files[0])
        } className='form-control mb-2' type='file' name='photo' accept='image/*' id='UploadFile' /> */}

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
              Register
            </button>
          )}

          {/* <button type='submit' className='btn bg-main text-white mt-2'>Register</button> */}
        </form>
      </div>
    </>
  );
}
