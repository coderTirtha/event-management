import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className="flex justify-center items-center h-[85vh]">
            <p className="text-2xl flex items-center gap-2">Loading <span className="loading loading-spinner loading-lg"></span></p>
        </div>
    }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;