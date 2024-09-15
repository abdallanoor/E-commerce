<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
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
<<<<<<< HEAD
=======
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
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
