
import React from "react";
import { HiMenu } from "react-icons/hi";
import { FaCircleUp } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact-us/Contact";
import AboutUs from "./pages/About-us/AboutUs";
import Cursor from "./components/Cursor";
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();



const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
     
      <header>
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[15vh] flex items-center z-50">
          <div className="container mx-auto flex justify-between items-center px-8">
            <div className="text-xl font-bold text-gray-800">
              YALABS SOLUTIONS
            </div>

            <div className="hidden lg:flex gap-10">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-71}
                activeClass="text-blue-500 font-bold"
                className="cursor-pointer hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                spy={true}
                offset={-71}
                activeClass="text-blue-500 font-bold"
                className="cursor-pointer hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-500 font-bold"
                className="cursor-pointer hover:text-blue-500"
              >
                Services
              </Link>
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-500 font-bold"
                className="cursor-pointer hover:text-blue-500"
              >
                Contact Us
              </Link>
            </div>

            <div className="lg:hidden">
              <HiMenu className="text-gray-800 text-3xl cursor-pointer" />
            </div>
          </div>
        </nav>
      </header>

      

      <section id="home" className="min-h-screen bg-white pt-[17vh] mt-[6vh] ">
        <Home/>
        <Cursor/>
      </section>

      <section id="about-us" className="min-h-screen pt-[17vh] mt-[6vh] bg-sky-50 ">
        <AboutUs/>
      </section>

      <section id="services" className="min-h-screen bg-white pt-[17vh] ">
        <Services/>
      </section>

      <section id="contact-us" className="min-h-screen bg-zinc-50 pt-[17vh]">
        <Contact/>
      </section>

      <button className="fixed bottom-5 right-5" onClick={scrollToTop}>
        <FaCircleUp className=" w-10 h-10" />
      </button>
    </div>
  );
};

export default App;





