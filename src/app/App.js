import React from "react";
import NavBar from "./components/users/navBar";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:userId?" render={() => <UserInfo />} />
                <Redirect to="/" />
                <Route path="/404" component={NotFound} />
            </Switch>
            <NavBar />
        </>
    );
};

export default App;
