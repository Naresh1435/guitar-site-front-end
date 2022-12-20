import { Outlet } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import React from "react";
function Root(){
    return(
        <ProtectedRoute>
            <Outlet/>
        </ProtectedRoute>
    )
}

export default Root;