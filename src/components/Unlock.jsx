import unlock from "../assets/unlock.png";
import Button from "./Button";

const Unlock = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 ">
        <img
          src={unlock}
          alt="unlock img"
          className="w-[441px] h-[328px] object-contain relative"
        />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col space-y-8">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="font-poppins font-normal text-black text-[16px] leading-[30.8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
          accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
          porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <Button label="Learn More" />
      </div>
    </section>
  );
};

export default Unlock;
