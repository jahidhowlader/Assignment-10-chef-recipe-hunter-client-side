import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from 'lottie-react'
import loader from '../../assets/loader.json'

const PrivateRoute = ({ children }) => {

    // context API
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <>
            <div className="grid grid-cols-7">
                <div></div>
                <div></div>
                <div className="col-span-3">

                <Lottie className='' animationData={loader} loop={true}></Lottie>
                </div>
            </div>
        </>

    }

    if (user) {
        return children
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;