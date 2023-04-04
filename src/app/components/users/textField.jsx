import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const getInputClasses = () => {
        return `form-control ${error ? "is-invalid" : "is-valid"}`;
    };

    const toggleShowPassword = () => setShowPassword(prevState => !prevState);

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <input
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={getInputClasses()}
            />
            {type === "password" && (
                <div className="form-group row mt-3">
                    <div className="col-sm-1">Show</div>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="showPasswordCheck"
                                onClick={toggleShowPassword}
                            />
                        </div>
                    </div>
                </div>
            )}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
