import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocationOn, MdPhoneIphone } from "react-icons/md";
import { RiAccountBoxFill, RiMailOpenLine } from "react-icons/ri";
import { TbMail, TbPhone } from "react-icons/tb";
import Map from "@/components/Map";

function Contact() {
  const key = 'AIzaSyBEh9hG8nwkp7_cxbLiyGmPFP7pYjAXJ7o'
  return (
    <>
      <header className=" bg-white">
        <Navbar />
      </header>
      <main className="container m-auto mb-5">
        <div className="grid grid-cols-2 gap-2 bg-gray-100 border rounded-lg">
          <div className="p-5">
            <div className="border-b-2 border-gray-300 pb-3 font-bold text-lg relative">
              Contact Info
              <div className="absolute bottom-[-5%] h-[2px] w-2/12 bg-orange-500"></div>
            </div>
            <ul className="mt-8">
              <li className="flex items-start gap-6 border-b-1">
                <div className="p-2 bg-black text-white w-fit rounded-full">
                  <MdOutlineLocationOn className="text-4xl" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold">Head Office</h5>
                  <p className="mt-1">
                    Your address here <br />
                    54/X, New Down City
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6 border-b-1 my-5">
                <div className="p-2 bg-black text-white w-fit rounded-full">
                  <TbPhone className="text-4xl" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold">Phone</h5>
                  <p className="mt-1">
                    +00 123 456 789
                    <br />
                    +00 123 456 989
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="p-2 bg-black text-white w-fit rounded-full">
                  <RiMailOpenLine className="text-4xl" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold">Email</h5>
                  <p className="mt-1">
                    youremail@demo.com
                    <br />
                    www.yoursite.web
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <div className="border-b-2 border-gray-300 pb-3 font-bold text-lg relative mb-8">
              Get In Touch
              <div className="absolute bottom-[-5%] h-[2px] w-2/12 bg-orange-500"></div>
            </div>
            <form>
              <div className="flex gap-4 items-center border rounded-lg bg-white py-2 px-4">
                <BsPerson className="text-2xl text-gray-400" />
                <input
                  className="border-none bg-transparent outline-none w-10/12"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex gap-4 items-center border rounded-lg bg-white py-2 px-4 my-3">
                <TbMail className="text-2xl text-gray-400" />
                <input
                  className="border-none bg-transparent outline-none w-10/12"
                  type="text"
                  placeholder="Enter Your Mail"
                />
              </div>
              <div className="flex gap-4 items-center border rounded-lg bg-white py-2 px-4">
                <MdPhoneIphone className="text-2xl text-gray-400" />
                <input
                  className="border-none bg-transparent outline-none w-10/12"
                  type="text"
                  placeholder="Your Subject"
                />
              </div>
              <textarea
                rows={5}
                className="w-full bg-white mt-3 p-3 outline-none rounded-lg"
                placeholder="Your Message"
              ></textarea>
              <button className="py-2 px-3 bg-orange-500 text-white text-sm mt-3 rounded-lg">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>

        <div>
        {/* <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
        </div>
      </main>
      <footer className="bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
