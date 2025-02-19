// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Home from "../src/Pages/Home";
// import Login from "../src/Login/Login";
// import Register from "../src/Login/Register"
// // import WhoWeAre from "../src/Pages/WhoWeAre";  
// import FlightPage from "../src/Pages/Services/FlightPage"

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/flightpage" element={<FlightPage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             {/* <Route path="/who_we_are" element={<WhoWeAre />} /> */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import WhoWeAre from "./Components/Who_we_are";
import Login from "../src/Login/Login";
import HotelPage from "../src/Components/Hotel"


function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        {/* <Route path="/flights" element={<FlightPage />} /> */}
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/package-tour" element={<PackageTour />} />
        {/* <Route path="/forex" element={<ForexPage />} /> */}
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
//         <Footer />
//       </div>
    </Router>
  );
}

export default App;

