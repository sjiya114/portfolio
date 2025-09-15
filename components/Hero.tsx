"use client";
import { useState } from "react";
import image from '../public/pro.png'
import Image from "next/image";
import { TextScroll } from "./ui/text-scroll";
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const textp = "MERN Stack Web Developer".split(" ")
  return (
    <>
      <section className="relative  pt-20 ml-2 mr-2   flex flex-col pb-45 max-lg:pb-0  mb-20 max-lg:mb-0 h-[180px] max-lg:h-fit items-center text-slate-800 md:px-16 lg:px-24 xl:px-32 text-sm   font-[Poppins]">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-lg:gap-2 w-full ">
          {/* Left Side */}
          <div className="max-lg:px-4 max-lg:pt-10  pb-30  max-lg:pb-2">
            {textp.map((t, index) => (
              <h1 key={index} style={{ animationDelay: `${index * 0.05}s` }} className="para inline opacity-0 text-2xl text-[58px] leading-[4.7rem] font-semibold max-w-lg bg-gradient-to-r from-zinc-200 shadow-2xl to-slate-600 bg-clip-text text-transparent">
                {t + " "}
              </h1>
            ))
            }
            {/* Email Subscribe */}
          </div>

          {/* Right Side Image */}
          <div className="relative max-md:w-full ">
            <div className="absolute inset-0 z-[-1] rounded-lg  blur-2xl opacity-50"></div>
            <Image
              className="max-w-md w-101 h-fit rounded-[40px] max-md:w-full max-lg:px-0 lg:mr-10"
              src={image}
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <TextScroll text="-   JIYA SHARMA   -" className=" text-white text-6xl mt-20 text-[80px]" />
    </>
  );
};

export default Hero;
