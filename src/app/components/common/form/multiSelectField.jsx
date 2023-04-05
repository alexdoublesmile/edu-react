import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, onChange, name }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                label: options[optionName].name,
                value: options[optionName]._id
            }))
            : options;

    const handleChange = (value) => {
        onChange({ name: name, value });
    };

    return (
        <Select
            isMulti
            options={optionsArray}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            name={name}
        />
    );
};

MultiSelectField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func
};

export default MultiSelectField;
