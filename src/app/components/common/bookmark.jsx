import React from "react";
import PropTypes from "prop-types";
import { renderEmptyBookmark, renderMarkedBookmark } from "../../utils/icons";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {status
                ? renderMarkedBookmark()
                : renderEmptyBookmark()}
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool
};

export default Bookmark;
