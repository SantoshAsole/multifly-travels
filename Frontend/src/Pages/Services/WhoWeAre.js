import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Subscribe from "../../Components/Subscribe";
import AboutSliderImg from "../../Assets/About-slider.png";

const services = [
  { title: "Booking Domestic & International Flights", image: "https://www.multiflytravel.com/public/assets/images/about/domestic.png" },
  { title: "Flexible & Personalised Holiday Plans", image: "https://www.multiflytravel.com/public/assets/images/about/flexible.png" },
  { title: "Hotel Reservations", image: "https://www.multiflytravel.com/public/assets/images/about/hotel.png" },
  { title: "Visa Documents", image: "https://www.multiflytravel.com/public/assets/images/about/visa.png" },
  { title: "Tour Packages Travel And Sightseeing", image: "https://www.multiflytravel.com/public/assets/images/about/tour-package.png" },
  { title: "Booking Cruises", image: "https://www.multiflytravel.com/public/assets/images/about/booking-co.png" },
  { title: "Cab Services", image: "https://www.multiflytravel.com/public/assets/images/about/cab.png" },
  { title: "Car Rentals", image: "https://www.multiflytravel.com/public/assets/images/about/car.png" }
];

const TopSection = () => (
  <div className="w-screen h-auto flex items-center justify-center relative">
    <img src={AboutSliderImg} alt="Forex" className="w-full h-auto object-contain" />
    <h1 className="absolute text-white text-5xl font-bold drop-shadow-lg">Who We Are</h1>
  </div>
);

const WhoWeAre = () => {
  return (
    <div>
     
      <TopSection />
      
      <section className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="https://www.multiflytravel.com/public/assets/images/about/travel_bg.png" alt="Travel background" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">We Make Your Travel More Enjoyable</h2>
              <p className="text-lg leading-relaxed">
                Buying an international holiday comes with enough hoops to jump through. Let us ease your journey by securing a holiday at outstanding rates. Through our forex services, you can travel hassle-free anywhere in the world!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-screen p-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <img src={service.image} alt={service.title} className="rounded-full mx-auto w-48 h-48 object-cover" />
              <h3 className="mt-4 font-bold">{service.title}</h3>
              <button className="mt-2 px-4 py-2 bg-green-200 text-black rounded">Enquiry</button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="https://www.multiflytravel.com/public/assets/images/about/Mission-Img.png" alt="Mission" className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Making Multifly Activities Affordable</h2>
              <p className="text-lg leading-relaxed">
                As the premier travel service provider, we aim to deliver unparalleled service excellence, cutting-edge technology, and tailored solutions that surpass our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;
