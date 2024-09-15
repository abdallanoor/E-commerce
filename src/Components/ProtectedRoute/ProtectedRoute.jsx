import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("userToken") !== null) {
    //as component
    return props.children;
  } else {
    //as component
    return <Navigate to={"/login"} />;
  }
}
