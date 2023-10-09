import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const data_Discount = [
  {
    _id: "1",
    discountName: "Smart Phone With Pen",
    discount: "50%",
    discountImage: "/iphone-15.png",
  },
  {
    _id: "2",
    discountName: "Gaming Pad & Handel",
    discount: "50%",
    discountImage: "/iphone-15.png",
  },
  {
    _id: "3",
    discountName: "Smart Speaker & assistant",
    discount: "50%",
    discountImage: "/iphone-15.png",
  },
];

function DiscountProduct() {
  return (
    <div className="flex container my-5 pt-1 justify-between text-white">
      {data_Discount.map((data, index) => {
        return (
          <div
            key={data._id}
            className={`grid grid-cols-2 p-3 mx-2 rounded-xl ${
              index !== 1 ? `bg-[#646DC3]` : "bg-zinc-800"
            }`}
          >
            <div>
              <p className="text-xs">Get {data.discount} Off</p>
              <h3 className="text-xl mt-3">{data.discountName}</h3>
              <button className="text-[0.6rem] flex items-center mt-5">
                <span>SHOP NOW </span>
                <BiArrowToRight className="text-sm ms-1"/>
              </button>
            </div>
            <div>
              <img src={data.discountImage} alt="iphone" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DiscountProduct;
