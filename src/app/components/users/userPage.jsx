import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(id).then((data) => {
            setUser(data);
        });
    }, []);

    const handleHistory = () => history.push("/users");

    if (user) {
        return (
            user && (
                <>
                    <h3>{user.name}</h3>
                    <h3>Profession: {user.profession.name}</h3>
                    <QualitiesList qualities={user.qualities} />
                    <h3>Completed meetings: {user.completedMeetings}</h3>
                    <h3>Rate: {user.rate}</h3>
                    <button onClick={handleHistory}>
                        All users
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
