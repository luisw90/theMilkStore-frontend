"use client";
import { Gallery } from "./Gallery";
import { SearchContainer } from "./SearchContainer";
import { Milk } from "@/app/Types";
import { useEffect, useState } from "react";
import { getMilk } from "@/utils/apiCall";

export const Start = () => {
  const [allMilkData, setAllMilkData] = useState<Milk[]>([]);
  const [currentMilkData, setCurrentMilkData] = useState<Milk[][]>([]);
  const [milkTypes, setMilkTypes] = useState<string[]>([]);
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    const getMilkData = async () => {
      const data = await getMilk();
      setAllMilkData(data);
      createMilkDataChunks(data);
      setProductCount(data.length);
      sortMilkTypes(data);
    };
    getMilkData();
  }, []);

  const sortMilkTypes = (data: Milk[]) => {
    let allMilkTypes: string[] = [];
    data.map((milk: Milk) => {
      if (!allMilkTypes.includes(milk.type)) {
        allMilkTypes.push(milk.type);
      }
    });
    setMilkTypes(allMilkTypes);
  };

  const getAllMilkData = async () => {
    createMilkDataChunks(allMilkData);
    setProductCount(allMilkData.length);
  };

  const searchMilkData = async (milksearch: string) => {
    const searchArray = allMilkData.filter((milk: Milk) =>
      milk.name.toLowerCase().includes(milksearch.toLowerCase())
    );
    createMilkDataChunks(searchArray);
    setProductCount(searchArray.length);
  };

  const filterMilkData = async (milktype: string[]) => {
    const filteredMilkArray: Milk[] = [];
    allMilkData.map((milk: Milk) => {
      if (milktype.includes(milk.type)) {
        filteredMilkArray.push(milk);
      }
    });
    setProductCount(filteredMilkArray.length);
    createMilkDataChunks(filteredMilkArray);
  };

  const createMilkDataChunks = (data: Milk[]) => {
    const milkItemsPerChunk = 9;
    const result = data.reduce(
      (resultArray: any[], item: Milk, index: number) => {
        const chunkIndex: number = Math.floor(index / milkItemsPerChunk);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      },
      []
    );
    setCurrentMilkData(result);
  };

  return (
    <main className="home__container">
      <SearchContainer
        milkTypes={milkTypes}
        productCount={productCount}
        getAllMilkData={getAllMilkData}
        filterMilkData={filterMilkData}
        searchMilkData={searchMilkData}
      />
      <Gallery currentMilkData={currentMilkData} />
    </main>
  );
};
