import React from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = () => {
    const location = useLocation();
    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivetRoute;