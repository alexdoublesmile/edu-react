import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onDelete, onMark, onSortedBy }) => {
    const getTableClasses = () => "table table-striped table-hover";

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
                    <th scope="col" onClick={() => onSortedBy("name")}>Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col" onClick={() => onSortedBy("profession.name")}>Профессия</th>
                    <th scope="col" onClick={() => onSortedBy("completedMeetings")}>Кол-во встреч</th>
                    <th scope="col" onClick={() => onSortedBy("rate")}>Оценка</th>
                    <th scope="col" onClick={() => onSortedBy("bookmark")}>Избранное</th>
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
    onSortedBy: PropTypes.func.isRequired
};

export default UserTable;
