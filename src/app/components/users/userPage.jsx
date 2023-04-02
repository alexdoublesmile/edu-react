import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import api from "../../api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(id).then((data) => {
            setUser(data);
        });
    }, []);

    if (user) {
        return (
            user && (
                <>
                    <h3>{user.name}</h3>
                    <h3>Profession: {user.profession.name}</h3>
                    <QualitiesList qualities={user.qualities} />
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
