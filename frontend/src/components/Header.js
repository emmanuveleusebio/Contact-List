import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { addToggle } from "../features/combineToggle";
import { searchValue } from "../features/combineToggle";
import { searchPagination } from "../features/contactSlice";

const Header = ({ toggleFormClass }) => {
  const dispatch = useDispatch();
  const currentPage = 1;
  const searchHandler = (event) => {
    const searchData = event.target.value;
    dispatch(searchValue(searchData));
    dispatch(searchPagination({ search: searchData, currentPage }));
  };

  return (
    <div className="header-container">
      <button className="addContact" onClick={() => dispatch(addToggle())}>
        Create
      </button>
      <h1 className="heading">Contact List</h1>
      <div className="searchSection">
        <div className="searchDiv">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="searchBar"
            placeholder="Search"
            onChange={searchHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
