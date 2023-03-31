import React from "react";
// import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UserTable = ({ users, onDelete, onMark, onSort, selectedSort }) => {
    const getTableClasses = () => "table table-striped table-hover";
    const getDeleteButtonClasses = () => "btn btn-danger";
    const deleteButtonText = "delete";

    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Кол-во встреч" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: user => (
                <Bookmark
                    id={user._id}
                    isMarked={user.bookmark}
                    onMark={onMark}
                />
            )
        },
        delete: {
            component: user => (
                <button
                    className={getDeleteButtonClasses()}
                    onClick={() => onDelete(user._id)}
                >
                    {deleteButtonText}
                </button>
            )
        }
    };

    // const renderUsers = () => {
    //     return users.map((user) => (
    //         <User
    //             key={user._id}
    //             {...user}
    //             onDelete={onDelete}
    //             onMark={onMark}
    //         />
    //     ));
    // };

    return (
        <table className={getTableClasses()}>
            <TableHeader
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
            />
            <TableBody
                {...{ data: users, columns }}
            />
            {/* <tbody>{renderUsers()}</tbody> */}
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
