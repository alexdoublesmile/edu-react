import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Counter from "./components/counter";
import Users from "./components/users";

const App = () => <Users />;

reactDom.render(<App />, document.querySelector("#root"));