import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleButton } from "../features/addToggle";
import { setSearch } from "../features/search";
import { searchPagination } from "../features/contactSlice";

const Header = ({ toggleFormClass }) => {
  const dispatch = useDispatch();
  const currentPage = 1;
  const searchHandler = (event) => {
    const searchValue = event.target.value
    dispatch(setSearch(searchValue))
    dispatch(searchPagination({ search: searchValue, currentPage }))
  }

  return (
    <div className="header-container">
      <button className="addContact" onClick={() => dispatch(toggleButton())}>
        Create
      </button>
      <h1 className="heading">Contact List</h1>
      <div className="searchSection">
        <div className="searchDiv">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text"
           className="searchBar"
            placeholder="Search"
            onChange={ searchHandler }
            />
        </div>
      </div>
    </div>
  );
};

export default Header;
