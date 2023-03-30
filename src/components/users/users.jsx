import React, { useEffect, useState } from "react";
import api from "../../api/index";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { paginateManually } from "../../utils/paginate";
import PropTypes from "prop-types";
import UserTable from "./usersTable";

const Users = ({ users, onDelete, onMark }) => {
    const pageSize = 2;
    const [professions, setProfessions] = useState();
    const [selectedProfession, setSelectedProfession] = useState();
    const [currentPage, setCurrentPage] = useState(1);

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
                <SearchStatus usersNumber={ count } />
                {count > 0 && (
                    <UserTable
                        users={usersPage}
                        onDelete={onDelete}
                        onMark={onMark}
                    />
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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMark: PropTypes.func.isRequired
};

export default Users;
