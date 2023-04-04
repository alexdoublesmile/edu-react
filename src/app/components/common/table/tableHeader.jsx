import React from "react";
import PropTypes from "prop-types";
import { renderSortArrow } from "../../../utils/icons";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const toggleOrder = (order) => (order === "asc" ? "desc" : "asc");

    const handleSortBy = (sortBy) => {
        let sortOrder = "asc";
        if (selectedSort.path === sortBy) {
            sortOrder = toggleOrder(selectedSort.order);
        }
        onSort({ path: sortBy, order: sortOrder });
    };

    const getOnClickAction = (column) => {
        return column.path ? () => handleSortBy(column.path) : undefined;
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        scope="col"
                        onClick={getOnClickAction(columns[column])}
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}{" "}
                        {columns[column].path === selectedSort.path
                            ? renderSortArrow(selectedSort.order)
                            : null}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
