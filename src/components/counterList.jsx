import React, { useState } from "react";

import Counter from "./counter";
import Users from "./users";

const CounterList = () => {

    const initialState = [
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
    ];

    const [counterList, setCounterList] = useState(initialState);
    
    const handleDeleteButton = id => setCounterList(counterList.filter(counter => counter.id !== id));
    const handleIncrement = id => setCounterList(getIncrementedList(id));
    const handleDecrement = id => setCounterList(getDecrementedList(id));
    const handleClear = () => setCounterList(initialState);

    const getIncrementedList = id => {
        const index = counterList.findIndex(counter => counter.id === id);

        const updatedData = [...counterList];
        updatedData[index].value++;

        return updatedData;
    }

    const getDecrementedList = id => {
        const index = counterList.findIndex(counter => counter.id === id);

        const updatedData = [...counterList];
        updatedData[index].value--;

        return updatedData;
    }

    const renderCounterList = () => counterList.map(counter => renderCounter(counter));
    
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
            <button 
                className="btn btn-danger btn-sm m-2"
                onClick={handleClear}
            >
                Clear
            </button>
        </>
    );
};

export default CounterList;