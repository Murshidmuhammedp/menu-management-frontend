import React from "react";
import Img1 from "../../assets/chayya.png";
import Img2 from "../../assets/cocktail1 1.png";

const Cocktails = ({ data }) => {
  const cocktailData = Array.isArray(data) ? data : [];

  return (
    <div className="border mb-3 mt-2">
      Navediv
      <div className="flex justify-center items-center mt-6 text-center">
        <img
          src={Img1}
          alt="drinkImg"
          className="w-16 h-20 md:w-44 md:h-32 relative md:absolute md:left-20 mx-auto md:mx-0 hidden md:flex"
        />
        <div className="text-white flex items-center justify-center md:gap-2">
          <p className="font-extrabold  ">_____</p>
          <p className="md:text-5xl font-extrabold custom-shadow text-3xl">
            BRUNCH COCKTAILS
          </p>
          <p className="font-extrabold">___</p>
        </div>
      </div>

      {/* Drink List */}
      <div className="text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {cocktailData?.map((i, index) => (
          <div key={index} className="">
            <div className="flex justify-between items-center pb-2 mb-2 relative">
              <div className="w-3/4">
                <h3 className="text-xl font-bold tracking-wider">{i?.name}</h3>
              </div>
              <span className="text-lg font-bold text-white w-1/4 text-right">
                ${i?.price}
              </span>
              {/* Dotted line */}
              <div className="absolute bottom-0 left-0 w-full border-b-2 border-dotted border-white mt-1" />
            </div>
            <p className="text-sm text-gray-400">{i?.description}</p>
          </div>
        ))}
        <div className=" flex justify-end">

          <img src={Img2} alt="" className="md:w-40 md:h-48 w-16 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Cocktails;


