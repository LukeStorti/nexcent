import Achievements from "./components/Achievements";
import Calander from "./components/Calander";
import Clients from "./components/Clients";
import Community from "./components/Community";
import CommunityUpdates from "./components/CommunityUpdates";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";

// https://www.figma.com/file/RpPInChzfFmkO4rgBCfewD/Responsive-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design-(Community)?type=design&node-id=5-573&mode=design&t=wBQga4xzPSzKzHkU-0

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <div className="flex justify-center items-center sm:px16 px-6 bg-[#F5F7FA]">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start bg-[#F5F7FA]">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Clients />
          <Community />
          <Unlock />
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#F5F7FA]">
        <div className="xl:max-w-[1280px] w-full">
          <Achievements />
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Calander />
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#F5F7FA]">
        <div className="xl:max-w-[1280px] w-full">
          <Customers />
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <CommunityUpdates />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px16 px-6 bg-[#263238]">
        <div className="xl:max-w-[1280px] w-full ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
