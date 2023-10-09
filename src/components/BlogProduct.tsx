import React from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { TfiEye } from "react-icons/tfi";

const data_blog = [
  {
    name: "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor.",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelio et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliql ex ea commodo consequat. Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    views: "290",
    img: "	https://htmldemo.net/elehaus/elehaus/assets/images/blog/1.jpg",
    date: "March 13, 2022 ",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor.",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelio et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliql ex ea commodo consequat. Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    views: "290",
    img: "	https://htmldemo.net/elehaus/elehaus/assets/images/blog/1.jpg",
    date: "March 13, 2022 ",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor.",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelio et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliql ex ea commodo consequat. Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    views: "290",
    img: "	https://htmldemo.net/elehaus/elehaus/assets/images/blog/1.jpg",
    date: "March 13, 2022 ",
  },
];

function BlogProduct() {
  return (
    <>
      <div className="w-full text-black  flex items-center flex-col justify-start py-4">
        <div className="flex items-center justify-between w-full mb-4">
          <h1 className="font-semibold text-2xl ">Our Latest Blog</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data_blog.map((item, index) => {
            return (
              <div key={index} className="border shadow-xl rounded-md">
                <div>
                  <img src={item.img} alt="log"/>
                </div>
                <div className="px-3 py-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <BiCalendar className="text-orange-500 text-lg"/>
                      <span className="ms-2">{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <TfiEye className="text-orange-500 text-lg"/>
                      <span className="ms-2">{item.views} views</span> 
                    </div>
                  </div>
                  <h2 className="my-3 font-bold">{item.name.substring(0, 30)}...</h2>
                  <p className="text-xs">{item.des.substring(0, 100)}</p>
                  <button className="mt-3 me-auto flex items-center hover:text-orange-500">
                    <span className="text-xs me-1">READ MORE</span>
                    <AiOutlineSwapRight className="text-lg"/>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogProduct;
