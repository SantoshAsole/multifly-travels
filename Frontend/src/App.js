

import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import Flights from "./Pages/Services/Flights";
import Hotels from "./Pages/Services/Hotels";
import Cab from "./Pages/Services/Cab";
import PackageTour from "./Pages/Services/PackageTour";
import Forex from "./Pages/Services/Forex";
import About from "./Pages/Services/WhoWeAre"; 
import Header from "./Components/Header";
import Register from "./Login/Register";
import Login from "./Login/Login"; 

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/PackageTour" element={<PackageTour />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/WhoWeAre" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
