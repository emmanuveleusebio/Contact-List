import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { searchPagination } from '../features/contactSlice';
import './pagination.css'
import { pageCount } from '../features/combineToggle';

const PaginationComponent = () => {
  const { totalCount } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [activePage, setActive] = useState(1)
  const changePage = (pageNumber) => {
    setActive(pageNumber)
    dispatch(pageCount(pageNumber))
  }
  const search = "undefined"
  useEffect(() => {
    dispatch(searchPagination({ search: search, currentPage: activePage, limit: 5 }))
  }, [dispatch, activePage])

  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={4}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        onChange={changePage}
        itemClass="page-item"
        linkClass="page-link"
        containerClassName="pagination"

      />
    </div>
  );
};

export default PaginationComponent;
