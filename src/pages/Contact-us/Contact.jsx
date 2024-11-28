import React from 'react';
import { gsap } from "gsap";

const Contact = () => {
  return (
    <>
    <div className="text-center" data-aos="fade-up">
        <h2
          onMouseEnter={() => gsap.to("#cursor1", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor1", { scale: 1, duration: 0.3 })}
          className=" text-2xl sm:text-4xl font-bold inline"
        >
          Get
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3de] to-[#0a4a83]">
            {" "}
            in Touch
          </span>
        </h2>

        <p className="text-base sm:text-lg mt-5 mb-14">
          Reach Out, We're Ready to Help
        </p>
      </div>

    <div className="flex flex-col items-center justify-center  py-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-20">
     
      <div className="w-full lg:w-1/2">
       
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 "
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address*</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 "
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone number*</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 "
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2  ">
              <option>Select...</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
            <textarea
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows={5}
            ></textarea>
          </div>

        
          <button className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg">
            Send Message
          </button>
        </form>
      </div>

      
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 space-y-6">
      
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <div className="h-12 w-12  bg-sky-600 flex items-center justify-center rounded-full">
            
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Mail address</h3>
            <p className="text-sm text-gray-600">info@yalabs.com</p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <div className="h-12 w-12  bg-sky-600 flex items-center justify-center rounded-full">
            
           
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <p className="text-sm text-gray-600">+91 6379150563</p>
          </div>
        </div>

    
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <div className="h-12 w-12  bg-sky-600 flex items-center justify-center rounded-full">
           
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">YaLabs Solutions Pvt. Ltd.</h3>
            <p className="text-sm text-gray-600">
               No.7, 3rd Floor, 31nd Cross St, Puducherry.
            </p>
          </div>
        </div>

    
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <div className="h-12 w-12  bg-sky-600 flex items-center justify-center rounded-full">
           
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Working hours</h3>
            <p className="text-sm text-gray-600">
              Monday - Friday <br />
              10AM - 7PM 
            </p>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Contact;
