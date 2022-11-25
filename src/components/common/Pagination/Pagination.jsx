import React from 'react';
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import s from './Pagination.module.scss'

const Pagination = ({ onPageChange, selector }) => {
    const dispatch = useDispatch()
    const {totalCount, currentPage} = useSelector(selector)

    const handlePageClick = (event) => {
        dispatch(onPageChange(event.selected + 1))
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
            containerClassName={s.container}
            nextLinkClassName={s.nextLink}
            previousLinkClassName={s.previousLink}
            pageLinkClassName={s.pageLink}
            activeLinkClassName={s.activeLink}
        />
    );
};

export default Pagination;
