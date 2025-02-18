import React from "react";
import { Header } from "../../Components/Header";
import AboutSliderImg from "../../Assets/About-slider.png";
import { Footer } from "../../Components/Footer.js";
import { Subscribe } from "../../Components/Subscribe.js";

const services = [
  {
    title: "Booking Domestic & International Flights",
    image:
      "https://www.multiflytravel.com/public/assets/images/about/domestic.png",
    alt: "",
  },
  {
    title: "Flexible & Personalised Holiday Plans",
    image:
      "https://www.multiflytravel.com/public/assets/images/about/flexible.png",
    alt: "Person looking at airplanes through the airport window",
  },
  {
    title: "Hotel Reservations",
    image:
      "https://www.multiflytravel.com/public/assets/images/about/hotel.png",
    alt: "Hotel room with a bed and a table",
  },
  {
    title: "Visa Documents",
    image: "https://www.multiflytravel.com/public/assets/images/about/visa.png",
    alt: "Passport and visa documents",
  },
  {
    title: "Tour Packages Travel And Sightseeing",
    image:
      "https://www.multiflytravel.com/public/assets/images/about/tour-package.png",
    alt: "Andaman tour packages",
  },
  {
    title: "Booking Cruises",
    image:
      "https://www.multiflytravel.com/public/assets/images/about/booking-co.png",
    alt: "Cruise ship on the ocean",
  },
  {
    title: "Cab Services",
    image: "https://www.multiflytravel.com/public/assets/images/about/cab.png",
    alt: "Cabs parked in a row",
  },
  {
    title: "Car Rentals",
    image: "https://www.multiflytravel.com/public/assets/images/about/car.png",
    alt: "Rental cars parked",
  },
];

const TopSection = () => (
    <>
  <div className="w-screen h-auto flex items-center justify-center relative">
    <img
      src={AboutSliderImg}
      alt="Forex"
      className="w-full h-auto object-contain"
    />
    <h1 className="absolute text-white text-5xl font-bold drop-shadow-lg">
      About
    </h1>
  </div>
        {/* <div className='align-center md:w-1/2 space-y-12'>
        <h4 className='text-xl font-extrabold text-center text-red-800 mb-4'>
          Need to know more
        </h4>
        <h2 className='text-3xl font-extrabold text-center text-blue-800 mb-4'>
          About Us
        </h2>
      </div> */}
      </>
);

export const About = () => {
  return (
    <div>
      <Header />
      <TopSection />

      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img
              alt="A beautiful beach with palm trees and a thatched umbrella"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              height="400"
              src="https://www.multiflytravel.com/public/assets/images/about/travel_bg.png"
              width="600"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                We Make Your Travel More Enjoyable
              </h2>
              <p className="text-lg leading-relaxed">
                Buying an international holiday comes with more than enough
                hoops to jump through. Let us ease your journey by procuring a
                holiday for you at outstanding rates. Through our forex
                services, you buy a holiday wherever you want with no trouble at
                all!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen p-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <img
                src={service.image}
                alt={service.alt}
                className="rounded-full mx-auto w-48 h-48 object-cover"
              />
              <h3 className="mt-4 font-bold">{service.title}</h3>
              <button className="mt-2 px-4 py-2 bg-green-200 text-black rounded">
                Enquiry
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img
              alt="A beautiful beach with palm trees and a thatched umbrella"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              height="400"
              src="https://www.multiflytravel.com/public/assets/images/about/Mission-Img.png"
              width="600"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Making Multifly activities affordable
              </h2>
              <p className="text-lg leading-relaxed">
                As the premier travel service povider, we aim to deliver
                unparalleled service excellence, cutting-edge technology, and
                tailored solutions that surpass that surpass our clients
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
