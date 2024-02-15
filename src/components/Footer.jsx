import footer from "../assets/footer.png";
import footerlinks from "../assets/footerlinks.png";
import send from "../assets/send.png";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start mr-10 gap-2">
          <img src={footer} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px]">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px]">
            All Rights Reserved
          </p>
          <img
            src={footerlinks}
            alt="logo"
            className="w-[266px] h-[72px] object-contain mt-5 cursor-pointer"
          />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-primary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white">
              Stay up to date
            </h4>
            <div className="flex items-center bg-slate-700 p-2 rounded-lg mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-700 outline-none text-white w-full"
              />
              <span>
                <img src={send} alt="send icon" className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
