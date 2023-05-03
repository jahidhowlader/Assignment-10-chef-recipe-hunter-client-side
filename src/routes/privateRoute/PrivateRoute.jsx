import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    // context API
    const {user} = useContext(AuthContext)

    const location = useLocation()
    console.log(location);

    if(user){
        return children
    }

    return <Navigate to="/signin"></Navigate>
};

export default PrivateRoute;