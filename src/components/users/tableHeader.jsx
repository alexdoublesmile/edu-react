import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const toggleOrder = order => order === "asc" ? "desc" : "asc";

    const handleSortBy = sortBy => {
        let sortOrder = "asc";
        if (selectedSort.iter === sortBy) {
            sortOrder = toggleOrder(selectedSort.order);
        }
        onSort({ iter: sortBy, order: sortOrder });
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map(column => (
                    <th
                        key={column}
                        scope="col"
                        onClick={() => handleSortBy(columns[column].iter)}
                    >
                        {columns[column].name}
                    </th>
                ))}
                {/* <th scope="col" onClick={() => handleSortBy("name")}>Имя</th>
                <th scope="col">Качества</th>
                <th scope="col" onClick={() => handleSortBy("profession.name")}>Профессия</th>
                <th scope="col" onClick={() => handleSortBy("completedMeetings")}>Кол-во встреч</th>
                <th scope="col" onClick={() => handleSortBy("rate")}>Оценка</th>
                <th scope="col" onClick={() => handleSortBy("bookmark")}>Избранное</th>
                <th scope="col"></th> */}
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
