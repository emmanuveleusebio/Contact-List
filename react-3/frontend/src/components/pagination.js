import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { searchPagination } from '../features/contactSlice';

const MyComponent = () => {
  const { totalCount } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const search = "undefined"
  const [activePage, setActive ] = useState(1)

const changePage = (pageNumber) => {
  setActive(pageNumber)
}
useEffect(()=> {
  console.log(activePage)
  dispatch(searchPagination({ search: "undefined", currentPage: activePage }))
},[dispatch, activePage])


  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={2} // Example: Number of items per page
        totalItemsCount={totalCount} // Example: Total number of items
        pageRangeDisplayed={5} // Number of page links to display
        onChange={changePage}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default MyComponent;
