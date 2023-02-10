import React from 'react'
import {Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("activeLogin"));
//   const history = useNavigate();
    // console.log(user)
  if(!user){
    return <Navigate to="/"  />
  }

  return children;
}

export default Privateroute
