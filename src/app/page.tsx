"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import TopCategories from "@/components/TopCategories";
import { get_all_categories } from "@/Services/Admin/category";
import { get_all_products } from "@/Services/Admin/product";
import useSWR from "swr";
import { toast, ToastContainer } from "react-toastify";
import {
  setCategoryData,
  setCatLoading,
  setProdLoading,
  setProductData,
} from "@/utils/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./loading";
import { setUserData } from "@/utils/UserDataSlice";
import { RootState } from "@/Store/store";
import DiscountProduct from "@/components/DiscountProduct";
import BannerProduct from "@/components/BannerProduct";
import BlogProduct from "@/components/BlogProduct";
import BrandLogo from "@/components/BrandLogo";
import Image from "next/image";
import { TbMailOpened } from "react-icons/tb";

export default function Home() {
  const dispatch = useDispatch();
  const categoryLoading = useSelector(
    (state: RootState) => state.Admin.catLoading
  );
  const productLoading = useSelector(
    (state: RootState) => state.Admin.productLoading
  );
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(16 / 9);
  // useEffect(() => {
  //   toast.warning("Application is under development , some features may not work properly")
  //   toast.warning('This is a demo website, you can not buy anything from here')
  // }, [])

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, []);

  useEffect(() => {
    FetchDataOFProductAndCategory();
  }, []);

  const FetchDataOFProductAndCategory = async () => {
    const categoryData = await get_all_categories();
    if (categoryData?.success !== true) toast.error(categoryData?.message);

    dispatch(setCategoryData(categoryData?.data));

    const productData = await get_all_products();
    if (productData?.success !== true) toast.error(productData?.message);

    dispatch(setProductData(productData?.data));

    setLoading(false);
  };

  useEffect(() => {
    dispatch(setCatLoading(loading));
    dispatch(setProdLoading(loading));
  }, [categoryLoading, productLoading, dispatch, loading]);

  return (
    <>
      <header className="bg-white">
        <Navbar />
        <Hero
        // setRatio={setRatio}
        />
      </header>
      <>
        <main className="container m-auto">
          <TopCategories />
          <DiscountProduct />
          <FeaturedProduct />
          <BannerProduct />
          <BlogProduct />
          <BrandLogo />
        </main>
      </>
      <div className="w-full h-28 relative">
        <Image src={"/bg2.jpg"} alt="bg2" quality={80} fill={true} className="z-1" />
        <div className="container m-auto grid grid-cols-2 gap-2 relative text-white h-[inherit]">
          <div className="flex items-center">
            <TbMailOpened className="text-5xl"/>
            <div className="ms-2">
              <h3 className="text-xl font-bold">Join our newsletter & 10% Off</h3>
              <span className="text-sm text-gray-300">Sign up for our newsletter to get up-to-date from us</span>
            </div>
          </div>
          <div className="flex items-center">
            <input type="email" placeholder="Enter Your Mail" className=" bg-white rounded-l-lg p-3 w-8/12 outline-none" />
            <button type="button" className="p-3 bg-orange-500 rounded-r-lg">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <footer className="bg-neutral">
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
}

/* 
 <>
      <Navbar />
      <Hero setRatio={setRatio} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <main className="my-2">
            <TopCategories />
            <FeaturedProduct />
          </main>
          <Footer />
        </>
      )}
      <ToastContainer />
    </>

*/
