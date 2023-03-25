import React from 'react';
import _ from "lodash";

const Pagination = ({ 
    itemsCount, 
    pageSize, 
    currentPage,
    onPageChange 
}) => {
    const pagesCount = Math.ceil(itemsCount / pageSize)
    const pageIndexes = _.range(1, pagesCount + 1);
    const pageLinkClasses = "page-link";

    const getPageClasses = pageIndex => pageIndex === currentPage 
        ? "page-item active" 
        : "page-item";
    
    return pageIndexes.length > 1 
    ? ( 
        <nav>
            <ul className="pagination">
                { pageIndexes.map(pageIndex => {
                    return (
                        <li 
                            className={getPageClasses(pageIndex)} 
                            key={"page_" + pageIndex}
                        >
                            <a className={pageLinkClasses} onClick={() => onPageChange(pageIndex)}>{pageIndex}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
     ) 
     : null;
}
 
export default Pagination;