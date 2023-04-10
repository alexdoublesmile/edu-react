import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ usersNumber }) => {
    const getUsersNumberText = (num) => {
        if (num > 0) {
            return num > 1 ? `${num} persons are` : "1 person is";
        } else {
            return "Nobody is";
        }
    };

    const statusClasses = "btn btn-primary btn-lg";
    const statusMsg = `${getUsersNumberText(
        usersNumber
    )} waiting for you!`;

    return <p className={statusClasses}>{statusMsg}</p>;
};

SearchStatus.propTypes = {
    usersNumber: PropTypes.number.isRequired
};

export default SearchStatus;
