import React from "react";
import { Navigate } from "react-router-dom";


// pages

import Login from "@Login/login";



const userRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/flightpage", component: <FightPages /> },
    
    
  ];

  const authRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
  ];

  export { userRoutes, authRoutes };