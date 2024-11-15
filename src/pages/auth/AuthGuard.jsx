import React, { children } from 'react'
import { Navigate } from 'react-router-dom';

const AuthGuard = ({children}) => {
   const isAuthenticated = !!localStorage.getItem("token");

   return isAuthenticated? children: <Navigate to = "/Loginform"/>
};

export default AuthGuard