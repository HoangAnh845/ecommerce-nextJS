"use client";

import { RootState } from "@/Store/store";
import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import Loading from "@/app/loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type CategoryData = {
  _id: string;
  categoryName: string;
  categoryDescription: string;
  categoryImage: string;
  categorySlug: string;
};

const dataCategories = [
  {
    _id: "1",
    categoryName: "Moblie Phone",
    categoryDescription: "",
    categoryImage:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    categorySlug: "phone",
  },
  {
    _id: "2",
    categoryName: "Digital Camera",
    categoryDescription: "",
    categoryImage:
      "https://cdn.tgdd.vn/Products/Images/4728/285251/camera-ip-ngoai-troi-3mp-ezviz-c3tn-trang-1.jpg",
    categorySlug: "camera",
  },
  {
    _id: "3",
    categoryName: "Computer/Laptop",
    categoryDescription: "",
    categoryImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/44/282885/apple-macbook-pro-m2-2022-080622-031648-200x200.jpg",
    categorySlug: "Laptop",
  },
];

// function PrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//     className="bg-slate-500 p-2 text-white rounded-full inline-block absolute top-[50%] left-0 z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <BiChevronLeft />
//   </div>
//   );
// }
// function NextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="bg-slate-500 p-2 text-white rounded-full inline-block absolute top-[50%] right-0 z-10 cursor-pointer"
//       onClick={onClick}
//     >
//       <BiChevronRight />
//     </div>
//   );
// }

// function Dots(dots: any) {
//   const { className, onClick } = dots;
//   return (
//     <div className={className} onClick={onClick}>
//       1
//     </div>
//   );
// }

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 800,
//   slidesToShow: 4,
//   // slidesToScroll: 4,
//   arrows: true,
//   // appendDots: (dots: any) => {
//   //   // console.log("--- dots ---", dots);
//   //   return <ul className="flex absolute top-0">{dots}</ul>;
//   // },
//   // dotsClass: "slick-dots",
//   // prevArrow: <PrevArrow />,
//   // nextArrow: <NextArrow />,
// };

export default function TopCategories() {
  const catData = useSelector((state: RootState) => state.Admin.category);
  const catLoading = useSelector((state: RootState) => state.Admin.catLoading);  
  
  const filteredCategories = catData?.slice(0, 5);

  return (
    <div id="my-Categories" className="w-full">
      <div className="px-2 pt-6 mb-2">
        <h1 className="py-2 text-black font-semibold text-2xl ">
        New Top Category
        </h1>
      </div>
      <div className="relative w-full min-h-16 flex items-center max-[640px]:flex-wrap">
        {/*  */}
        {/* <div className="buttonSlider absolute w-[98%]">
          <div className="bg-slate-500 p-2 text-white rounded-full absolute z-10 start-0">
            <BiChevronLeft className="text-lg" />
          </div>
          <div className="bg-slate-500 p-2 text-white rounded-full absolute z-10 end-0">
            <BiChevronRight />
          </div>
        </div> */}
        {/* <Slider {...settings}>
          {dataCategories.map((item: CategoryData) => {
            return (
              <CategoryCard
                categoryName={item?.categoryName}
                categoryDescription={item?.categoryDescription}
                categoryImage={item?.categoryImage}
                categorySlug={item?.categorySlug}
                _id={item?._id}
                key={item?._id}
              />
            );
          })}
        </Slider> */}

        {catLoading ? (
          <div className="w-full h-96">
            <Loading />{" "}
          </div>
        ) : (
          <>
            {filteredCategories?.length < 1 ? (
              <h1 className="text-2xl font-semibold text-gray-500">
                No Categories
              </h1>
            ) : (
              filteredCategories?.map((item: CategoryData) => {                  
                return (
                  <CategoryCard
                    categoryName={item?.categoryName}
                    categoryDescription={item?.categoryDescription}
                    categoryImage={item?.categoryImage}
                    categorySlug={item?.categorySlug}
                    _id={item?._id}
                    key={item?._id}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
