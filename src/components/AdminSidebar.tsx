import Link from "next/link";
import React from "react";
import {
  AiOutlineBook,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiBarChartSquare, BiCategory, BiCookie } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { setNavActive } from "@/utils/AdminNavSlice";
import { useDispatch } from "react-redux";
import { TbBox, TbSettings, TbUsers } from "react-icons/tb";

export default function AdminSidebar() {
  const dispatch = useDispatch();
  return (
    <div className="w-4/12 hidden text-white md:block bg-[#393741] h-full">
      <div className="w-full my-5 ms-[-15px]">
        <h1 className="flex text-2xl font-semibold items-center justify-center">
          <TbBox className="mx-2 text-white text-3xl" /> Ecommerce
        </h1>
      </div>
      <div className="w-full ">
        <ul className="flex px-4 flex-col items-start justify-center">
          <li
            onClick={() => dispatch(setNavActive("Base"))}
            className="py-3 px-1 mb-3"
          >
            <button className="flex items-center justify-center">
              <AiOutlineDashboard className="mx-2 text-xl" /> Dashboard
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              <TbUsers className="mx-2 text-xl" /> Users
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              <AiOutlineBook className="mx-2 text-xl" /> Blog
            </button>
          </li>
          <li
            onClick={() => dispatch(setNavActive("activeCategories"))}
            className="py-3 px-1 mb-3"
          >
            <button className="flex items-center justify-center">
              {" "}
              <BiCategory className="mx-2 text-xl" /> Categories
            </button>
          </li>
          <li
            onClick={() => dispatch(setNavActive("activeProducts"))}
            className="py-3 px-1 mb-3"
          >
            <button className="flex items-center justify-center">
              {" "}
              <BiCookie className="mx-2 text-xl" /> Products
            </button>
          </li>
          <li
            onClick={() => dispatch(setNavActive("activePendingOrder"))}
            className="py-3 px-1 mb-3"
          >
            <button className="flex items-center justify-center">
              <AiOutlineShoppingCart className="mx-2 text-xl" /> Orders
            </button>
          </li>
          <li onClick={() => dispatch(setNavActive("activeDeliveredOrder"))} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              <MdOutlineLocalShipping className="mx-2 text-xl" /> Shipping
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              <BiBarChartSquare className="mx-2 text-xl" /> Statistics
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              <TbSettings className="mx-2 text-xl" /> Setting
            </button>
          </li>
          {/* <li className="py-3 px-1 mb-3">
            <Link
              href={"/product/add-product"}
              className="flex items-center justify-center"
            >
              {" "}
              <IoIosAddCircle className="mx-2" /> Add Products
            </Link>
          </li>
          <li className="py-3 px-1 mb-3">
            <Link
              href={"/category/add-category"}
              className="flex items-center justify-center"
            >
              {" "}
              <IoIosAddCircle className="mx-2" /> Add Category
            </Link>
          </li>
          <li
            className="py-3 px-1 mb-3"
            onClick={() => dispatch(setNavActive("activePendingOrder"))}
          >
            <button className="flex items-center justify-center">
              {" "}
              <MdOutlinePendingActions className="mx-2" /> Pending orders
            </button>
          </li>
          <li
            className="py-3 px-1 mb-3"
            onClick={() => dispatch(setNavActive("activeDeliveredOrder"))}
          >
            <button className="flex items-center justify-center">
              {" "}
              <GrCompliance className="mx-2" />
              Completed orders
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
