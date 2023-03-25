import React, { useState } from "react";
import api from "../../api/index";
import User from "./user"
import SearchStatus from "./searchStatus"
import Pagination from "./pagination"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const getTableClasses = () => "table table-striped table-hover";
    const count = users.length;
    const pageSize = 14;

    const handlePageClick = index => {
        console.log("page: ", index);
    };
    const handleDeleteUser = id => setUsers(users.filter(user => user._id !== id));
    const handleMark = id => {
        setUsers(
            users.map(user => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    const renderSearchStatus = () => <SearchStatus usersNumber={count} />;

    const renderUsers = () => {
        return users.map(user => 
            <User 
                key={user._id} 
                {...user} 
                onDelete={handleDeleteUser} 
                onMark={handleMark} 
            />
        );
    };

    const renderTable = () => {
        return count > 0 && (
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
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
        );
    };

    return (
        <>
            {renderSearchStatus()}
            {renderTable()}
            <Pagination 
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageClick}
            />
        </>
    );
}

export default Users;