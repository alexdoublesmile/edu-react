import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
    const getOptionId = (option) => `${option.name}_${option.value}`;

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>{" "}
            {options.map((option) => (
                <div
                    key={getOptionId(option)}
                    className="form-check form-check-inline"
                >
                    <input
                        id={getOptionId(option)}
                        name={name}
                        className="form-check-input"
                        type="radio"
                        value={option.value}
                        checked={option.value === value}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={getOptionId(option)}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default RadioField;
