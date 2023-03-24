import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

    const formatCount = () => count === 0 ? "empty" : count;
    const getBadgeColorClass = () => count === 0 ? "bg-warning" : "bg-primary";

    const badgeClasses = `badge ${getBadgeColorClass()} m-2`;
    const buttonClasses = "btn btn-sm bg-primary m-2";
    
    const handleIncrement = () => setCount(prevState => ++prevState);
    const handleDecrement = () => setCount(prevState => --prevState);
    const handleRemoveTag = key => setTags(prevState => 
        prevState.filter(tag => tag !== key));

    const renderTags = () => {
        if (tags.length > 0) {
            return tags.map(tag => 
                <li 
                    key={tag} 
                    className={buttonClasses} 
                    onClick={() => handleRemoveTag(tag)}
                >
                    {tag}
                </li>
            );
        }
    };
    
    return tags.length > 0 
        ? <>
            <ul>
                {renderTags()}
            </ul>
        </> 
        : <>
            <span className={badgeClasses}>{formatCount()}</span>
            <button className={buttonClasses} onClick={handleIncrement}>+</button>
            <button className={buttonClasses} onClick={handleDecrement}>-</button>
        </>
};

export default Counter;
