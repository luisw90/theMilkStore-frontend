import React, { FC, useState } from "react";
import "../app/css-group/dropdownsearch.css";

type SearchProps = {
  searchMilkData: (milksearch: string) => void;
};
export const Search: FC<SearchProps> = ({ searchMilkData }) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputs(value);
    searchMilkData(value);
  };

  return (
    <div className="search__container">
      <div className="searchBar__container">
        <img className="searchBar__image" src="search.png" alt="" />
        <input
          className="searchBar__input"
          type="text"
          value={inputs}
          placeholder="Search..."
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};
