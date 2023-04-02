import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div>
                <span><Link to="/main">Main</Link></span>{" "}
                <span><Link to="/login">Login</Link></span>{" "}
                <span><Link to="/users">Users</Link></span>{" "}
            </div>
        </>
    );
};

export default NavBar;
