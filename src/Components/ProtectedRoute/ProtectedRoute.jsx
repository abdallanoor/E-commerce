import React from 'react'
import { Navigate } from 'react-router-dom'
// import Style from './ProtectedRoute.module.css'

export default function ProtectedRoute(props) {
  if (localStorage.getItem('userToken') !== null) {
    //as component
    return props.children
  } else {
    //as component
    return <Navigate to={'/login'} />
  }
}
