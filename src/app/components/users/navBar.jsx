import React from "react";
import Users from "../../layouts/users";
import Login from "../../layouts/login";
import Main from "../../layouts/main";
import NotFound from "./notFound";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import UserInfo from "./userInfo";

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
