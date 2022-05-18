import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import InfoTab from "../Components/Info";
import Awards from "../Components/Awards";

import {
  dataHomeOne,
  dataHomeTwo,
  dataHomeThree,
  dataHomeFour,
} from "../Components/Info/data";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* //NavBar// */}
      <Header toggle={toggle} />
      {/* //HeroSection// */}
      <HeroSection />
      {/* //InfoTab// */}
      <InfoTab {...dataHomeOne} />
      <InfoTab {...dataHomeTwo} />
      <InfoTab {...dataHomeThree} />
      {/* //Services// */}
      <Services />
      <InfoTab {...dataHomeFour} />
      <Awards />
      <Footer />
    </>
  );
}

export default Main;
