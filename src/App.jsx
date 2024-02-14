import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

import Register from "./Components/Register/Register";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import { userContext } from "./Context/UserContext";
import { useContext, useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Address from "./Components/Address/Address";
import Orders from "./Components/Orders/Orders";
import "./App.css";
import { cartContext } from "./Context/CartContext";

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "Profile",
        element: (
          <ProtectedRoute>
            {" "}
            <Profile />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            {" "}
            <Products />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id",
        element: (
          <ProtectedRoute>
            {" "}
            <ProductDetails />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            {" "}
            <Categories />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            {" "}
            <Brands />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "address",
        element: (
          <ProtectedRoute>
            {" "}
            <Address />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            {" "}
            <Orders />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Notfound /> },
]);

function App() {
  let { setUserToken, userToken } = useContext(userContext);
  let { getCartId, getCart } = useContext(cartContext);
  //set Old localstorage value after refresh page
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
    //
    document.body.classList.add(
      "bg-neutral-50",
      "text-black",
      "dark:bg-neutral-900",
      "dark:text-white",
      "selection:bg-zinc-900",
      "selection:text-neutral-200",
      "dark:selection:bg-zinc-300",
      "dark:selection:text-neutral-900"
    );
  }, []);

  return <RouterProvider router={Routers} />;
}

export default App;
