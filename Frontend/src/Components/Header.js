import React from "react";
import logo from "../Assets/Multiflylogo.png";
import user from "../Assets/user.png";
import { Link } from "react-router-dom";
  
const Header = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <img src={logo} className='logo' style={{ height: 50 }} />
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li> */}
          <li>
            <Link to={"/Flights"}>Flights</Link>
          </li>
          <li>
            <Link to={"/Hotels"}>Hotels</Link>
          </li>
          <li>
            <Link to={"/Cab"}>Cab</Link>
          </li>
          <li>
            <Link to={"/PackageTour"}>Package Tour</Link>
          </li>
          <li>
            <Link to={"/Forex"}>Forex</Link>
          </li>
          <li>
            <Link to={"/WhoWeAre"}>Who We Are</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='avatar'>
          <div className='w-10 rounded-full'>
            <Link to={"/Login"}>
              <img src={user} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
