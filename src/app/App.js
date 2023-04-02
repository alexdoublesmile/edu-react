import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/users/navBar";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFound from "./components/users/notFound";
import UserInfo from "./components/users/userInfo";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:userId?" render={() => <UserInfo />} />
                <Redirect to="/" />
                <Route path="/404" component={NotFound} />
            </Switch>
        </>
    );
};

export default App;
