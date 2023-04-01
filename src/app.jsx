import React from "react";
import NavBar from "./components/blog/navBar";
import { Route, Switch } from "react-router-dom";
// import Posts from "./components/blog/posts";
import Dashboard from "./components/blog/dashboard";
import Stats from "./components/blog/stats";
import Login from "./components/blog/login";
import Home from "./components/blog/home";
import Post from "./components/blog/post";
import PostList from "./components/blog/postList";
// import Users from "./components/users/users";
// import CounterList from "./components/counters/counterList";

// const App = () => <CounterList />;
// const App = () => <Users />;
function App() {
    const posts = [
        {
            id: "1",
            label: "post 1"
        },
        {
            id: "2",
            label: "post 2"
        },
        {
            id: "3",
            label: "post 3"
        }
    ];

    return (
        <>
            <NavBar />
            <h1>App</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />
                <Route
                    path="/posts/:postId"
                    render={(props) => <Post posts={posts} {...props} />}
                />
                <Route
                    path="/posts"
                    render={(props) => <PostList posts={posts} {...props} />}
                />
            </Switch>
        </>
    );
}
export default App;
