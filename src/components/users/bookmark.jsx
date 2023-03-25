import React from 'react';

const Bookmark = props => {
    return ( 
        <button {...rest}>
            <i className={"bi bi-bookmark" + (props.isMarked ? "-heart-fill" : "")}></i>
        </button>
     );
}
 
export default Bookmarpr
ops