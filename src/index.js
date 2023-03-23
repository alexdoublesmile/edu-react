import React from "react";
import reactDom from "react-dom";

// const element = React.createElement("h1", null, "Hello from React");
const element = <h1>"Hello from React"</h1>;

reactDom.render(element, document.querySelector("#root"));

console.log(element);