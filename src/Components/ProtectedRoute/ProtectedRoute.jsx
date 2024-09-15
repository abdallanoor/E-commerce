<<<<<<< HEAD
<<<<<<< HEAD
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  if (localStorage.getItem('userToken') !== null) {
    //as component
    return props.children
  } else {
    //as component
    return <Navigate to={'/login'} />
  }
}
=======
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
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
<<<<<<< HEAD
>>>>>>> f53b233 (Update product details)
=======
>>>>>>> f53b233fdd181bfd56120d69fbd1cc685acee5ef
