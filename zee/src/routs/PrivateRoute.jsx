import {useContext} from "react";
import { authContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
    const {state} = useContext(authContext)

    if(!state.isAuth){
        return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute;