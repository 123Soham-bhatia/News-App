import React from 'react';

import { Navigate } from 'react-router-dom';

const login = () => {
   
    return <div>
  <div>
    <input>enter your name here</input>
    <button> <Navigate to='/' >Home</Navigate></button>
  </div>
       
    </div>;
}

export default login;