import "./App.css";
import React, { useEffect, useState, useRef } from "react";

import { HiMenu } from "react-icons/hi";
import { FaChevronUp, FaTimes } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact-us/Contact";
import AboutUs from "./pages/About-us/AboutUs";
import Cursor from "./components/Cursor";

import { Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const iconRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev >= 5) setDirection(-1);
        else if (prev <= 0) setDirection(1);
        return prev + direction;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      <header>
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[15vh] flex items-center z-50">
          <div className="container mx-auto flex justify-between items-center px-8">
            <div className="text-xl font-bold text-gray-800">
              {/* <img width={"200px"} src={logo} alt="" /> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
                {" "}
                YALABS SOLUTIONS
              </span>
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
              <HiMenu
                className="text-gray-800 text-3xl cursor-pointer"
                onClick={toggleDrawer}
              />
            </div>
          </div>
        </nav>
      </header>

      {drawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center"
          style={{ zIndex: 999 }}
        >
          <div className="w-9/12 h-9/12 bg-sky-50 shadow-lg rounded-md relative">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleDrawer}
            >
              <FaTimes className="text-xl text-gray-800" />
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-71}
                activeClass="text-blue-500 font-bold"
                className="text-xl cursor-pointer py-4"
                onClick={toggleDrawer}
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
                className="text-xl cursor-pointer py-4"
                onClick={toggleDrawer}
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
                className="text-xl cursor-pointer py-4"
                onClick={toggleDrawer}
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
                className="text-xl cursor-pointer py-4"
                onClick={toggleDrawer}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="min-h-screen bg-white pt-[17vh] mt-[6vh]">
        <Home />
      </section>

      <section
        id="about-us"
        className="min-h-screen pt-[17vh] mt-[6vh] bg-sky-50"
      >
        <AboutUs />
      </section>

      <section
        id="services"
        className="min-h-screen bg-white mt-[6vh] pt-[17vh]"
      >
        <Services />
      </section>

      <section
        id="contact-us"
        className="min-h-screen bg-sky-50 mt-[6vh] pt-[17vh]"
      >
        <Contact />
      </section>

      <footer className="bg-sky-600 text-white py-10 ">
        <div className="container mx-auto px-6 lg:px-20 z-50 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div>
              <h3 className="font-bold text-xl mb-4">Company Address</h3>
              <h4 className="font-semibold text-lg">
                YaLabs Solutions Pvt. Ltd.
              </h4>
              <p className="mt-2">
                No.7, 3rd Floor, 31nd Cross St, Puducherry.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Contact</h3>
              <p>
                Email:{" "}
                <a href="mailto:info@yalabs.com" className="hover:underline">
                  info@yalabs.com
                </a>
              </p>
              <p className="mt-2">
                Phone:{" "}
                <a href="tel:+916379150363" className="hover:underline">
                  +91 6379150363
                </a>
              </p>

              <div className="mt-4">
                <h4 className="font-bold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <FaFacebook />
                  <FaXTwitter />
                  <RiInstagramFill />
                  <FaLinkedin />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 text-center text-sm">
            <p>&copy; 2024 YaLabs Solutions Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Cursor />

      <div
        className={`${
          isVisible ? "block" : "hidden"
        } h-12 w-12 bg-white flex items-center justify-center rounded-full fixed bottom-5 right-5 shadow-lg drop-shadow-lg cursor-pointer`}
        onClick={scrollToTop}
      >
        <FaChevronUp
          ref={iconRef}
          style={{
            transform: `translateY(-${offset}px)`,
            transition: "transform 50ms ease-in-out",
          }}
          className="text-2xl text-sky-600"
        />
      </div>
    </div>
  );
};

export default App;
