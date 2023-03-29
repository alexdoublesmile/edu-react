import React, { useEffect, useState } from "react";
import api from "../../api/index";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { paginateManually } from "../../utils/paginate";

const Users = () => {
    const pageSize = 2;
    const [users, setUsers] = useState(api.users.fetchAll());
    const [professions, setProfessions] = useState();
    const [selectedProfession, setSelectedProfession] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const getTableClasses = () => "table table-striped table-hover";

    const filterByProfession = (users, profession) => {
        return selectedProfession
            ? users.filter(user => user.profession === profession)
            : users;
    };

    const filteredUsers = filterByProfession(users, selectedProfession);
    const usersPage = paginateManually(filteredUsers, currentPage, pageSize);
    const count = filteredUsers.length;

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
    const handleProfessionSelect = item => {
        setSelectedProfession(item);
    };
    const clearFilters = () => setSelectedProfession();

    useEffect(() => {
        api.professions.fetchAll()
            .then((data) => { setProfessions(data); });
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProfession]);

    const renderSearchStatus = () => <SearchStatus usersNumber={ count } />;

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

    const renderTable = () => {
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items = {professions}
                            selectedItem = {selectedProfession}
                            onItemSelect = {handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilters}
                        >
                            Clear filters
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    {renderSearchStatus()}
                    {count > 0 && (
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
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageClick}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {renderTable()}
        </>
    );
};

export default Users;
