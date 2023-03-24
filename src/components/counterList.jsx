import React from "react";

import Counter from "./counter";
import Users from "./users";

const counterList = [
    {
        id: 0, 
        value: 0,
        name: "Trash"
    },
    {
        id: 1, 
        value: 0,
        name: "Spoon"
    },
    {
        id: 2, 
        value: 0,
        name: "Fork"
    },
    {
        id: 3, 
        value: 0,
        name: "Plate"
    },
    {
        id: 4, 
        value: 0,
        name: "Set"
    }    
]

const renderCounterList = () => counterList.map(counter => renderCounter(counter));

const renderCounter = counter => {
    return (
        <Counter key={counter.id} value={counter.value} name={counter.name} />
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