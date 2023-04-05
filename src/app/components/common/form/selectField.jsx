import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    error,
    options
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                name: options[optionName].name,
                value: options[optionName]._id
            }))
            : options;

    const getInputClasses = () => {
        return `form-select ${error ? "is-invalid" : "is-valid"}`;
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                id="validationCustom04"
                name="profession"
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
                required
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && (
                <div className="invalid-feedback">{error}</div>
            )}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
