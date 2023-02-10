import React from 'react';
import {useNavigate } from 'react-router-dom';

export default function Details() {

  const history = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("activeLogin");
    history("/");
  
  }
  
  return (
    <div>
      <h1>congrats</h1>
      <button onClick={handleLogout}> Logout </button>
    </div>
  )
}
