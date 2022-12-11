import { Navigate, useLoaderData } from "react-router-dom";


function ProtectedRoute({children}) {
    const response = useLoaderData();
    return response.auth? children : <Navigate to='/select-role' replace/>
}

export default ProtectedRoute;