import React, { useContext } from "react";
import PropTypes from "prop-types";
// import userService from "../services/user.service";
// import { toast } from "react-toastify";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     getUsers();
    // }, []);
    // useEffect(() => {
    //     if (error !== null) {
    //         toast(error);
    //         setError(null);
    //     }
    // }, [error]);
    // async function getUsers() {
    //     try {
    //         const { content } = await userService.get();
    //         setUsers(content);
    //         setLoading(false);
    //     } catch (error) {
    //         errorCatcher(error);
    //     }
    // }
    // function errorCatcher(error) {
    //     const { message } = error.response.data;
    //     setError(message);
    //     setLoading(false);
    // }
    return (
        <AuthContext.Provider value={{ users }}>
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
