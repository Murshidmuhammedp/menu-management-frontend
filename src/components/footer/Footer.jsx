import React from "react";
import { CiLocationOn, CiMail, CiTwitter } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import Logo from "../../assets/Logo.png";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black pt-5 min-h-screen flex flex-col justify-between">
      {/* MainPart */}
      <div className="flex md:flex-row flex-col justify-center p-2 mb-7 md:gap-3 gap-5">
        <div className="border border-1 border-white rounded-lg text-center px-16 p-2 order-2 md:order-1">
          <p className="text-[#0796EF] mt-2 mb-3 font-bold text-lg font-sans">
            CONNECT WITH US
          </p>
          <p className="text-[#857878] flex items-center gap-2 justify-center">
            <GiRotaryPhone color="#C5A059" />
            +91 9567843340
          </p>
          <p className="text-[#857878] flex items-center gap-2 justify-center mb-2">
            <CiMail color="#C5A059" />
            info@deepnetsoft.com
          </p>
        </div>
        <div className="border border-1 border-white rounded-lg text-center px-4 sm:px-8 md:px-16 order-1 md:order-2">
          <div className="flex justify-center relative -top-6">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18"
            />
          </div>
          <p className="text-[#857878] text-2xl sm:text-3xl font-bold font-mono mt-2">
            <span className="text-[#0796EF]">DEEP</span>
            <span className="text-white"> NET </span>SOFT
          </p>
          <div className="flex justify-center gap-4 mt-4 mb-3">
            <FiFacebook color="#808080" size={20} />
            <CiTwitter color="#808080" size={20} />
            <FiYoutube color="#808080" size={20} />
            <FaInstagram color="#808080" size={20} />
          </div>
        </div>
        <div className="border border-1 border-white rounded-lg text-center px-16 p-2 md:w-80 h-36 order-3">
          <p className="text-[#0796EF] mt-2 mb-3 font-bold text-lg font-sans">
            FIND US
          </p>
          <p className="text-wrap text-white flex md:gap-0 gap-4 justify-center">
            <CiLocationOn color="#C5A059" size={32} />
            First floor,Geo infopark,Infopark EXPY,Kakkanad
          </p>
        </div>
      </div>

      {/* Copy Right */}
      <div className="bg-[#171616] w-full md:h-7 text-center md:flex text-[#857878] md:flex-row justify-between md:px-32 items-center">
        <div>
          <p className="md:text-sm text-xs">
            © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
          </p>
        </div>
        <div className="flex justify-center md:gap-3">
          <p className="md:text-sm text-xs">Terms & Conditions</p>
          <p className="md:text-sm text-xs">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
