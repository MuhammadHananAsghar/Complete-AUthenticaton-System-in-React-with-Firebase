import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export const  DashRoute = ({ children }) => {
    const { currentUser } = useAuth();


    if (!currentUser){
        return <Navigate to="/signin" />
    }

    return children;
}