import React from "react";
import hero from "../assets/hero.png";
import Button from "./Button";
const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6 ">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
            Lessons and insights <br className="sm:block hidden" />{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
        </div>
        <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] mb-5  mt-5">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Button label="Register" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative select-none">
        <img src={hero} alt="hero img" className="w-[391px] h-[407px]" />
      </div>

      <div className="ss:hidden flex justify-center items-center">
        <Button label="Register" />
      </div>
    </section>
  );
};

export default Hero;
