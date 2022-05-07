import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroSection />
    </>
  );
}

export default Main;
