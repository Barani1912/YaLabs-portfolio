import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';
import IndustriesWeServe from './IndustriesWeServe';
import {gsap }from 'gsap';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <>
    
    <div className="px-4 pb-4">

      <div className="flex flex-wrap gap-14 pl-14 pr-10 pb-20"  >
        <div className="flex-1 text-center sm:text-left " data-aos="fade-up" data-aos-duration="700" data-aos-delay="50">
          <span className='text-9xl font-bold opacity-5'>CODE THE</span>
          <h1 className="text-2xl sm:text-4xl font-bold my-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            Your Trusted Partner in Web Development
          </h1>
          <p className="text-base sm:text-lg mb-4 ">
            We leverage the latest technologies to bring your ideas to life. 
          </p>
          <Button className='rounded-sm' variant="outlined">Contact-Us</Button>
          <span className='text-9xl font-bold opacity-5 block'>FUTURE</span>
        </div>

      
        <div className="flex-1 text-center" data-aos="fade-left" data-aos-duration="700" data-aos-delay="50">
          <img
            src="https://techeva.co.in/assets/img/hero-img.png"
            alt="Dummy"
            className="w-10/12 h-auto rounded-lg"
          />
        </div>
      </div>

    
      <div className="text-center pt-20" data-aos="fade-up">
        <h2 
        onMouseEnter={()=>gsap.to('#cursor',{scale: 6, duration: 0.3})} 
        onMouseLeave={()=>gsap.to('#cursor',{scale: 1, duration: 0.3})}
        className=" text-2xl sm:text-4xl font-bold inline">Technologies <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]'>We Use</span> </h2>

        <p className="text-base sm:text-lg mt-7">
          We leverage advanced technologies to create robust applications. Our expertise includes building scalable, high-performance solutions using modern tools.
        </p>
      </div>

   
      <div className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 col-2">
        <div className=" px-6 pt-6 pb-12 rounded-lg text-center" data-aos="fade-up" >
          <FaReact className="text-8xl mx-auto mb-4" />
          <div className='grid gap-2'>
            <h3 className="text-xl font-bold">Front-End Services</h3>
            <p className="text-sm mt-2">
            React, Angular, Vue.js
            </p>
          </div>
        </div>


        <div className=" px-6 pt-6 pb-12 rounded-lg text-center" data-aos="fade-up">
          <FaNodeJs className="text-8xl mx-auto mb-4" />
          <div className='grid gap-2'>
            <h3 className="text-xl font-bold">Back-End Services</h3>
            <p className="text-sm mt-2">
              Node.js and Express
            </p>
          </div>
        </div>

    
        <div className=" px-6 pt-6 pb-12 rounded-lg text-center" data-aos="fade-up">
          <FaDatabase className="text-8xl mx-auto mb-4" />
          <div className='grid gap-2'>
            <h3 className="text-xl font-bold">Database</h3>
            <p className="text-sm mt-2">
            MySQL, PostgreSQL, MongoDB
            </p>
          </div>
        </div>



        <div className="px-6 pt-6 pb-12 rounded-lg text-center" data-aos="fade-up">
          <FaCloud className="text-8xl mx-auto mb-4" />
          <div className='grid gap-2'>
            <h3 className="text-xl font-bold">Cloud Services</h3>
            <p className="text-sm mt-2">
            AWS, Google Cloud, Azure
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-12" data-aos="fade-up">
      <h2 
        onMouseEnter={()=>gsap.to('#cursor',{scale: 6, duration: 0.3})} 
        onMouseLeave={()=>gsap.to('#cursor',{scale: 1, duration: 0.3})}
        className=" text-2xl sm:text-4xl font-bold inline">Industries <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]'>We Serve</span> </h2>
        <p className="text-base sm:text-lg mt-7">
        Our IT services will help you to elevate your venture to the next level.
        </p>
      </div>
      
      <IndustriesWeServe/>
      
    </div>

    </>
  );
};

export default Home;