import { createContext } from "react";

export let categoryContext = createContext();

export default function CategoryContextProvider(props) {
  return (
    <categoryContext.Provider value={{}}>
      {props.children}
    </categoryContext.Provider>
  );
}
