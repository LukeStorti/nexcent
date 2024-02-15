import React from "react";
import { communityUpdateCardData } from "../constants";
import CommunityUpdateCard from "./CommunityUpdateCard";

const CommunityUpdates = () => {
  return (
    <section className="flex flex-col justify-center items-center my-4 mt-[50px] mb-[100px]">
      <div className="flex flex-col justify-center items-center flex-wrap w-full sm:px-16 px-6 ">
        <h2 className="font-poppins text-center font-semibold xs:text-[38px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px]">
          Caring is the new marketing
        </h2>
        <p className="font-poppins font-normal text-center text-black text-[18px] leading-[30.8px]">
          The Nexcent blog is the best place to read about the latest membership insights, trends
          and more. See who's joining the community, read about how our community are increasing
          their membership income and lot's more.​
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center ss:justify-center lg:justify-between w-full mt-[150px] gap-5">
        {communityUpdateCardData.map((item) => (
          <CommunityUpdateCard key={item.title} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default CommunityUpdates;
