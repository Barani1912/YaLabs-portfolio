import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const secondBallTimeline = gsap.timeline({ defaults: { duration: 0.017 } });
    const thirdBallTimeline = gsap.timeline({ defaults: { duration: 0.01 } });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor1", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 1,
        ease: "power4.out",
      });

      secondBallTimeline.to("#cursor2", {
        x: clientX - 16 / 2,
        y: clientY - 16 / 2,
        ease: "power4.out",
      });

      thirdBallTimeline.to("#cursor3", {
        x: clientX - 10 / 2,
        y: clientY - 10 / 2,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor1"
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-sky-300 rounded-full pointer-events-none mix-blend-darken"
      ></div>

      <div
        id="cursor2"
        className="fixed top-0 left-0 h-[16px] w-[16px] bg-sky-600 rounded-full pointer-events-none mix-blend-darken"
      ></div>

      <div
        id="cursor3"
        className="fixed top-0 left-0 h-[10px] w-[10px] bg-sky-900 rounded-full pointer-events-none mix-blend-darken"
      ></div>
    </>
  );
};

export default Cursor;
