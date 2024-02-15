import React from "react";

const AchievementsCard = ({ icon, title, value }) => {
  return (
    <div className="flex justify-center px-2 ">
      <div className="flex  justify-center items-center">
        <img src={icon} alt="" className="w-[48px] h-[48px] object-cover " />
      </div>
      <div className="flex flex-col ml-4 font-poppins ">
        <h2 className="text-[40px] font-semibold">{value}</h2>
        <p className="text-[20px] text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default AchievementsCard;
