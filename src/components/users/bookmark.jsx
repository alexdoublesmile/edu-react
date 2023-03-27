import React from "react";

const Bookmark = (userProps) => {
    return (
        // <button
        //     onClick={() => userProps.onMark(userProps.id)}
        // >
        //     <i className={"bi bi-bookmark" + (userProps.isMarked ? "-heart-fill" : "")}></i>
        // </button>
        <button
            type="button"
            className="btn btn-default btn-lg"
            onClick={() => userProps.onMark(userProps.id)}
        >
            <span
                className={
                    "glyphicon" +
                    (userProps.isMarked ? " glyphicon-bookmark" : "")
                }
            ></span>
        </button>
    );
};

export default Bookmark;
