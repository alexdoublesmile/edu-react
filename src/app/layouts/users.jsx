import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/users/userPage";
import UserList from "../components/users/userList";

const Users = () => {
    const params = useParams();
    const id = params.userId;

    return id ? <UserPage id={id} /> : <UserList />;
};

export default Users;
