import React from 'react';
import {gsap }from 'gsap';
import { useEffect } from 'react';


const Cursor = () => {
    useEffect(()=>{
        const handleMouseMove=(event)=>{
            const{clientX,clientY}= event;
            gsap.to('#cursor',{
                x:clientX - 20/2,
                y:clientY - 20/2,
                duration:1,
                delay:0,
                ease: "power4.out"
            })
        }

        window.addEventListener("mousemove",handleMouseMove);
        return()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        }
    },[])
    return (
    <>
        <div id='cursor' className='fixed top-0 left-0 h-[20px] w-[20px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken'></div>
    </>
  )
}

export default Cursor;