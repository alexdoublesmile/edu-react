import React from 'react';


const Bookmark = props => {
    return ( 
        <button 
            onClick={() => props.onMark(props.userId)}
        >
            <i className={"bi bi-bookmark" + (props.isMarked ? "-heart-fill" : "")}></i>
        </button>
     );
}
 
export default Bookmark;