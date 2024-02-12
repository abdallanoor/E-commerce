import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import logo from "../../Assets/images/freshcart-logo.svg";
// import Style from './Navbar.module.css'
import { userContext } from "./../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartMenu from "./../Cart/CartMenu";
import Search from "./Search";
import MobileMenu from "./MobileMenu";

import logo from "../../Assets/images/logo.png";
import DarkMode from "./../DarkMode/DarkMode";

export default function Navbar() {
  //
  let { counter } = useSelector((store) => store.counter);
  //
  let { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  //logout
  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  //

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="fresh mark" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userToken !== null ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products {counter}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/brands">
                      Brands
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <Link to="">
                  <i className="fab fa-facebook mx-2"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-instagram mx-2"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-twitter mx-2"></i>
                </Link>
              </li>

              {userToken !== null ? (
                <>
                  <li className="nav-item">
                    <span
                      onClick={() => logout()}
                      className="nav-link cursor-pointer"
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              to="/"
            >
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white  dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl overflow-hidden">
                <img src={logo} alt="" />
              </div>
              <div className="ml-2 flex-none text-sm font-bold uppercase md:hidden lg:block">
                pixel Store
              </div>
            </Link>
            <ul className="hidden gap-3 text-sm md:flex md:items-center">
              <li>
                <Link
                  className="text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300"
                  to="/search"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300"
                  to="/search/shirts"
                >
                  Orders
                </Link>
              </li>
              {userToken !== null ? (
                <>
                  <li className="">
                    <span
                      onClick={() => logout()}
                      className="text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300 cursor-pointer"
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              <DarkMode />
              {/* <li>
                <SunIcon className="h-5 cursor-pointer" key="light" />
              </li>
              <li>
                <MoonIcon className="h-5 cursor-pointer" key="dark" />
              </li> */}
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div>
          <div className="flex justify-end md:w-1/3">
            <CartMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
