import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import InfoTab from "../Components/Info";

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
      <InfoTab />
    </>
  );
}

export default Main;
