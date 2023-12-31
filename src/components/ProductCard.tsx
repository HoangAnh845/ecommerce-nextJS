import { bookmark_product } from "@/Services/common/bookmark";
import { add_to_cart } from "@/Services/common/cart";
import { RootState } from "@/Store/store";
import { setUserData } from "@/utils/UserDataSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

type ProductData = {
  productName: string;
  productImage: string;
  productSlug: string;
  productPrice: Number;
  productFeatured: Boolean;
  loction: string;
  productCategory: {
    categoryName: string;
    categoryDescription: string;
    _id: string;
  };
  _id: string;
};

type User = {
  email: string;
  name: string;
  _id: string;
};

export default function ProductCard({
  productName,
  productFeatured,
  loction,
  productImage,
  productCategory,
  productPrice,
  _id,
  productSlug,
}: ProductData) {
  const router = useRouter();

  const user = useSelector(
    (state: RootState) => state.User.userData
  ) as User | null;

  const AddToCart = async () => {
    const finalData = { productID: _id, userID: user?._id };
    const res = await add_to_cart(finalData);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  const AddToBookmark = async () => {
    const finalData = { productID: _id, userID: user?._id };
    const res = await bookmark_product(finalData);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div className="cursor-pointer card-compact bg-white shadow-xl relative border h-[fit-content] rounded-lg">
      <div
        onClick={() => router.push(`/product/product-detail/${_id}`)}
        className="rounded p-5"
      >
        <Image
          src={productImage || "/images98.jpg"}
          alt="no Image"
          className="rounded"
          width={500}
          height={300}
        />
      </div>

      <div className="card-body">
        <h2
          className=""
          onClick={() => router.push(`/product/product-detail/${_id}`)}
        >
          {productName}{" "}
        </h2>
        <p
          className="font-semibold text-orange-500"
          onClick={() => router.push(`/product/product-detail/${_id}`)}
        >{`$${productPrice}.000`}</p>
        {
          loction !== "category" && <div className="card-actions justify-end z-20">
            <button onClick={AddToCart} className="">
              <BsCartPlus className="text-4xl border p-2 rounded-full hover:bg-orange-500 hover:text-white" />
            </button>
            <button
              onClick={AddToBookmark}
              className="btn btn-circle btn-ghost text-black hover:text-red-500 absolute top-0 right-0 "
            >
              <MdFavorite className="text-2xl font-semibold" />
            </button>
            {/* <button onClick={AddToBookmark} className="btn btn-circle btn-ghost text-black absolute top-[10%] right-0 "><IoMdEye className='text-2xl font-semibold' /></button> */}
          </div>
        }
      </div>
    </div>
  );
}
