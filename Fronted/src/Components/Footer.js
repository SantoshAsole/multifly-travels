import React from "react";
import logo from "../Assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-primary-content text-base-content p-10">
        <nav>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <a>
            MultiFly Travel is your traveling companion that will plan your entire <br />
            trip, whether it is a business trip, a team retreat, or an international <br />
            conference; all you have to do is sit back and relax!
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Flight</h6>
          <a className="link link-hover">Visa</a>
          <a className="link link-hover">Hotels</a>
          <a className="link link-hover">Cab</a>
          <a className="link link-hover">PackageTour</a>
          <a className="link link-hover">Forex</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Blogs</a>
        </nav>
        <nav>
          <h6 className="footer-title flex items-center">
            Contact 
          </h6>
          <a className="link link-hover">
            <FaMapMarkerAlt className="inline-block mr-2" />
            S-1 Vision Residency Gut No 107,<br />
            Beed Bypass Aurangabad - <br />
            431010 (MS)
          </a>
          <a className="link link-hover">
            <FaPhoneAlt className="inline-block mr-2" />
            +91 8767047793 <br />
            +91 9158955452
          </a>
          <a className="link link-hover">
            <FaEnvelope className="inline-block mr-2" />
            traveldesk@multiflytravel.com
          </a>
        </nav>
      </footer>

      <footer className="footer bg-primary-content text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            © 2023 Multifly. All Right Reserved
            <br />
            <pre>Help Privacy Policy Terms&Condition</pre>
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631..."></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
