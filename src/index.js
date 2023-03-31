import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./app";
import { BrowserRouter } from "react-router-dom";

// reactDom.render(<App />, document.querySelector("#root"));
reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#root")
);
