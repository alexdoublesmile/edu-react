import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const formatCount = () => count === 0 ? "empty" : count;
    const getBadgeColorClass = () => count === 0 ? "bg-warning" : "bg-primary";

    const badgeClasses = `badge ${getBadgeColorClass()} m-2`;
    const buttonClasses = "btn btn-sm bg-primary m-2";
    
    const handleIncrement = () => setCount(prevState => ++prevState);
    const handleDecrement = () => setCount(prevState => --prevState);
    
    return (
        <div>
            <span className={badgeClasses}>{formatCount()}</span>
            <button className={buttonClasses} onClick={handleIncrement}>+</button>
            <button className={buttonClasses} onClick={handleDecrement}>-</button>
        </div>
    );
};

export default Counter;
