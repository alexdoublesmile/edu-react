import React from "react";
import NavBar from "./components/users/layouts/navBar";
// import Posts from "./components/blog/posts";
// import Dashboard from "./components/blog/dashboard";
// import Login from "./components/blog/login";
// import Home from "./components/blog/home";
// import CounterList from "./components/counters/counterList";

// const App = () => <CounterList />;
const App = () => {
    return (
        <>
            <NavBar />
        </>
    );
};
// function App() {
//     return (
//         <>
//             <NavBar />
//             <h1>App</h1>
// <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/login" component={Login} />
//     <Route path="/dashboard" component={Dashboard} />
//     <Redirect from="/admin" to="/dashboard" />
//     <Route path="/posts/:postId?" component={Posts} />
//     <Route path="/404" component={NotFound} />
//     <Redirect to="/404"/>
// </Switch>
//         </>
//     );
// }

export default App;
