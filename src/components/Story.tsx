"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import Image from "next/image";
import BgImage from '../../public/Story.jpg'

gsap.registerPlugin(ScrollTrigger);

const Story: React.FC = () => {
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100%", maxWidth: "100vw", // Constrain width to viewport
      maxHeight: "100vh",
      borderRadius: 0,
    });

    return () => {
      // Cleanup all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-ubuntu text-sm uppercase md:text-[10px]">
          Welcome to Nomads Lane
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        {/* <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
            Disc<b>o</b>ver the world's <br /> t<b>h</b>rough shared adventures 
        </div> */}



        <div className="about-subtext">
          <p className="text-[#E8BCB9] text-2xl"> <b> Journey of a Lifetime your adventures, now an extraordinary reality </b> </p>
          <p className="text-white">
          Wanderlust unites travelers from around the world, 
          exploring breathtaking destinations and crafting unforgettable memories,
          </p>
        </div>
      </div>

      <div className="min-h-screen w-full overflow-hidden">
        <div id="clip" className="relative  h-dvh">
          <div className="mask-clip-path about-image">
            <Image
              src={BgImage}
              alt="Background"
              className="absolute left-0 top-0  h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Story;
