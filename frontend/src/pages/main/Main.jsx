import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col gap-14">
      <Navbar />
      <Home />
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main
