import React from "react";
import PropTypes from "prop-types";

const Quality = (props) => {
    const getQualityClasses = (color) => `badge bg-${color} btn-sm m-2`;

    return <span className={getQualityClasses(props.color)}>{props.name}</span>;
};

Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Quality;
