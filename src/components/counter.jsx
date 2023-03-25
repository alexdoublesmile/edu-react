import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.value);

    const formatCount = () => count === 0 ? "empty" : count;
    const getBadgeColorClass = () => count === 0 ? "bg-warning" : "bg-primary";

    const badgeClasses = `badge ${getBadgeColorClass()} m-2`;
    const buttonClasses = "btn btn-sm bg-primary m-2";
    const deleteButtonClasses = "btn btn-sm bg-danger m-2";
    
    const handleIncrement = () => setCount(prevState => ++prevState);
    const handleDecrement = () => setCount(prevState => --prevState);
    
    return (
        <div>
            <span>{props.name}</span>
            <span className={badgeClasses}>{formatCount()}</span>
            <button className={buttonClasses} onClick={handleIncrement}>+</button>
            <button className={buttonClasses} onClick={handleDecrement}>-</button>
            <button className={deleteButtonClasses} onClick={props.onDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Counter;
