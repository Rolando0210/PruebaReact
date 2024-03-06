import { combineReducers } from "@reduxjs/toolkit";
import { dashboardSlide } from "../../app/dashboard/store/DashboardSlice.ts";

export const rootReducer = combineReducers({
    dashboard: dashboardSlide.reducer,

});
