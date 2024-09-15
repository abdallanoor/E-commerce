<<<<<<< HEAD
import { Fragment, useEffect, useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { userContext } from "./../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";
import DarkMode from "./../DarkMode/DarkMode";

export default function MobileMenu() {
  let { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  //logout
  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  //
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  //
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden focus-visible:outline-none"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <button
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white focus-visible:outline-none"
                    onClick={closeMobileMenu}
                    
                  >
                    <XMarkIcon className="h-6" />
                  </button>
                  <button
                    onClick={closeMobileMenu}
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                  >
                    <DarkMode className="h-6" />
                  </button>
                </div>

                <div className="mb-4 w-full">
                  <Search />
                </div>
                <ul className="flex w-full flex-col">
                  <li
                    onClick={closeMobileMenu}
                    className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  >
                    <Link to="/">All Products</Link>
                  </li>
                  <li
                    onClick={closeMobileMenu}
                    className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  >
                    <Link to="/allorders">Orders</Link>
                  </li>
                  {userToken !== null ? (
                    <>
                      <li onClick={closeMobileMenu} className="mt-2">
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
                      <li
                        onClick={closeMobileMenu}
                        className="text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300"
                      >
                        <Link to="/login">Login</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
=======
import { Fragment, useEffect, useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { userContext } from "./../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";
import DarkMode from "./../DarkMode/DarkMode";

export default function MobileMenu() {
  let { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  //logout
  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  //
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  //
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden focus-visible:outline-none"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <button
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white focus-visible:outline-none"
                    onClick={closeMobileMenu}
                  >
                    <XMarkIcon className="h-6" />
                  </button>
                  <button className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <DarkMode className="h-6" />
                  </button>
                </div>

                {/* <div className="mb-4 w-full">
                  <Search />
                </div> */}
                <ul className="flex w-full flex-col">
                  <li
                    onClick={closeMobileMenu}
                    className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  >
                    <Link to="/">All Products</Link>
                  </li>
                  <li
                    onClick={closeMobileMenu}
                    className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  >
                    <Link to="/allorders">Orders</Link>
                  </li>
                  {userToken !== null ? (
                    <>
                      <li onClick={closeMobileMenu} className="mt-2">
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
                      <li
                        onClick={closeMobileMenu}
                        className="text-neutral-500 hover:text-black text-2xl dark:text-neutral-400 dark:hover:text-neutral-300"
                      >
                        <Link to="/login">Login</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
>>>>>>> f53b233 (Update product details)
