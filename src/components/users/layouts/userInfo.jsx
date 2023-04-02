import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Quality from "../quality";
import api from "../../../api";

const UserInfo = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const id = params.userId;

    useEffect(() => {
        api.users.findUserById(id).then((data) => {
            setUser(data);
        });
    }, []);

    const renderQualities = (qualities) =>
        qualities.map((quality) => {
            return <Quality key={quality._id} {...quality} />;
        });

    return user && (
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
    );
};

export default UserInfo;
