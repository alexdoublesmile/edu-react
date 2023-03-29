import React, { useState } from "react";
import api from "../../api/index";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { paginateManually } from "../../utils/paginate";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [professions] = useState(api.professions.fetchAll());
    const getTableClasses = () => "table table-striped table-hover";
    const count = users.length;
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const usersPage = paginateManually(users, currentPage, pageSize);

    const handlePageClick = (index) => setCurrentPage(index);
    const handleDeleteUser = (id) =>
        setUsers(users.filter((user) => user._id !== id));
    const handleMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    const renderSearchStatus = () => <SearchStatus usersNumber={count} />;

    const renderUsers = () => {
        return usersPage.map((user) => (
            <User
                key={user._id}
                {...user}
                onDelete={handleDeleteUser}
                onMark={handleMark}
            />
        ));
    };

    const handleProfessionSelect = (params) => {
        console.log(params);
    };

    const renderTable = () => {
        return (
            <>
                <GroupList items = { professions } onItemSelect = { handleProfessionSelect } />
                { count > 0 && (
                    <table className={ getTableClasses() }>
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
                ) }
            </>
        );
    };

    return (
        <>
            {renderSearchStatus()}
            {renderTable()}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageClick}
            />
        </>
    );
};

export default Users;
