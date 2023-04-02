import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Quality from "./quality";
import api from "../../api";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.findUserById(id).then((data) => {
            setUser(data);
        });
    }, []);

    const renderQualities = (qualities) =>
        qualities.map((quality) => {
            return <Quality key={quality._id} {...quality} />;
        });

    if (user) {
        return (
            user && (
                <>
                    <h3>{user.name}</h3>
                    <h3>Profession: {user.profession.name}</h3>
                    <div>{renderQualities(user.qualities)}</div>
                    <h3>Completed meetings: {user.completedMeetings}</h3>
                    <h3>Rate: {user.rate}</h3>
                    <button>
                        <Link to="/users">All users</Link>
                    </button>
                </>
            )
        );
    } else {
        return "loading...";
    }
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
