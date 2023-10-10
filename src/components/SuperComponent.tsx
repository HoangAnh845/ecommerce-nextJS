import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import TileContainer from "./TileContainer";
import ProductDataTable from "./ProductDataTable";
import CategoryDataTable from "./CategoryDataTable";
import PendingOrdersDataTable from "./PendingOrdersDataTable";
import CompletedOrderDataTable from "./CompletedOrderDataTable";
import AddCategory from "@/app/category/add-category/page";
import UpdateCategory from "@/app/category/update-category/page";
import AddProduct from "@/app/product/add-product/page";

export default function SuperComponent() {
  const navActive = useSelector((state: RootState) => {
    return state.AdminNav.ActiveNav;
  });
  const categoryId = useSelector((state: RootState) => {
    return state.Category.CategoryId;
  });

  switch (navActive) {
    case "Base":
      return <TileContainer />;
    case "activeProducts":
      return <ProductDataTable />;
    case "activeProductsAdd":
      return <AddProduct />;
    case "activeCategories":
      return <CategoryDataTable />;
    case "activeCategoriesAdd":
      return <AddCategory />;
    case "activeCategoriesUpdate":
      return <UpdateCategory id={categoryId} />;
    case "activePendingOrder":
      return <PendingOrdersDataTable />;
    case "activeDeliveredOrder":
      return <CompletedOrderDataTable />;
    default:
      return <TileContainer />;
  }
}

export const dynamic = "force-dynamic";
