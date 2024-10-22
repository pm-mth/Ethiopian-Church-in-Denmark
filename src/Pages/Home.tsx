import React from "react";
import Hero from "../Components/Hero/Hero";
import MissionAbout from "../Components/MissionAbout/MissionAbout";
import WorshipServices from "../Components/WorshipServices/WorshipServices";
import ServiceTime from "../Components/ServiceTime/ServiceTime";
import NewHereHome from "../Components/NewHere/NewHereHome";
import ImageGallery from "../Components/ImageGallery/ImageGallery";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <MissionAbout />
      <NewHereHome/>
      <ServiceTime />
      <WorshipServices />
      <ImageGallery />
    </div>
  );
};

export default Home;
