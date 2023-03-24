import React, { useState } from "react";
import api from "../api/index";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(users);

    return <h1>Users</h1>;
}

export default Users;