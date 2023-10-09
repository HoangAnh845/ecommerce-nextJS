import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import TileContainer from "./TileContainer";
import ProductDataTable from "./ProductDataTable";
import CategoryDataTable from "./CategoryDataTable";
import PendingOrdersDataTable from "./PendingOrdersDataTable";
import CompletedOrderDataTable from "./CompletedOrderDataTable";
import AddCategory from "@/app/category/add-category/page";

export default function SuperComponent() {
  const navActive = useSelector((state: RootState) => {
    return state.AdminNav.ActiveNav;
  });

  switch (navActive) {
    case "Base":
      return <TileContainer />;
    case "activeProducts":
      return <ProductDataTable />;
    case "activeCategories":
      return <CategoryDataTable />;
    case "activeCategoriesAdd":
      return <AddCategory />;
    case "activePendingOrder":
      return <PendingOrdersDataTable />;
    case "activeDeliveredOrder":
      return <CompletedOrderDataTable />;
    default:
      return <TileContainer />;
  }
}

export const dynamic = "force-dynamic";
