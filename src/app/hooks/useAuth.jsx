import React, { useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// const TOKEN_KEY = "jwt-token";
// const REFRESH_KEY = "jwt-refresh-token";
// const EXPIRES_KEY = "jwt-expires";

const AuthProvider = ({ children }) => {
    async function signUp({ email, password }) {
        const key = "AIzaSyCDxYiBYc2eWs4vkpSAKdaWHs3rVh_VGs0";
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
        const { data } = await axios.post(url, {
            email,
            password,
            returnSecureToken: true
        });
        console.log("Auth data: ", data);
    };

    return (
        <AuthContext.Provider value={{ signUp }}>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AuthProvider;
