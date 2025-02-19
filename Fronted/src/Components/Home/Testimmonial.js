import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jared Erondu",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "Multifly Travel made my trip so smooth and enjoyable! Highly recommended.",
  },
  {
    name: "Samantha Doe",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "Loved the seamless booking experience. Great service and support!",
  },
  {
    name: "John Smith",
    role: "Explorer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "I had an amazing journey with Multifly Travel. Everything was perfect!",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center ">
      <h3 className="text-red-600 font-semibold mb-2 mt-6 ">Client Testimonials</h3>
      <h2 className="text-4xl font-bold text-blue-800 mb-5 mt-2">Multifly Talks</h2>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
        />
        <p className="mt-4 text-gray-600 italic">{testimonials[index].feedback}</p>
        <h4 className="font-bold text-lg mt-2">{testimonials[index].name}</h4>
        <p className="text-gray-500">{testimonials[index].role}</p>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
