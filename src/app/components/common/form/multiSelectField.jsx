import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select/dist/declarations/src/Select";

const MultiSelectField = ({ options, onChange }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                name: options[optionName].name,
                value: options[optionName]._id
            }))
            : options;

    return ( 
            <Select 
                isMulti 
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChange}
            />
     );
};

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func
};
 
export default MultiSelectField;