import React from "react";
import { clients } from "../constants";
import arrow from "../assets/arrow.png";

const Customers = () => {
  return (
    <section className="flex flex-col justify-center items-center my-6 text-center">
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] mb-8">
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
        risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
        in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
        molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
        tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
        potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
        odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
        ac sit amet magna.
      </p>
      <h2 className="text-primary font-poppins text-[28px]">Tim Smith</h2>
      <h2 className="text-gray-400 font-poppins text-[18px]">
        British Dragon Boat Racing Association
      </h2>
      <div className="lg:flex lg:flex-row mt-8 grid grid-cols-3 gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center sm:min-w-[192px] min-w-[120px]"
          >
            <img src={client.logo} alt="logos" className="sm:w-[48px] w-[48px] object-contain" />
          </div>
        ))}
        <div className="flex items-center cursor-pointer">
          <h3 className="font-poppins text-primary w-[200px]">Meet all customers</h3>
          <img src={arrow} alt="" className="w-[26px] h-[14px] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
