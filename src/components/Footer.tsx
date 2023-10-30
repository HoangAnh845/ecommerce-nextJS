/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { GrFacebookOption, GrLinkedinOption, GrRss } from "react-icons/gr";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiRssFill } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { TfiLocationPin, TfiYoutube } from "react-icons/tfi";

export default function Footer() {
  return (
    <>
      <div className="footer container m-auto py-10 px-5 text-neutral-content">
        <div className="flex w-full">
          <div className="pe-4">
            <h3 className="font-bold text-base">DOWNLOAD APP</h3>
            <p className="my-5 text-xs">
              Elehaus App is now available on App Store <br></br>& Google Play.
              Get it now.
            </p>
            <div className="flex gap-2 w-2/5">
              <img src="/store-apple.jpg" alt="store-apple" />
              <img src="/store-android.jpg" alt="store-android" />
            </div>
            <div className="mt-5">
              <div className="cursor-pointer bg-[#3b5998] p-2 inline-block rounded-md me-3">
                <GrFacebookOption className="text-white" />
              </div>
              <div className="cursor-pointer bg-[#1da1f2] p-2 inline-block rounded-md me-3">
                <TbBrandTwitter className="text-white" />
              </div>
              <div className="cursor-pointer bg-[#cd201f] p-2 inline-block rounded-md me-3">
                <TfiYoutube className="text-white" />
              </div>
              <div className="cursor-pointer bg-[#0077b5] p-2 inline-block rounded-md me-3">
                <GrLinkedinOption className="text-white" />
              </div>
              <div className="cursor-pointer bg-[#f26522] p-2 inline-block rounded-md me-3">
                <RiRssFill className="text-white" />
              </div>
            </div>
          </div>
          <div className="w-4/5 grid grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold text-base">INFORMATION</h3>
              <ul className="mt-4 leading-6 text-xs">
                <li className="cursor-pointer hover:text-orange-500">
                  About us
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  {" "}
                  Delivery information
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-orange-500">Sales</li>
                <li className="cursor-pointer hover:text-orange-500">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Shipping Policy
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  EMI Payment
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base">ACCOUNT</h3>
              <ul className="mt-4 leading-6 text-xs">
                <li className="cursor-pointer hover:text-orange-500">
                  My account
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  My orders
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Returns
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Shipping
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Wishlist
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  How Does It Work
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Merchant Sign Up
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base">STORE</h3>
              <ul className="mt-4 leading-6 text-xs">
                <li className="cursor-pointer hover:text-orange-500">
                  Affiliate
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Bestsellers
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Latest products
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  All Collection
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base">CONTACT US</h3>
              <p className="my-5 text-xs">
                If you have any question. please contact us{" "}
                <span className="text-orange-500">demo@example.com</span>
              </p>
              <div className="flex items-center">
                <TfiLocationPin className="text-4xl me-2" />
                <div className="text-xs">
                  Your address goes here. <br></br>123, Address.
                </div>
              </div>
              <div className="mt-5 flex items-center">
                <MdOutlinePhoneIphone className="text-4xl me-2" />
                <div className="text-xs">
                  + 0 123 456 789 <br></br>+ 0 129 456 789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
