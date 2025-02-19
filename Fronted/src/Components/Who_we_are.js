import React from "react";
import AboutSliderImg from "../Assets/About-slider.png";


const services = [
  {
    title: "Booking Domestic & International Flights",
    image: "https://storage.googleapis.com/a1aa/image/WncPJJsl0S_ewFrJFs0PT42uzJ8sxFUMB_pbV6YDK-4.jpg",
    alt: "Airplanes on the runway",
  },
  {
    title: "Flexible & Personalised Holiday Plans",
    image: "https://storage.googleapis.com/a1aa/image/VBdBXR-fIqMMnOdZKpKzQcqulWUfr2EXqgCSbjB9d-w.jpg",
    alt: "Person looking at airplanes through the airport window",
  },
  {
    title: "Hotel Reservations",
    image: "https://storage.googleapis.com/a1aa/image/qNB3yu8JpR6a4bPqkzNCHOgwAoKD8su4WgOL36dUpXI.jpg",
    alt: "Hotel room with a bed and a table",
  },
  {
    title: "Visa Documents",
    image: "https://storage.googleapis.com/a1aa/image/kOE7EBC1hbnruVBXx4p6TXE0YpzScHxIAYhCfsTeHBs.jpg",
    alt: "Passport and visa documents",
  },
  {
    title: "Tour Packages Travel And Sightseeing",
    image: "https://storage.googleapis.com/a1aa/image/RGnpm7rz-pZP1VW_ltnng4faCJdzPEhFfz0rNyLSw9s.jpg",
    alt: "Andaman tour packages",
  },
  {
    title: "Booking Cruises",
    image: "https://storage.googleapis.com/a1aa/image/aD03TTHprc2eG9pgq36Omr-9CJgBL1ZrVboJX1FA7Fs.jpg",
    alt: "Cruise ship on the ocean",
  },
  {
    title: "Cab Services",
    image: "https://storage.googleapis.com/a1aa/image/XuZn1BkE3vfX8zg8_2n-s0vAqj4_O1DS_YFOFeXM94M.jpg",
    alt: "Cabs parked in a row",
  },
  {
    title: "Car Rentals",
    image: "https://storage.googleapis.com/a1aa/image/3mmf6NcVd1tMAYVCiQt5C6c632pGwv2cwjf3kUzvddc.jpg",
    alt: "Rental cars parked",
  },
];

const TopSection = () => (
  <div className='w-screen h-auto flex items-center justify-center relative'>
    <img
      src={AboutSliderImg}
      alt='Who_we_are'
      className='w-full h-auto object-contain'
    />
    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
      ABOUT
    </h1>
  </div>
);

const Who_we_are = () => {
  return (
    <div>
      
      <TopSection />
      <div className='md:w-1/2 mb-1 mx-auto text-center'>
      <h4 className='text-xl font-bold text-center text-red-900 mb-4'>
        Need to know more
      </h4>
      <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
        About Us
      </h2>
    </div>
      <div className='max-w-5xl mx-auto p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div className='transform transition-transform duration-300 hover:scale-105'>
            <img
              alt='A beautiful beach with palm trees and a thatched umbrella'
              className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              height='400'
              src='https://www.multiflytravel.com/public/assets/images/about/travel_bg.png'
              width='600'
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
                We Make Your Travel More Enjoyable
              </h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
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
      <div className='md:w-1/2 mb-1 mx-auto text-center'>
      <h4 className='text-xl font-bold text-center text-red-900 mb-4'>
        Take Yourself
      </h4>
      <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
        Adventure Ideas
      </h2>
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
      <div className='md:w-1/2 mb-1 mx-auto text-center'>
      <h4 className='text-xl font-bold text-center text-red-900 mb-4'>
      Goals we achieve
      </h4>
      <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
      Our Mission
      </h2>
    </div>
      <div className='max-w-5xl mx-auto p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div className='transform transition-transform duration-300 hover:scale-105'>
            <img
              alt='A beautiful beach with palm trees and a thatched umbrella'
              className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              height='400'
              src='https://multiflytravel.com/public/assets/images/about/Mission-Img.png'
              width='600'
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-2xl font-bold text-blue-900 mb-6'>
              Making Multifly activities affordable
              </h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
              As the premier travel service povider, we aim to deliver unparalleled service excellence, cutting-edge technology, and tailored solutions that surpass that surpass our clients expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Who_we_are;