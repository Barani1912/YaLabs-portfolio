// import React, { useState } from "react";
// import { HiMenu } from "react-icons/hi";
// import { Link } from "react-scroll";
// import "./App.css";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   return (
//     <div className="App">
//       <header>

//         <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-[15vh] flex items-center z-999">
//           <div className="container mx-auto flex justify-between items-center px-8">

//             <div className="text-3xl font-bold text-gray-800">
//               YALABS SOLUTIONS
//             </div>

//             <div className="hidden lg:flex gap-10">
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 spy={true} //active section tracking
//                 offset={-70} //scrolling position to avoid overlapping
//                 onSetActive={() => setActiveSection("home")}
//                 className={`cursor-pointer ${
//                   activeSection === "home"
//                     ? "text-blue-500 font-bold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="about-us"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 offset={-70}
//                 onSetActive={() => setActiveSection("about-us")}
//                 className={`cursor-pointer ${
//                   activeSection === "about-us"
//                     ? "text-blue-500 font-bold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="services"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 offset={-70}
//                 onSetActive={() => setActiveSection("services")}
//                 className={`cursor-pointer ${
//                   activeSection === "services"
//                     ? "text-blue-500 font-bold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`}
//               >
//                 Services
//               </Link>
//               <Link
//                 to="contact-us"
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 offset={-70}
//                 onSetActive={() => setActiveSection("contact-us")}
//                 className={`cursor-pointer ${
//                   activeSection === "contact-us"
//                     ? "text-blue-500 font-bold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             <div className="lg:hidden">
//               <HiMenu className="text-gray-800 text-3xl cursor-pointer" />
//             </div>
//           </div>
//         </nav>
//       </header>

//       <section id="home" className="min-h-screen bg-gray-100 p-8 mt-[15vh]">
//         <h2 className="text-4xl text-center text-gray-700">Home</h2>
//         <p className="text-center text-lg">Welcome to YALAB SOLUTIONS</p>
//       </section>

//       <section id="about-us" className="min-h-screen bg-white p-8 mt-[15vh]">
//         <h2 className="text-4xl text-center text-gray-700">About Us</h2>
//         <p className="text-center text-lg">
//           We provide innovative solutions for your business.
//         </p>
//       </section>

//       <section id="services" className="min-h-screen bg-gray-100 p-8 mt-[15vh]">
//         <h2 className="text-4xl text-center text-gray-700">Services</h2>
//         <p className="text-center text-lg">
//           Explore our range of services designed for growth and success.
//         </p>
//       </section>

//       <section id="contact-us" className="min-h-screen bg-white p-8 mt-[15vh]">
//         <h2 className="text-4xl text-center text-gray-700">Contact Us</h2>
//         <p className="text-center text-lg">
//           Get in touch with us for your business needs.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default App;








import React from "react";
import { HiMenu } from "react-icons/hi";
import { FaCircleUp } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
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

      <section id="about-us" className="min-h-screen bg-gray-100 pt-[17vh] mt-[6vh]">
        <AboutUs/>
      </section>

      <section id="services" className="min-h-screen bg-white pt-[17vh] mt-[4vh]">
        <Services/>
      </section>

      <section id="contact-us" className="min-h-screen bg-gray-100 pt-[17vh] mt-[2vh]">
        <Contact/>
      </section>

      <button className="fixed bottom-5 right-5" onClick={scrollToTop}>
        <FaCircleUp className=" w-10 h-10" />
      </button>
    </div>
  );
};

export default App;





