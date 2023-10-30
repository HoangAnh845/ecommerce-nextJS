import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Shop() {
  const dataCategory = [
    {
      title: "HeadPhone",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/HeadPhone.png",
    },
    {
      title: "Video Game",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/VideoGame+.png",
    },
    {
      title: "Protable Speakers",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/ProtableSpeakers.png",
    },
    {
      title: "Digital Camera",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/DigitalCamera.png",
    },
    {
      title: "Gadgets",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/Gadgets.png",
    },
    {
      title: "HomeAppliances",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/HomeAppliances.png",
    },
    {
      title: "AudioRecord",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/AudioRecord.png",
    },
    {
      title: "Computer/ALaptop",
      img: "https://nextjs-ecommerce845.s3.amazonaws.com/Computer%3ALaptop.png",
    },
  ];
  return (
    <>
      <header className="bg-white">
        <Navbar />
      </header>
      <main className="container m-auto">
        <div className="flex">
          <div className="">
            <div>
                <h4>Category</h4>
            </div>
          </div>
          <div>
            <FeaturedProduct />
          </div>
        </div>
      </main>
      <footer className="bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default Shop;
