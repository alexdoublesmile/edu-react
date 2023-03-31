import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";

const UserTable = ({ users, onDelete, onMark, onSort, selectedSort }) => {
    const getTableClasses = () => "table table-striped table-hover";
    const getDeleteButtonClasses = () => "btn btn-danger";
    const deleteButtonText = "delete";

    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
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
        <table className={getTableClasses()}>
            <TableHeader
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
            />
            <TableBody {...{ data: users, columns }} />
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
