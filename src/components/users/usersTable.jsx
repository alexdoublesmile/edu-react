import React from "react";
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const UserTable = ({ users, onDelete, onMark, onSort, selectedSort }) => {
    const getTableClasses = () => "table table-striped table-hover";

    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { iter: "profession.name", name: "Профессия" },
        completedMeetings: { iter: "completedMeetings", name: "Кол-во встреч" },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    };

    const renderUsers = () => {
        return users.map((user) => (
            <User
                key={user._id}
                {...user}
                onDelete={onDelete}
                onMark={onMark}
            />
        ));
    };

    return (
        <table className={getTableClasses()}>
            <TableHeader
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
            />
            <tbody>{renderUsers()}</tbody>
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
