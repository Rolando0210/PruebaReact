import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Hooks.ts";
import { PublicRoute } from "./PublicRoute.tsx";
import { PrivateRoute } from "./PrivateRoute.tsx";
import LoadingPage from "../components/LoadingPage.tsx";
import { stat } from "fs";
import { AppUrl } from "../constants.ts";
import FormContacto from "../../app/dashboard/views/components/FormContacto.tsx";
import Transacciones from "../../app/dashboard/views/components/Transactions.tsx";
import MontosTarjetas from "../../app/dashboard/views/components/Montos.tsx";

const Dashboard = lazy(() => import("../../app/dashboard/views/Dashboard.tsx"));


const AppRoute: React.FC<any> = () => {

    const dispatch = useAppDispatch();

    
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard />}
                    />
                    <Route
                        path={AppUrl.contacto}
                        element={
                            <FormContacto/>
                        }
                    />
                    <Route
                        path={AppUrl.transacciones}
                        element={<Transacciones/>}
                    />
                    <Route
                        path={AppUrl.montos}
                        element={<MontosTarjetas/>}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};


export default AppRoute;