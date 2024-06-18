import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleButton } from "../features/addToggle";
import { setSearch } from "../features/search";
import { searchPagination } from "../features/contactSlice";

const Header = ({ toggleFormClass }) => {
  const dispatch = useDispatch();
  
  const searchHandler = (event) => {
    const searchValue = event.target.value
    const currentPage = 1;
    dispatch(setSearch(searchValue))
    dispatch(searchPagination({ search: searchValue, currentPage }))
  }
  return (
    <div className="header-container">
      <button className="addContact" onClick={() => dispatch(toggleButton())}>
        Create
      </button>
      <h1 className="heading">Contact list</h1>
      <div className="searchSection">
        <select name="totalCount" className="totalCount">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          
        </select>
        <p>
          of <span>10</span>
        </p>
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
