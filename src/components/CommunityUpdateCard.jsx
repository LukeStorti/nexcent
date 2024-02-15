import React from "react";
import arrow from "../assets/arrow.png";
const CommunityUpdateCard = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 shadow w-[317px] h-[176px] text-center rounded bg-[#F5F7FA]">
      <h2 className="font-poppins font-semibold mb-4">{title}</h2>
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
        <h3 className="font-poppins text-primary text-lg mt-5">Readmore</h3>
        <img src={arrow} alt="arrow" className="w-[18px] h-[18px] mt-5" />
      </div>
    </div>
  );
};

export default CommunityUpdateCard;
