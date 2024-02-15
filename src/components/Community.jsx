import { members } from "../constants";
import MembersCard from "./MembersCard";

const Community = () => {
  return (
    <section className="flex justify-center items-center my-4 mt-[50px]">
      <div className="flex flex-col justify-center items-center flex-wrap w-full sm:px-16 px-6 ">
        <h2 className="font-poppins text-center font-semibold xs:text-[38px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px]">
          Manage your entire community <br className="sm:block hidden" /> in a single system
        </h2>
        <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
          Who is Nextcent suitable for?
        </p>
        <div className="flex md:flex-row flex-col items-center ss:justify-center lg:justify-between w-full mt-10">
          {members.map((member) => (
            <MembersCard
              icon={member.icon}
              title={member.title}
              content={member.content}
              key={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
