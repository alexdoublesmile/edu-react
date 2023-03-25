import React, { useState } from "react";
import api from "../../api/index";
import User from "./user"
import SearchStatus from "./searchStatus"
import Quality from "./quality"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const getTableClasses = () => "table table-striped table-hover";
    const getQualityClasses = color => `badge bg-${color} btn-sm m-2`;
    const getDeleteButtonClasses = () => "btn btn-danger";

    const handleDeleteUser = id => setUsers(prevState => prevState.filter(user => user._id !== id));

    const renderSearchStatus = () => <SearchStatus usersNumber={users.length} />;

    const renderUsers = () => {
        return users.map(user => renderUser(user));
    };

    const renderUser = user => {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{renderQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} / 5</td>
                <td>
                    <button
                        className={getDeleteButtonClasses()}
                        onClick={() => handleDeleteUser(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        );
    };

    const renderQualities = qualities => {
        return qualities.map(quality =>
            <span
                className={getQualityClasses(quality.color)}
            >
                {quality.name}
            </span>
        );
    };

    const renderTable = () => {
        return users.length > 0
            ? <table className={getTableClasses()}>
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Кол-во встреч</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
            : <div></div>;

    };


    return (
        <>
            {renderSearchStatus()}
            {renderTable()}
        </>
    );
}

export default Users;