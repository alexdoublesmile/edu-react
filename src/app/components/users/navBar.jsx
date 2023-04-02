import React from "react";
import Users from "../users";
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
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:userId?" render={() => <UserInfo />} />
                <Redirect from="/" to="/users" />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default NavBar;
