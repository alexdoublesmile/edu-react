import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onSearch }) => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                id="search"
                name="search"
                value={value}
                onChange={onSearch}
                className="form-control"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
            />
        </div>
    );
};

Search.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func
};

export default Search;
