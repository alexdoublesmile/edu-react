import React from "react";

import Counter from "./counter";
import Users from "./users";

const counterList = [
    {
        id: 0, 
        value: 0
    },
    {
        id: 0, 
        value: 0
    },
    {
        id: 0, 
        value: 0
    },
    {
        id: 0, 
        value: 0
    }
]

const renderCounterList = () => counterList.map(counter => renderCounter(counter));

const renderCounter = counter => {
    return (
        <Counter />
    );
};

const CounterList = () => {
    return (
        <>
            {renderCounterList()}
        </>
    );
};

export default CounterList;