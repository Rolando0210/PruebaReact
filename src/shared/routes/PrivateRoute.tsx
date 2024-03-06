import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    isAuthenticated: boolean;
    children: ReactNode;
};

export const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};