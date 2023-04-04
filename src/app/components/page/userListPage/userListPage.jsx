import React, { useEffect, useState } from "react";
import api from "../../../api";
import SearchStatus from "../../ui/search/searchStatus";
import Pagination from "../../common/pagination";
import GroupList from "../../common/groupList";
import { paginateManually } from "../../../utils/paginate";
import UserTable from "../../ui/usersTable";
import _ from "lodash";
import Search from "../../ui/search/search";

const UserListPage = () => {
    const pageSize = 8;
    const [users, setUsers] = useState();
    const [professions, setProfessions] = useState();
    const [selectedProfession, setSelectedProfession] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [searchString, setSearchString] = useState("");

    const clearFilters = () => setSelectedProfession();

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
    const handleSortedBy = (sortObject) => {
        setSortBy(sortObject);
    };
    const handlePageClick = (index) => setCurrentPage(index);
    const handleProfessionSelect = (item) => {
        setSelectedProfession(item);
        setSearchString("");
    };
    const handleSearch = ({ target }) => {
        setSearchString(target.value);
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(data);
        });
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProfession, searchString]);

    if (users) {
        const filterByProfession = (users) => {
            return selectedProfession
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProfession)
                )
                : users;
        };
        const filterBySearchString = (users) => {
            return users.filter((user) =>
                user.name.toLowerCase().includes(searchString.toLowerCase())
            );
        };
        const filterUsers = (users) => {
            const filteredByProfession = filterByProfession(users);
            return filterBySearchString(filteredByProfession);
        };

        const filteredUsers = filterUsers(users);
        const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order);
        const usersPage = paginateManually(sortedUsers, currentPage, pageSize);
        const count = filteredUsers.length;

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            selectedItem={selectedProfession}
                            onItemSelect={handleProfessionSelect}
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
                    <SearchStatus usersNumber={count} />
                    <Search value={searchString} onSearch={handleSearch} />
                    {count > 0 && (
                        <UserTable
                            users={usersPage}
                            onDelete={handleDeleteUser}
                            onMark={handleMark}
                            onSort={handleSortedBy}
                            selectedSort={sortBy}
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
    }
    return "loading...";
};

export default UserListPage;
