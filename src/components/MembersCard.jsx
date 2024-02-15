import React from "react";

const MembersCard = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col items-center justify-start  w-[300px] h-[260px] shadow rounded-lg p-2">
      <img src={icon} alt="title" className="w-[65px] h-[56px] mb-4" />
      <h1 className="font-poppins font-semibold ">{title}</h1>
      <p className="font-poppins text-gray-600 text-center mt-5">{content}</p>
    </div>
  );
};

export default MembersCard;
