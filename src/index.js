import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

reactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector("#root")
);
