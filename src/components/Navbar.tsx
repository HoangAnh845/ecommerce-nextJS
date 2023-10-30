"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavorite, MdPerson } from "react-icons/md";
import { GrLogin } from "react-icons/gr";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosPerson, IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  const router = useRouter();
  const [Scrolled, setScrolled] = useState(false);
  const user = useSelector((state: RootState) => state.User.userData);

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.scrollY < 30 ? false : true);
      return () => (window.onscroll = null);
    };
  }, [Scrolled]);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.clear();
    location.reload();
  };

  // `navbar ${Scrolled ? "bg-white/95  " : "bg-transparent"}  `
  return (
    <div
      className={`bg-white pb-5 ${
        Scrolled && "fixed top-0 left-0 z-50 w-full"
      }`}
    >
      <div className="bg-orange-300">
        <div className="container m-auto flex items-center justify-between ">
          <div className="">
            <Image src={"/logo.png"} alt="logo" width={70} height={70} />
          </div>
          <div className="flex items-center w-1/2">
            <input
              type="text"
              className="bg-white p-2 w-9/12 rounded-l-lg outline-none"
              placeholder="Search items...."
            />
            <div className="p-3 h-auto bg-slate-500 rounded-r-lg cursor-pointer hover:bg-orange-500">
              <AiOutlineSearch className="text-white " />
            </div>
          </div>
          <div className="w-1/3 flex justify-end gap-4">
            <button
              onClick={() => {}}
              className="text-xs cursor-pointer hover:text-orange-500"
            >
              <IoMdNotificationsOutline className="text-3xl" />
              Notif
            </button>
            <button
              onClick={() => {}}
              className="text-xs cursor-pointer hover:text-orange-500"
            >
              <AiOutlineShoppingCart className="text-3xl" />
              Shop
            </button>
            <button
              onClick={() => router.push("/auth/login")}
              className="text-xs cursor-pointer hover:text-orange-500"
            >
              <MdPerson className="text-3xl" />
              Login
            </button>
          </div>
        </div>
        {/* <div className="flex-none">
          {user ? (
            <div className="flex items-center justify-center  min-h-full">
              <button onClick={handleLogout} className="btn text-white mx-2">
                logout
              </button>
              <button
                onClick={() => router.push("/order/create-order")}
                className="btn btn-circle  mx-2"
              >
                <FaCartArrowDown className="text-white text-xl" />
              </button>
              <button
                onClick={() => router.push("/bookmark")}
                className="btn btn-circle  mx-2"
              >
                <MdFavorite className="text-white text-xl" />
              </button>
              <button
                onClick={() => router.push("/order/view-orders")}
                className="btn btn-circle  mx-2"
              >
                <CiDeliveryTruck className="text-white text-xl" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/auth/login")}
              className="btn w-24 cursor-pointer hover:text-orange-500 flex items-center"
            >
              Login
            </button>
          )}
        </div> */}
      </div>
      <div className="w-full bg-gray-50 p-4 shadow">
        <div className="container m-auto">
          {/* <label
            tabIndex={0}
            className="btn btn-active text-white btn-circle sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label> */}
          <ul
            tabIndex={0}
            className="max-[640px]:menu max-[640px]:menu-compact max-[640px]:dropdown-content max-[640px]:rounded-box max-[640px]:w-52 min-[640px]:flex min-[640px]:justify-around text-black "
          >
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
