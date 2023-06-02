import React, { FC } from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";

type GalleryProps = {
  milkTypes: string[];
  productCount: number;
  getAllMilkData: () => void;
  filterMilkData: (milktype: string[]) => void;
  searchMilkData: (milksearch: string) => void;
};

export const SearchContainer: FC<GalleryProps> = ({
  milkTypes,
  productCount,
  getAllMilkData,
  filterMilkData,
  searchMilkData,
}) => {
  return (
    <>
      <Search searchMilkData={searchMilkData} />
      <Filter
        milkTypes={milkTypes}
        getAllMilkData={getAllMilkData}
        filterMilkData={filterMilkData}
      />
      <div className="productCount__container">{productCount} Products</div>
    </>
  );
};
