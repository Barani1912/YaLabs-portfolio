// import React from 'react';
// import {gsap }from 'gsap';
// import { useEffect } from 'react';


// const Cursor = () => {
//     useEffect(()=>{
//         const handleMouseMove=(event)=>{
//             const{clientX,clientY}= event;
//             gsap.to('#cursor',{
//                 x:clientX - 20/2,
//                 y:clientY - 20/2,
//                 duration:1,
//                 delay:0,
//                 ease: "power4.out"
//             })
//         }

//         window.addEventListener("mousemove",handleMouseMove);
//         return()=>{
//             window.removeEventListener("mousemove",handleMouseMove);
//         }
//     },[])
//     return (
//     <>
//         <div id='cursor' className='fixed top-0 left-0 h-[20px] w-[20px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken'></div>
//     </>
//   )
// }

// export default Cursor;





import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  useEffect(() => {
    
    const secondBallTimeline = gsap.timeline({ defaults: { duration: 0.018 } });
    const thirdBallTimeline = gsap.timeline({ defaults: { duration: 0.02 } });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to('#cursor1', {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 0.5,
        ease: 'power4.out',
      });

  
      secondBallTimeline.to('#cursor2', {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        ease: 'power4.out',
      });

      thirdBallTimeline.to('#cursor3', {
        x: clientX - 10 / 2,
        y: clientY - 10 / 2,
        ease: 'power4.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    
      <div
        id="cursor1"
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken"
      ></div>

    
      <div
        id="cursor2"
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken"
      ></div>

      <div
        id="cursor3"
        className="fixed top-0 left-0 h-[10px] w-[10px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken"
      ></div>
    </>
  );
};

export default Cursor;
