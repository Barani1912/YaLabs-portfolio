import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { gsap } from "gsap";
import { CiSettings } from "react-icons/ci";

const Services = () => {
  return (
    <div className=" pb-16 px-6">
      <div className="text-center" data-aos="fade-up">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className=" text-2xl sm:text-4xl font-bold inline"
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
        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6"
          data-aos="fade-up"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/273726/earth-globe-connection.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              Software Development
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We work closely with you to create tailored software solutions
              that enhance user experiences. Our dedicated process ensures a
              seamless journey from concept to deployment.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/273704/tools-and-utensils-programmer.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              Web App Development
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We specialize in creating dynamic, mobile-first web applications
              that deliver seamless user experiences across all devices. Our
              collaborative approach ensures robust solutions tailored to your
              goals.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/202760/touch-screen-mobile-phone.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              Mobile App Development
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Our team goes beyond functionality to deliver engaging mobile
              experiences. Every app we create is designed to delight users and
              provide real value.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6"
          data-aos="fade-up"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/273726/earth-globe-connection.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              UI/UX Design
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We create user-centric designs that are visually striking and easy
              to use. From wireframes to prototypes, we deliver seamless digital
              experiences. Every design reflects your brand and drives
              engagement.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/273704/tools-and-utensils-programmer.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              E-commerce Solutions
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Our e-commerce platforms are scalable, secure, and
              customer-focused. We integrate intuitive navigation and seamless
              payment systems. Empower your business with personalized,
              revenue-driven solutions.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ backgroundColor: "#f0f9ff" }}
          className="p-6 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <CardContent className="flex flex-col gap-2 text-center items-center">
            <img
              className="w-20"
              src="https://www.svgrepo.com/show/202760/touch-screen-mobile-phone.svg"
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              component="div"
            >
              Maintenance & Support
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We provide regular updates, security enhancements, and performance
              monitoring. Our proactive approach ensures smooth and efficient
              operations. Stay focused on your business while we handle the
              rest.
            </Typography>
          </CardContent>
        </Card>
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

      {/* <div className="flex flex-col items-center gap-10">
  <div className="flex flex-col gap-10">
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="ml-2">Design & Planning</span>
    </div>
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="mr-2">Prototype</span>
    </div>
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="ml-2">Development</span>
    </div>
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="mr-2">Testing</span>
    </div>
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="ml-2">Deployment</span>
    </div>
    <div className='flex flex-col items-center' >
      <CiSettings className="text-blue-500 text-4xl" />
      <span className="mr-2">Maintenance</span>
    </div>
  </div>
</div> */}

      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10">
          <div
            data-aos="fade-up"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Design & Planning</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Prototype</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Development</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Testing</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Deployment</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex items-center gap-2 pb-4 border-b-4 border-sky-600"
          >
            <CiSettings className="text-blue-500 text-4xl" />
            <span>Maintenance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
