<<<<<<< HEAD
=======
import { useContext, useEffect } from "react";
>>>>>>> f53b233 (Update product details)
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { userContext } from "./Context/UserContext";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
=======
>>>>>>> f53b233 (Update product details)
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Address from "./Components/Address/Address";
import Orders from "./Components/Orders/Orders";
import "./App.css";

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails />,
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
        element: <Orders />,
      },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <Notfound /> },
]);

function App() {
  let { setUserToken } = useContext(userContext);
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
