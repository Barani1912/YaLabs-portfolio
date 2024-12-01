import React from "react";
import Typography from "@mui/material/Typography";
import { SiSitepoint } from "react-icons/si";
import { gsap } from "gsap";

const Services = () => {
  const cardData = [
    {
      frontTitle: "Software Development",
      frontImg:
        "https://www.svgrepo.com/show/273726/earth-globe-connection.svg",
      backContent:
        "We provide tailored software solutions to enhance user experiences, ensuring a seamless journey from concept to deployment.",
    },
    {
      frontTitle: "Web App Development",
      frontImg:
        // "https://www.svgrepo.com/show/273704/tools-and-utensils-programmer.svg",
        "https://www.svgrepo.com/show/420127/computer-device-electronic.svg",
      backContent:
        "We specialize in creating dynamic, mobile-first web applications that deliver seamless user experiences across all devices.",
    },
    {
      frontTitle: "Mobile App Development",
      frontImg:
        "https://www.svgrepo.com/show/202760/touch-screen-mobile-phone.svg",
      backContent:
        "Our team goes beyond functionality to deliver engaging mobile experiences. Every app we create is designed to delight users and provide real value.",
    },
    {
      frontTitle: "UI/UX Design",
      frontImg:
        "https://www.svgrepo.com/show/431214/react.svg",
      backContent:
        "We create user-centric designs that are visually striking and easy to use. Every design reflects your brand and drives engagement.",
    },
    {
      frontTitle: "E-commerce Solutions",
      frontImg:
        "https://www.svgrepo.com/show/420282/buy-discount-search.svg",
      backContent:
        "Our e-commerce platforms are scalable, secure, and customer-focused. Empower your business with personalized solutions.",
    },
    {
      frontTitle: " Maintenance & Support",
      frontImg:
        "https://www.svgrepo.com/show/420306/buy-discount-shop-11.svg",
      backContent:
        "Our e-commerce platforms are scalable, secure, and customer-focused. Empower your business with personalized solutions.",
    },
  ];

  return (
    <>
    
  
    <div className="pb-16 px-6">
      <div className="text-center" data-aos="fade-up">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className="text-2xl sm:text-4xl font-bold inline"
        >
          Services
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            {" "}
            we offer
          </span>
        </h2>

        <p className="text-base sm:text-lg mt-5 mb-14">
          Transforming Ideas into Digital Experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 px-10 mb-20 md:mx-0 lg:mx-10">
        {cardData.map((item, index) => (
          <div
            className="maincontainer w-full h-60 md:h-70 lg:h-80"
            key={index}
            data-aos="fade-up"
          >
            <div className="thecard">
              <div className="thefront">
                <div
                  className="w-full h-full bg-[#f0f9ff] flex flex-col items-center justify-center text-center rounded-lg p-5"
                >
                  <img className="w-24 mb-4" src={item.frontImg} alt="" />
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    component="div"
                  >
                    {item.frontTitle}
                  </Typography>
                </div>
              </div>

              <div className="theback">
                <div
                  className="w-full h-full bg-[#f0f9ff] flex items-center justify-center rounded-lg p-5"
                >
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.backContent}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="text-center mb-20" data-aos="fade-up">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className=" text-2xl sm:text-4xl font-bold inline"
        >
          How
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            {" "}
            we work
          </span>
        </h2>

        <p className="text-base sm:text-lg mt-5 mb-14">
          From Concept to Completion, We Deliver Success
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-6 md:p-10 rounded-lg ">
        <div className="flex flex-col gap-4">
          {[
            { title: "Design & Planning", delay: 0 },
            { title: "Prototype", delay: 200 },
            { title: "Development", delay: 400 },
            { title: "Testing", delay: 600 },
            { title: "Deployment", delay: 800 },
            { title: "Maintenance", delay: 1000 },
          ].map((item, index) => (
            <div key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={item.delay}
                className="flex relative gap-5"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-sky-600 text-white rounded-full">
                  <SiSitepoint  className="text-2xl" />
                </div>

                <span className="text-lg font-semibold text-gray-700 flex items-center">
                  {item.title}
                </span>

                {index < 5 && (
                  <div
                    className="absolute left-6 top-12 w-0.5 h-16 bg-sky-600"
                    data-aos="fade-up"
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

