import { Outlet } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

function Root(){
    return(
        <ProtectedRoute>
            <Outlet/>
        </ProtectedRoute>
    )
}

export default Root;