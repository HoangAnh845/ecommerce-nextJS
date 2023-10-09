/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type CategoryData = {
  _id: string;
  categoryName: string;
  categoryDescription: string;
  categoryImage: string;
  categorySlug: string;
};

export default function CategoryCard({
  categoryDescription,
  categoryImage,
  categoryName,
  categorySlug,
  _id,
}: CategoryData) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/category/category-product/${_id}`)}
      className="text-black cursor-pointer h-44 m-3 rounded-md bg-gray-50 shadow-xl relative"
    >
      <div className="w-full h-32 p-5 bg-gray-200 rounded-t-md overflow-hidden">
        <img src={categoryImage} className="w-3/5 m-auto" alt="image" />
      </div>
      <div className="p-3 text-center">
        <h2 className="mb-1 hover:text-orange-500">{categoryName} </h2>
      </div>
    </div>
  );
}
