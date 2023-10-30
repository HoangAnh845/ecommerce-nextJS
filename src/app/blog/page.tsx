import BlogProduct from "@/components/BlogProduct";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Blog() {
  return (
    <>
      <header className="bg-white">
        <Navbar />
      </header>
      <main className="container m-auto">
        <BlogProduct />
      </main>
      <footer className="bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default Blog;
