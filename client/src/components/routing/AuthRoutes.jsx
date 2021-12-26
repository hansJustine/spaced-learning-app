import { Outlet, Navigate } from 'react-router-dom'

function AuthRoutes() {
    return localStorage.getItem('authToken') ? <Navigate to='/mylearnings' replace /> : <Outlet />
}

export default AuthRoutes
