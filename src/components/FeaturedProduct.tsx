"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

import { RootState } from "@/Store/store";
import Loading from "@/app/loading";

type ProductData = {
  productName: string;
  productImage: string;
  productSlug: string;
  productPrice: Number;
  productFeatured: Boolean;
  productCategory: {
    categoryName: string;
    _id: string;
    categoryDescription: string;
  };
  _id: string;
};

const data_Product = [
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "1",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "2",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "3",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "4",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "5",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "6",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "7",
  },
  {
    productName: "TGame Triger Finger New Insulated PH-X",
    productImage: "/mob-intro.jpg",
    productSlug: "",
    productPrice: 160,
    productFeatured: true,
    productCategory: {
      categoryName: "",
      _id: "",
      categoryDescription: "",
    },
    _id: "8",
  },
];

export default function FeaturedProduct() {
  const prodData = useSelector((state: RootState) => state.Admin.product);
  const prodLoading = useSelector(
    (state: RootState) => state.Admin.productLoading
  );

  const FeaturedProducts = prodData?.filter((prod: ProductData) => {
    if (prod?.productFeatured) {
      return prod;
    }
  });

  const filteredProducts = FeaturedProducts?.slice(0, 9);

  return (
    <div className="w-full text-black  flex items-center flex-col justify-start">
      <div className="flex items-center justify-between w-full px-2 py-2 mb-2">
        <h1 className="font-semibold text-2xl ">New Arrivals Products!</h1>
        <div>
          <ul className="flex gap-4">
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              All{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              Audio/Video{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              Gamming{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              Headphone{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              Digital{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer hover:border-b-2 hover:border-orange-300">
              Camera
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2 grid grid-cols-4 gap-4">
        {
            data_Product.map((item: ProductData) => {
                return (
                  <ProductCard
                    productName={item?.productName}
                    productPrice={item?.productPrice}
                    productFeatured={item?.productFeatured}
                    productImage={item?.productImage}
                    productCategory={item?.productCategory}
                    productSlug={item?.productSlug}
                    _id={item?._id}
                    key={item?._id}
                  />
                );
              })
        }
        {/* {prodLoading ? (
          <Loading />
        ) : (
          <>
            {filteredProducts?.length < 1 ? (
              <h1 className="text-2xl font-semibold text-gray-500">
                No Featured Products
              </h1>
            ) : (
              filteredProducts?.map((item: ProductData) => {
                return (
                  <ProductCard
                    productName={item?.productName}
                    productPrice={item?.productPrice}
                    productFeatured={item?.productFeatured}
                    productImage={item?.productImage}
                    productCategory={item?.productCategory}
                    productSlug={item?.productSlug}
                    _id={item?._id}
                    key={item?._id}
                  />
                );
              })
            )}
          </>
        )} */}
      </div>
    </div>
  );
}
