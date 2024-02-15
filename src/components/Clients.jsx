import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex justify-center items-center my-6 text-center">
      <div className="flex flex-col  w-full sm:px-16 px-6 ">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[30.8px]">
          Our Clients
        </h2>
        <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] mb-8">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="lg:flex lg:flex-row mt-8 grid grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center sm:min-w-[192px] min-w-[120px]"
            >
              <img src={client.logo} alt="logos" className="sm:w-[48px] w-[48px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
