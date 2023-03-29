import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    selectedItem,
    valueProperty,
    contentProperty,
    onItemSelect
}) => {
    const getItemClasses = item => {
        return item === selectedItem
            ? "list-group-item active"
            : "list-group-item";
    };

    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={getItemClasses(items[item])}
                    role="button"
                    onClick={() => onItemSelect(items[item])}
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    selectedItem: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func
};

export default GroupList;
