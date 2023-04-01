import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/dashboard/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/dashboard" commponent={Stats} />
                <Route path="/dashboard/edit" commponent={Edit} />
            </Switch>
        </div>
    );
};

export default Dashboard;
