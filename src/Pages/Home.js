import React from "react";
import homeImage from "../Assets/home.png";
import whatsappLogo from "../Assets/whatsapp-logo.jpeg";
import call from "../Assets/call.jpeg";
import { useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export function Home() {
  return (
    <>
    <Header/>
    <div className="relative">
      <img
        src={homeImage}
        className="w-full h-[400px] md:h-[600px] lg:h-[600px] object-cover bg-center bg-no-repeat"
        alt="Home"
      />
      <div className="absolute inset-0 flex items-center justify-left m-11">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold text-left">
            Explore Historical Richness
          </h1>
          <br />
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-white">
            This is our images for to show this only for example
          </p>
          <button className="px-2 py-2 bg-red-800 text-white font-bold rounded-2xl hover:bg-red">
            Inquiry Now
          </button>
        </div>
      </div>
      <button className="absolute left-0 top-[80%] transform -translate-y-1/2">
        <img
          src={whatsappLogo}
          className="w-full h-[40px] md:h-[40px] lg:h-[60px] object-cover bg-center bg-no-repeat "
          alt="WhatsApp Logo"
        />
      </button>
      <button className="absolute right-10 top-[80%] transform -translate-y-1/2">
        <img
          src={call}
          className="w-full h-[40px] md:h-[40px] lg:h-[60px] object-cover bg-center bg-no-repeat "
          alt="call Logo"
        />
      </button>
    </div>
    <Footer/>
    </>
  );
}

