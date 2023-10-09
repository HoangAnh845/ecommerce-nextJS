import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function BannerProduct() {
  return (
    <div className="relative py-5">
      <div className="absolute top-[35%] left-[41%] text-white text-center">
        <h2 className="text-lg">
          Score An Extra 30% Off <br></br> Your Entire Order
        </h2>
        <button className="flex items-center text-xs m-auto mt-4 p-2 bg-red-400 rounded-md ">
          <span>SHOP NOW</span>
          <BiRightArrowAlt />
        </button>
      </div>
      <div className="">
      <img src="/banner-product.jpg" alt="bannerProduct"/>
      </div>
    </div>
  );
}

export default BannerProduct;
