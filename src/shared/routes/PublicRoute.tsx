import { ReactNode } from "react";
import {Navigate } from "react-router-dom";

type PublicRouteProps = {
    isAuthenticated: boolean;
    children: ReactNode;
};

export const PublicRoute = ({ isAuthenticated, children }: PublicRouteProps) => {
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};
