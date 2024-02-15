import pana from "../assets/pana.png";
import Button from "./Button";

const Calander = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 ">
        <img src={pana} alt="pana img" className="w-[441px] h-[328px] object-contain relative" />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col space-y-8">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
          How to design your site footer like we did
        </h2>
        <p className="font-poppins font-normal text-black text-[16px] leading-[30.8px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
          molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
          libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
          porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna
          tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
          felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
          ipsum id gravida.
        </p>
        <Button label="Learn More" />
      </div>
    </section>
  );
};

export default Calander;
