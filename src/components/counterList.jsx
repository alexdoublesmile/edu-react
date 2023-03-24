import React from "react";

import Counter from "./counter";
import Users from "./users";

const counterList = [
    {
        id: 0, 
        value: 0
    },
    {
        id: 1, 
        value: 0
    },
    {
        id: 2, 
        value: 0
    },
    {
        id: 3, 
        value: 0
    }
]

const renderCounterList = () => counterList.map(counter => renderCounter(counter));

const renderCounter = counter => {
    return (
        <Counter key={counter.id} value={counter.value} />
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