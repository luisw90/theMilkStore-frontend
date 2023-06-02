import React, { FC, useEffect, useState } from "react";
import { GalleryCard } from "./GalleryCard";
import { Milk } from "@/app/Types";

type GalleryProps = {
  currentMilkData: Milk[][];
};
export const Gallery: FC<GalleryProps> = ({ currentMilkData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const changePage = (addition: boolean) => {
    if (currentPage < currentMilkData.length && addition == true) {
      setCurrentPage((previous) => previous + 1);
    } else if (currentPage != 1 && addition == false) {
      setCurrentPage((previous) => previous - 1);
    }
  };

  const currentMilkPage = currentMilkData[currentPage - 1];
  return (
    <>
      <div className="gallery__container">
        {currentMilkPage &&
          currentMilkPage.map((milkProduct: Milk) => {
            return (
              <GalleryCard key={milkProduct.id} milkProduct={milkProduct} />
            );
          })}
      </div>
      <div className="pageChange__container">
        <button className="pageChange__icon" onClick={() => changePage(false)}>
          &#60;
        </button>
        <div>
          <div>
            {currentPage} of {currentMilkData.length}
          </div>
        </div>
        <button className="pageChange__icon" onClick={() => changePage(true)}>
          &#62;
        </button>
      </div>
    </>
  );
};
