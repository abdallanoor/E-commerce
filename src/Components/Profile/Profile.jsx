import React, { useContext } from 'react'
// import Style from './Profile.module.css'
import { userContext } from '../../Context/UserContext';
import { jwtDecode } from "jwt-decode";



export default function Profile() {

  const token = localStorage.getItem('userToken');
  const decoded = jwtDecode(token);

  return <>
    <h1>Profile</h1>
    <h2>Name : {decoded.name}</h2>
  </>

}
