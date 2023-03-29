import React, { useEffect, useState } from "react";
import api from "../../api/index";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { paginateManually } from "../../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onMark }) => {
    const pageSize = 2;
    const [professions, setProfessions] = useState();
    const [selectedProfession, setSelectedProfession] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const getTableClasses = () => "table table-striped table-hover";

    const clearFilters = () => setSelectedProfession();

    useEffect(() => {
        api.professions.fetchAll()
            .then((data) => { setProfessions(data); });
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProfession]);

    const filterByProfession = users => {
        return selectedProfession
            ? users.filter((user) =>
                JSON.stringify(user.profession) ===
                JSON.stringify(selectedProfession)
            )
            : users;
    };

    const filteredUsers = filterByProfession(users);
    const usersPage = paginateManually(filteredUsers, currentPage, pageSize);
    const count = filteredUsers.length;

    const handlePageClick = (index) => setCurrentPage(index);
    const handleProfessionSelect = item => {
        setSelectedProfession(item);
    };

    const renderSearchStatus = () => <SearchStatus usersNumber={ count } />;

    const renderUsers = () => {
        return usersPage.map((user) => (
            <>
                {users && (
                    <User
                        key={user._id}
                        {...user}
                        onDelete={onDelete}
                        onMark={onMark}
                    />
                )}
            </>
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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired
};

export default Users;
