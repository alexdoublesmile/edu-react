import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../common/bookmark";
import { Link } from "react-router-dom";
import Table, { TableBody, TableHeader } from "../common/table";
import Qualities from "./qualities";

const UserTable = ({ users, onDelete, onMark, onSort, selectedSort }) => {
    const getDeleteButtonClasses = () => "btn btn-danger";
    const deleteButtonText = "delete";

    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Кол-во встреч" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    id={user._id}
                    isMarked={user.bookmark}
                    onMark={onMark}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className={getDeleteButtonClasses()}
                    onClick={() => onDelete(user._id)}
                >
                    {deleteButtonText}
                </button>
            )
        }
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        >
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data: users, columns }} />
        </Table>
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
