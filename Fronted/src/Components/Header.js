import React from "react";
import { Link } from "react-router-dom";  // Import Link
import logo from "../Assets/logo.png";

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "FlightPage", link: "/flightpage" },
    { name: "Hotels", link: "/hotel" },
    { name: "Cab", link: "/cab" },
    { name: "Package Tour", link: "/package-tour" },
    { name: "Forex", link: "/forex" },
    { name: "Who We Are", link: "/who-we-are" },
  ];

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 bg-white z-50">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-7 md:px-10">
       
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

     
        <ul className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg my-2 md:my-0">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-600 duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="md:ml-8 text-lg my-2 md:my-0">
            <Link
              to="/login"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md duration-200"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;