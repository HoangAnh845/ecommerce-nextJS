import React from "react";

const data_BrandLogo = [
  {
    imgUrl:
      "https://htmldemo.net/elehaus/elehaus/assets/images/brand-logo/1.png",
  },
  {
    imgUrl:
      "https://htmldemo.net/elehaus/elehaus/assets/images/brand-logo/2.png",
  },
  {
    imgUrl:
      "https://htmldemo.net/elehaus/elehaus/assets/images/brand-logo/3.png",
  },
  {
    imgUrl:
      "https://htmldemo.net/elehaus/elehaus/assets/images/brand-logo/4.png",
  },
  {
    imgUrl:
      "https://htmldemo.net/elehaus/elehaus/assets/images/brand-logo/5.png",
  },
];
function BrandLogo() {
  return (
    <div className="grid grid-cols-5 gap-2 py-5">
      {data_BrandLogo.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full bg-white border py-4`}
          >
            <img className="m-auto" src={item.imgUrl} alt="brad"/>
          </div>
        );
      })}
    </div>
  );
}

export default BrandLogo;
