import React from "react";
import { renderEmptyBookmark, renderMarkedBookmark } from "../../utils/icons";

const Bookmark = (userProps) => {
    return (
        <button onClick={() => userProps.onMark(userProps.id)}>
            {userProps.isMarked
                ? renderMarkedBookmark()
                : renderEmptyBookmark()}
        </button>
    );
};

export default Bookmark;
