import React from 'react';


const Bookmark = userProps => {
    return ( 
        <button 
            onClick={() => userProps.onMark(userProps.id)}
        >
            <i className={"bi bi-bookmark" + (userProps.isMarked ? "-heart-fill" : "")}></i>
        </button>
     );
}
 
export default Bookmark;