import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/ui/navBar";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
