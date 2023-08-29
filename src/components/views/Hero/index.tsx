import React from "react";
import Header from "@/components/assets/asset 5.png";
import asset1 from "@/components/assets/asset 4.png";
import asset2 from "@/components/assets/asset 3.png";
import asset3 from "@/components/assets/asset 2.png";
import asset4 from "@/components/assets/asset 1.png";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
const Hero = () => {
  return (
    <main>
      {/* Main div */}
      <div className="flex wrapper xs:ml-0 ml-10 lg:flex-row flex-col items-center gap-y-20 justify-between">
        {/* Right side */}
        <div className="  space-y-10 mt-24 ">
          {" "}
          <button
            aria-label="this label says that the here is 70% off on this store"
            className="py-2.5 text-center bg-[#e1edff] rounded-lg w-[7.5rem] text-[#0000ff] font-bold"
          >
            Sale 70%
          </button>
          <div className="text-[#212121] text-6xl font-bold max-w-lg">
            An Industrial Take on Streetwear
          </div>
          <div className="text-[#666666] text-lg max-w-[26rem]">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </div>
          <button
            aria-label="redirect the user to the shopping page"
            className="bg-[#282828] text-white font-medium text-xl w-[16rem] h-16 flex items-center justify-center gap-x-4"
          >
            <div>
              <BsCart2 size={25} />
            </div>
            <div className="self-center">Start Shopping</div>
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 flex-1">
            <Image src={asset1} alt="" />
            <Image src={asset2} alt="" />
            <Image src={asset3} alt="" />
            <Image src={asset4} alt="" />
          </div>
        </div>
        {/* Left sid */}
        <div className=" xl:object-none min-w-[400px] w-1/2 shrink-0 ">
          <Image
            src={Header}
            alt="woman standing "
            className="z-40 md:w-full max-w-full  "
          />

          {/* <div className="w-[600px] h-[600px] bg-[#ffece3] rounded-full absolute top-32 left-50 -z-20 "></div> */}
        </div>

        {/* main dicv end */}
      </div>
    </main>
  );
};

export default Hero;