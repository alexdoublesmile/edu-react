import React, { useState } from "react";

import Counter from "./counter";
import Users from "./users";

const CounterList = () => {

    const [counterList, setCounterList] = useState([
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
    ]);
    
    const renderCounterList = () => counterList.map(counter => renderCounter(counter));
    
    const handleDeleteButton = id => setCounterList(counterList.filter(counter => counter.id !== id));
    const handleIncrement = id => prevState => ++prevState;
    const handleDecrement = id => prevState => --prevState;
    
    const renderCounter = counter => {
        return (
            <Counter 
                key={counter.id} 
                onDelete={handleDeleteButton} 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                {...counter} 
            />
        );
    };

    return (
        <>
            {renderCounterList()}
        </>
    );
};

export default CounterList;