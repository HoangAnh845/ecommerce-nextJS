"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCartAdd, BiPieChart } from "react-icons/bi";
import { RiBookMarkFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import { get_product_by_id } from "@/Services/Admin/product";
import Loading from "@/app/loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { add_to_cart } from "@/Services/common/cart";
import { setUserData } from "@/utils/UserDataSlice";
import { bookmark_product } from "@/Services/common/bookmark";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AiFillStar } from "react-icons/ai";

interface pageParam {
  id: string;
}

type ProductData = {
  _id: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productSlug: string;
  productPrice: Number;
  productQuantity: Number;
  productFeatured: Boolean;
  productCategory: {
    categoryName: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
};

type User = {
  email: string;
  name: string;
  _id: string;
};

export default function Page({
  params,
  searchParams,
}: {
  params: pageParam;
  searchParams: any;
}) {
  const dispatch = useDispatch();
  const [prodData, setprodData] = useState<ProductData | undefined>(undefined);
  const user = useSelector(
    (state: RootState) => state.User.userData
  ) as User | null;
  const { data, isLoading } = useSWR("/gettingProductbyID", () =>
    get_product_by_id(params.id)
  );
  if (data?.success !== true) toast.error(data?.message);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, []);

  useEffect(() => {
    setprodData(data?.data);
  }, [data]);

  const AddToCart = async () => {
    const finalData = { productID: params.id, userID: user?._id };
    const res = await add_to_cart(finalData);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  const AddToBookmark = async () => {
    const finalData = { productID: params.id, userID: user?._id };
    const res = await bookmark_product(finalData);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div className="w-full h-full dark:text-black">
      <header className="bg-white">
        <Navbar />
      </header>
      <div className="container m-auto pb-5">
        {isLoading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 ">
              <div>
                <div className="w-full h-96 rounded-xl z-10 relative">
                  <Image
                    src={prodData?.productImage || "/images98.jpg"}
                    alt="no image"
                    fill
                  />
                </div>
                <div className="pt-5 mt-5 border-t-2 flex gap-2 justify-center">
                  <Image
                    src={prodData?.productImage || "/images98.jpg"}
                    alt="no image"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={prodData?.productImage || "/images98.jpg"}
                    alt="no image"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={prodData?.productImage || "/images98.jpg"}
                    alt="no image"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={prodData?.productImage || "/images98.jpg"}
                    alt="no image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="w-full px-5 h-full rounded-lg py-2 border shadow-lg">
                <div className="py-2">
                  <h1 className="text-3xl font-semibold text-black">
                    {prodData?.productName}
                  </h1>
                  {prodData?.productFeatured && (
                    <p className="px-3 py-2 bg-orange-600 hidden lg:flex font-semibold tracking-widest rounded text-white  items-center justify-center ">
                      <DiCodeigniter className="mx-2" />
                      Featured Product
                    </p>
                  )}
                </div>
                <h1 className="text-2xl font-semibold text-orange-500">
                  $ {`${prodData?.productPrice}.00`}
                </h1>
                <div className="flex my-2 gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <AiFillStar
                      key={item}
                      className={`${item <= 4 && "text-yellow-400"}`}
                    />
                  ))}
                </div>
                <p className=" py-2 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmo tempor incididunt ut labore et dolore magna aliqua.{" "}
                  {prodData?.productDescription}
                </p>
                <div className="flex">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-full mt-3">
                    <button onClick={() => ""}>-</button>
                    <span className="p-2">0</span>
                    <button onClick={() => ""}>+</button>
                  </div>
                  <button
                    onClick={AddToCart}
                    className="bg-orange-500 text-white px-3 py-2 rounded-full mt-3 ms-4"
                  >
                    {" "}
                    Add to Cart
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <div className="flex justify-between w-full px-5 py-3 border rounded-lg">
                    <Image
                      src={"/support.png"}
                      alt="support"
                      width={30}
                      height={30}
                      style={{ objectFit: "contain" }}
                    />
                    <span>
                      Support <br></br> 24/7
                    </span>
                  </div>
                  <div className="flex justify-between w-full px-5 py-3 border rounded-lg">
                    <Image
                      src={"/cardPayment.png"}
                      alt="support"
                      width={30}
                      height={30}
                      style={{ objectFit: "contain" }}
                    />
                    <span>
                      Card <br></br> Payment
                    </span>
                  </div>
                  <div className="flex justify-between w-full px-5 py-3 border rounded-lg">
                    <Image
                      src={"/freeShipping.png"}
                      alt="support"
                      width={30}
                      height={30}
                      style={{ objectFit: "contain" }}
                    />
                    <span>
                      Free <br></br> Shipping
                    </span>
                  </div>
                </div>
                <div className="ps-3">
                  <ul>
                    <li>SKU: WX-256HG</li>
                    <li>Categories: Home, Electronic</li>
                    <li>Tag Electronic</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border shadow-lg p-5 rounded-lg">
              <h1 className="font-bold text-2xl mb-3">Description</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea comm consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totamhy rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur
              </p>
            </div>

            <div className="mt-10 border shadow-lg p-5 rounded-lg">
              <h1 className="font-bold text-2xl mb-3">Specification</h1>
              <ul>
                <li>
                  {" "}
                  <b>Weight:</b> 250 g
                </li>
                <li>
                  {" "}
                  <b>Dimensions:</b> 10 x 10 x 15 cm
                </li>
                <li>
                  {" "}
                  <b>Materials:</b> 60% cotton, 40% polyester
                </li>
                <li>
                  {" "}
                  <b>Other Info:</b> American heirloom jean shorts pug seitan
                  letterpress
                </li>
              </ul>
              <p className="border-t-2 mt-2 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                velit corporis quo voluptate culpa soluta, esse accusamus, sunt
                quia omnis amet temporibus sapiente harum quam itaque libero
                tempore. Ipsum, ducimus. lorem
              </p>
            </div>

            <div className="mt-10 border shadow-lg p-5 rounded-lg">
              <h1 className="font-bold text-2xl mb-5">Review</h1>
              <div className="flex">
                <div className="">
                  <Image
                    src={"/profile.jpg"}
                    alt="profile"
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div className="ms-3">
                    <ul>
                      <li>HoangAnh</li>
                      <li className="flex my-2 gap-1">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <AiFillStar
                            key={item}
                            className={`${item <= 4 && "text-yellow-400"}`}
                          />
                        ))}
                      </li>
                      <li className="text-sm text-gray-500">
                        2023-05-11 12:00{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 ps-2">
                  Không sai lầm khi chọn mà xanh , quá cute mà lại hợp với máy, mn ủng hộ shop nha
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
      <footer className="bg-neutral">
        <Footer />
      </footer>
    </div>
  );
}

{
  /* <button
                  onClick={AddToBookmark}
                  className="btn m-2  lg:w-52 h-10 btn-outline btn-success flex items-center justify-center"
                >
                  {" "}
                  <RiBookMarkFill className="text-3xl mx-2" />
                  Bookmark
                </button> */
}
