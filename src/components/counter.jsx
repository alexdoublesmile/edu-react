import React from "react";

const counter = 0;
const formatCounter = () => counter === 0 ? "empty" : counter;

const Counter = () => 
    <>
        <h1>{formatCounter()}</h1>
        <button>+</button>
    </>;

export default Counter;