import React from "react";

const SearchStatus = (props) => {
    const getUsersNumberText = (num) => {
        if (num > 0) {
            return num > 1 ? `${num} persons are` : "1 person is";
        } else {
            return "Nobody is";
        }
    };

    const statusClasses = "btn btn-primary btn-lg";
    const statusMsg = `${getUsersNumberText(
        props.usersNumber
    )} waiting for you!`;

    return <p className={statusClasses}>{statusMsg}</p>;
};

export default SearchStatus;
