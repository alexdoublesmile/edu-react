import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onDelete, onMark }) => {
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
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Кол-во встреч</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
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
    onMark: PropTypes.func.isRequired
};

export default UserTable;
