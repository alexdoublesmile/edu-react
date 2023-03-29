import React, { useEffect, useState } from "react";
import api from "./api";

// import CounterList from "./components/counters/counterList";
import Users from "./components/users/users";

// const App = () => <CounterList />;
const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => { setUsers(data); });
    }, []);

    const handleDeleteUser = (id) =>
        setUsers(users.filter((user) => user._id !== id));
    const handleMark = (id) => {
        setUsers(
            users.filter((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <>
            {users && (
                <Users
                    onDelete={handleDeleteUser}
                    onMark={handleMark}
                    users={users}
                />
            )}
        </>
    );
};

export default App;
