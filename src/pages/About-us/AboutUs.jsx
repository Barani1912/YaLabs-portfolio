import React from "react";
import CardForVissionMission from "./Card-V-M";
import { gsap } from "gsap";

const AboutUs = () => {
  return (
    <>
      <div className="text-center" data-aos="fade-up">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className=" text-2xl sm:text-4xl font-bold inline"
        >
          Why
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            {" "}
            choose us
          </span>
        </h2>

        <p className="text-base sm:text-lg mt-7">
          We leverage advanced technologies to create robust applications.
        </p>
      </div>

      <div className="w-[85%] m-auto ">
        <div className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 col-2">
          <div
            className=" px-6 pt-6 pb-12 rounded-lg text-center"
            data-aos="fade-up"
          >
            <img
              src="https://www.svgrepo.com/show/420293/buy-discount-medallion.svg"
              alt=""
              className="w-28 mx-auto mb-4"
            />
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Expertise</h3>
              <p className="text-lg mt-2 mx-14 mb-10">
                Our talented team brings industry-leading knowledge and skills
                to every project.
              </p>
            </div>
          </div>

          <div
            className=" px-6 pt-6 pb-12 rounded-lg text-center"
            data-aos="fade-up"
          >
            <img
              src="https://www.svgrepo.com/show/418504/bulb-idea-knowledge.svg"
              alt=""
              className="w-28 mx-auto mb-4"
            />
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Custom solutions</h3>
              <p className="text-lg mt-2 mx-14 mb-10">
                We tailor our offerings to meet your unique needs, ensuring
                relevance and effectiveness.
              </p>
            </div>
          </div>

          <div
            className=" px-6 pt-6 pb-12 rounded-lg text-center"
            data-aos="fade-up"
          >
            <img
              src="https://www.svgrepo.com/show/420195/lock-protect-security-23.svg"
              alt=""
              className="w-28 mx-auto mb-4"
            />
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Timely delivery</h3>
              <p className="text-lg mt-2 mx-14 mb-10">
                We pride ourselves on our ability to deliver projects on time
                without compromising quality.
              </p>
            </div>
          </div>

          <div
            className="px-6 pt-6 pb-12 rounded-lg text-center"
            data-aos="fade-up"
          >
            <img
              src="https://www.svgrepo.com/show/418517/analytics-chart-growth.svg"
              alt=""
              className="w-28 mx-auto mb-4"
            />
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Proven success</h3>
              <p className="text-lg mt-2 mx-14 mb-10">
                Our extensive experience across various sectors equips us to
                tackle diverse challenges with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="text-center">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className=" text-2xl sm:text-4xl font-bold inline"
        >
          Who
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            {" "}
            we are
          </span>
        </h2>

        <div className="px-8">
          <div className="text-center mb-10">
            <p className="mt-4 text-lg text-gray-600">
              At{" "}
              <span className="text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
                YaLabs Solutions
              </span>
              , we specialize in building innovative, scalable, and
              user-friendly web solutions that help businesses thrive in the
              digital world. Our team is dedicated to delivering high-quality,
              custom web development services tailored to your unique needs.
            </p>
          </div>

          <CardForVissionMission />

          <button className="px-6 py-3 mb-14 drop-shadow-2xl bg-sky-600 text-white text-lg font-semibold rounded-md hover:bg-white hover:text-sky-600  transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
