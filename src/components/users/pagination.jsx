import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pageIndexes = _.range(1, pagesCount + 1);
    const pageLinkClasses = "page-link";

    const getPageClasses = (pageIndex) =>
        pageIndex === currentPage ? "page-item active" : "page-item";

    return pageIndexes.length > 1 ? (
        <nav>
            <ul className="pagination">
                {pageIndexes.map((pageIndex) => {
                    return (
                        <li
                            className={getPageClasses(pageIndex)}
                            key={"page_" + pageIndex}
                        >
                            <button
                                className={pageLinkClasses}
                                onClick={() => onPageChange(pageIndex)}
                            >
                                {pageIndex}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    ) : null;
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
