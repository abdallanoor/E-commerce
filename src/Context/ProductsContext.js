import { createContext } from "react";

export let productsContext = createContext();

export default function ProductsContextProvider(props) {
  function test() {
    console.log("test");
  }
  return (
    <productsContext.Provider value={{ test }}>
      {props.children}
    </productsContext.Provider>
  );
}
