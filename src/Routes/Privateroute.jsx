import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const Privateroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <h2 className="text-3xl font-semibold" >Loading....</h2>
    }


    if(user){
        return children;
    }

    return <Navigate to={`/login`} state={{form: location}} replace ></Navigate>;
};

export default Privateroute;