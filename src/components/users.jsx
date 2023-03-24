import React, { useState } from "react";
import api from "../api/index";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    
    const getTableClasses = () => "table table-striped table-hover";
    const getQualityClasses = color => `btn btn-${color} btn-sm m-1`;
    const getDeleteButtonClasses = () => "btn btn-danger";

    const renderUsers = () => {
        return users.map(user => renderUser(user));
    }    

    const renderUser = user => {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{renderQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button className={getDeleteButtonClasses()}>
                        delete
                    </button>
                </td>
            </tr>
        );
    }

    const renderQualities = qualities => {
        return qualities.map(quality => 
            <span 
                className={getQualityClasses(quality.color)}
            >
                {quality.name}
            </span>
        );
    }


    return (
        <table className={getTableClasses()}>
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
    );
}

export default Users;