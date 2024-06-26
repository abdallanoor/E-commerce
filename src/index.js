import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./Context/UserContext";
import CartContextProvider from "./Context/CartContext";
import ProductsContextProvider from "./Context/ProductsContext";

import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
