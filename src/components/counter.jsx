import React from "react";

const counter = 0;
const formatCounter = () => counter === 0 ? "empty" : counter;
const getBadgeColorClass = counter => counter === 0 ? "bg-warning" : "bg-primary";

const badgeClasses = `badge ${getBadgeColorClass(counter)} m-2`;
const buttonClasses = "btn btn-sm bg-primary m-2";

const Counter = () => 
    <>
        <span className={badgeClasses}>{formatCounter()}</span>
        <button className={buttonClasses}>+</button>
    </>;

export default Counter;
