import React from "react";
import PropTypes from "prop-types";
import { renderEmptyBookmark, renderMarkedBookmark } from "../../utils/icons";
const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            { status ? renderMarkedBookmark() : renderEmptyBookmark() }
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
