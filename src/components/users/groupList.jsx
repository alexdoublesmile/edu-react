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

    const itemsArray = Array.isArray(items)
        ? items
        : Object.values(items);

    return (
        <ul className="list-group">
            {itemsArray.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={getItemClasses(item)}
                    role="button"
                    onClick={() => onItemSelect(item)}
                >
                    {item[contentProperty]}
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
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedItem: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func
};

export default GroupList;
