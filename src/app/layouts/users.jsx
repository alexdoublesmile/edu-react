import React from "react";
import { useParams } from "react-router-dom";
import UserListPage from "../components/page/userListPage";
import UserPage from "../components/page/userPage";

const Users = () => {
    const params = useParams();
    const id = params.userId;

    return id ? <UserPage id={id} /> : <UserListPage />;
};

export default Users;
