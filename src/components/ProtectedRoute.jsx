import { Navigate, useLoaderData } from "react-router-dom";
import React from "react";

function ProtectedRoute({children}) {
    const response = useLoaderData();
    return response.auth? children : <Navigate to='/select-role' replace/>
}

export default ProtectedRoute;