"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const [Scrolled, setScrolled] = useState(false);
  const user = useSelector((state: RootState) => state.User.userData);

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset < 30 ? false : true);
      return () => (window.onscroll = null);
    };
  }, [Scrolled]);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.clear();
    location.reload();
  };
  // `navbar ${Scrolled ? "bg-white/95  " : "bg-transparent"}  fixed text-white top-0 left-0 z-50`
  return (
    <div className="grid grid-cols-2 gap-2 bg-white py-5">
      <div className="navbar-start w-full">
        <div className="dropdown w-full">
          <label
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
          </label>
          <ul
            tabIndex={0}
            className="max-[640px]:menu max-[640px]:menu-compact max-[640px]:dropdown-content max-[640px]:rounded-box max-[640px]:w-52 min-[640px]:flex min-[640px]:justify-around mt-3 p-2 shadow text-black bg-gray-50"
          >
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Page
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" href={"/"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end flex items-center w-full">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2 cursor-pointer hover:text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>

        <div className="w-1 h-3/4 border-r-2 border-slate-300 mx-2"></div>
        <div className="flex-none">
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
              className="cursor-pointer hover:text-orange-500"
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
