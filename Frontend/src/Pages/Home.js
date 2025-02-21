import React from "react";
import Slider from "../Components/Slider"; // Adjust the path to match your folder structure
import ActivitySection from "../Components/ActivitySection"; // Same here
import Adventure from "../Components/Adventure"; 
import Footer from "../Components/Footer";// And here

const Home = () => {
  return (
    <>
      <Slider />
      <ActivitySection />
      <Adventure />
      <Footer />
      {/* Add other sections similarly */}
    </>
  );
};

export default Home;
