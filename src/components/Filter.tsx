"use client";
import React, { FC, useEffect, useState } from "react";
import "../app/css-group/input.css";
import "../app/css-group/dropdownsearch.css";

type FilterProps = {
  milkTypes: string[];
  getAllMilkData: () => void;
  filterMilkData: (milktype: string[]) => void;
};

export const Filter: FC<FilterProps> = ({
  milkTypes,
  getAllMilkData,
  filterMilkData,
}) => {
  const [currentMilkTypes, setCurrentMilkTypes] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    currentMilkTypes.length > 0
      ? filterMilkData(currentMilkTypes)
      : getAllMilkData();
  }, [currentMilkTypes]);

  const handleCheckbox = (e: any) => {
    const milkType = e.target.value;
    if (e.target.checked) {
      setCurrentMilkTypes((oldMilkTypesArray) => [
        ...oldMilkTypesArray,
        milkType,
      ]);
    } else {
      const newMilkTypesArray = currentMilkTypes.filter(
        (cuurentTag) => cuurentTag !== milkType
      );
      setCurrentMilkTypes(newMilkTypesArray);
    }
  };

  return (
    <div className="dropdown__container">
      <button className="dropdown__button" onClick={handleOpen}>
        <div id="dropdown" className="dropdown__title">
          Filter
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="dropdown-icon"
          className="dropdown__icon"
          src="dropDown.png"
          alt=""
        />
      </button>

      {open ? (
        <div id="dropdown__container" className="dropdown__itemcontainer">
          <div className="dropdown__header">
            <p className="dropdown__itemtitle">Milk types</p>
            <button
              onClick={() => setOpen(false)}
              className="dropdown__cancelbutton"
            >
              X
            </button>
          </div>

          {milkTypes &&
            milkTypes.map((type) => {
              let checkboxState = false;
              if (currentMilkTypes.includes(type)) {
                checkboxState = true;
              }
              return (
                <div className="dropdown__item" key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    defaultChecked={checkboxState}
                    onChange={handleCheckbox}
                  />
                  {type}
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};
