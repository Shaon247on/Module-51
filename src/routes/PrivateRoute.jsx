import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
     if(user){
        return children
     }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};


PrivateRoute.propTypes = {
    children: PropTypes,Node
}

export default PrivateRoute;