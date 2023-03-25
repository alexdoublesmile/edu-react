import React, { useState } from "react";
import api from "../../api/index";
import User from "./user"
import SearchStatus from "./searchStatus"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const getTableClasses = () => "table table-striped table-hover";

    const handleDeleteUser = id => setUsers(prevState => prevState.filter(user => user._id !== id));

    const renderSearchStatus = () => <SearchStatus usersNumber={users.length} />;

    const renderUsers = () => {
        return users.map(user => 
            <User 
                key={user._id} 
                {...user} 
                onDelete={handleDeleteUser} 
            />
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