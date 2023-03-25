import React from 'react';

const Quality = props => {
    const getQualityClasses = color => `badge bg-${color} btn-sm m-2`;

    return (
        <span
            className={getQualityClasses(props.color)}
        >
            {props.name}
        </span>
    );
}

export default Quality;