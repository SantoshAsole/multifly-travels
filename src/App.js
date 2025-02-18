import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';

export function App() {
  return (
    <>
    <Header/>
    <br/>
    <h1 className="text-3xl font-bold underline align-bottom">
      Hello Multifly!!
    </h1>
    </>
  )
}

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Login/Login";
// import ProtectedRoute from "./Login/ProtectedRoute";
// import Dashboard from "./Login/Dashboard";
// import ForgotPassword from "./Login/ForgotPassword"; // Create this component
// import Register from "./Login/Register"; // Create this component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} /> {/* Login route */}
//         <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot password route */}
//         <Route path="/register" element={<Register />} /> {/* Register route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard /> {/* Protected dashboard route */}
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* Default route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
