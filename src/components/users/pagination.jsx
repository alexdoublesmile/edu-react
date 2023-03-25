import React from 'react';
import _ from "lodash";

const Pagination = props => {
    const { itemsCount, pageSize } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pagesCount + 1);
    
    return pages.length > 1 
    ? ( 
        <nav>
            <ul className="pagination">
                { pages.map(page => {
                    return (
                        <li className="page-item" key={"page_" + page}>
                            <a className="page-link">{page}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
     ) 
     : null;
}
 
export default Pagination;