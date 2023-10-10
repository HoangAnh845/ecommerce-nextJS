/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  setRatio: (value: number) => void;
}

const bgBanner = {
  backgroundImage: "url('/bg-banner.jpg')",
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "20px",
};

export default function Hero() { // { setRatio }: IProps
  return (
    <div className="relative w-full h-[400px] sm:h-[345px]">
      <div style={bgBanner} className="p-5 pb-0">
        <div className="grid grid-cols-2 gap-4 h-full overflow-hidden">
          <div className="leading-[5] max-[640px]:leading-[3] ps-5">
            <h4 className="text-orange-500 text-[0.9rem]">
              Limited Offer 25% Off
            </h4>
            <h1 className="text-4xl font-bold max-[640px]:text-[1.3rem] max-[640px]:leading[1.2]">
              New Devices <br></br> For Your Studio
            </h1>
            <p className="">
              <span
                className="mr-2 max-[640px]:text-xs"
                style={{ verticalAlign: "super" }}
              >
                Only
              </span>
              <span className="font-bold text-orange-500 text-lg max-[640px]:text-[1rem]">$199.02</span>
            </p>
            <Link href={"/"} className="flex items-center px-5 py-2 w-[max-content] border border-black rounded-full text-sm max-[640px]:text-xs font-bold hover:bg-orange-500 hover:text-white">
              SHOP NOW
              <svg
                className="w-3 h-3 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="">
            {/* absolute right-[-39%] md:right-[-30%] max-[640px]:right-[-87%] bottom-[0%] */}
            <img
              src={"/banner.png"}
              alt="no Image"
              className="w-7/12 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
