import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onDelete, onMark, onSortedBy, sortBy }) => {
    const getTableClasses = () => "table table-striped table-hover";

    const toggleOrder = order => order === "asc" ? "desc" : "asc";

    const handleSortBy = sortedBy => {
        let sortByOrder = "asc";
        if (sortBy.iter === sortedBy) {
            sortByOrder = toggleOrder(sortBy.order);
        }
        onSortedBy({ iter: sortedBy, order: sortByOrder });
    };

    const renderUsers = () => {
        return users.map((user) => (
            <>
                {users && (
                    <User
                        key={user._id}
                        {...user}
                        onDelete={onDelete}
                        onMark={onMark}
                    />
                )}
            </>
        ));
    };

    return (
        <table className={getTableClasses()}>
            <thead>
                <tr>
                    <th scope="col" onClick={() => handleSortBy("name")}>Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col" onClick={() => handleSortBy("profession.name")}>Профессия</th>
                    <th scope="col" onClick={() => handleSortBy("completedMeetings")}>Кол-во встреч</th>
                    <th scope="col" onClick={() => handleSortBy("rate")}>Оценка</th>
                    <th scope="col" onClick={() => handleSortBy("bookmark")}>Избранное</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired,
    onSortedBy: PropTypes.func.isRequired,
    sortBy: PropTypes.object.isRequired
};

export default UserTable;
