"use client";

import { get_product_by_category_id } from "@/Services/Admin/product";
import Loading from "@/app/loading";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import useSWR from "swr";

interface pageParam {
  id: string;
}

type ProductData = {
  productName: string;
  productImage: string;
  productSlug: string;
  productPrice: Number;
  productFeatured: Boolean;
  loction: string;
  productCategory: {
    categoryName: string;
    categoryDescription: string;
    _id: string;
  };
  _id: string;
};

export default function Page({
  params,
  searchParams,
}: {
  params: pageParam;
  searchParams: any;
}) {
  const [thisProduct, setThisProdData] = useState<ProductData[] | []>([]);
  const { data, isLoading } = useSWR(
    "/gettingProductOFSpecificCategoryID",
    () => get_product_by_category_id(params.id)
  );
  if (data?.success !== true) toast.error(data?.message);

  useEffect(() => {
    setThisProdData(data?.data);
  }, [data]);

  const CategoryName = thisProduct?.map((item) => {
    return item?.productCategory?.categoryName;
  });

  return (
    <div className="">
      {/* <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
        <ul>
          <li>
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            {CategoryName?.[0] || "Loading Category"}
          </li>
        </ul>
      </div> */}
      <header className="bg-white">
        <Navbar />
        <Hero />
      </header>
      <div className="container m-auto flex justify-between py-5">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-4 gap-2">
              {thisProduct?.map((item: ProductData) => {
                return (
                  <ProductCard
                    productName={item?.productName}
                    productPrice={item?.productPrice}
                    productFeatured={item?.productFeatured}
                    loction="category"
                    productImage={item?.productImage}
                    productSlug={item?.productSlug}
                    productCategory={item?.productCategory}
                    _id={item?._id}
                    key={item?._id}
                  />
                );
              })}
            </div>
          </>
        )}
        {isLoading === false && thisProduct === undefined && (
          <div className="flex justify-center items-center text-gray-500 text-center w-full font-semibold h-[60vh] leading-9">
            <span>
              <AiOutlineFileSearch className="text-2xl m-auto" />
              No Product Found in this Category
            </span>
          </div>
        )}
      </div>
      <footer className="bg-neutral">
        <Footer />
      </footer>
      {/* <ToastContainer /> */}
    </div>
  );
}
