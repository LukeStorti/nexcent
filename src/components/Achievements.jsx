import { achievementsData } from "../constants";
import AchievementsCard from "./AchievementsCard";

const Achievements = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 ">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
          Helping a local <br className="ss:block hidden" />{" "}
          <span className="text-primary">business reinvent itself</span>
        </h2>
        <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]  mt-5">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className=" justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {achievementsData.map((item) => (
          <AchievementsCard key={item.id} icon={item.icon} title={item.title} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
