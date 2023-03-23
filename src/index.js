import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

// const element = React.createElement("h1", null, "Hello from React");
const element = <h1>"Hello from React"</h1>;

reactDom.render(element, document.querySelector("#root"));

console.log(element);