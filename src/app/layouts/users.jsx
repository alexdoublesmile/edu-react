import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserListPage from "../components/page/userListPage";
import UserPage from "../components/page/userPage";

const Users = () => {
    const params = useParams();
    const { id, edit } = params;

    return id ? (
        edit ? (
            <EditUserPage />
        ) : (
            <UserPage id={id} />
        )
    ) : (
        <UserListPage />
    );
};

export default Users;
