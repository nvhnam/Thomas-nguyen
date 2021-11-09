import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/pages/About";
import Banner1 from "../components/pages/Banner1";
import LiveContain from "../components/pages/LiveContain";
import Banner2 from "../components/pages/Banner2";
import Recording from "../components/pages/Recording";
import Contact from "../components/pages/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Banner1 />
      <LiveContain />
      <Banner2 />
      <Recording />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
