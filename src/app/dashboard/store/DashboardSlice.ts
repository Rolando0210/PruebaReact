import {createSlice} from "@reduxjs/toolkit";
import {SideBarMenuKey} from "../../../shared/constants";
import {DashboardInterfaceState} from "../interfaces/DashboardInterfaceStates";

const initialState: DashboardInterfaceState = {
    openKeysSubMenu: [],
    sideBarMenuKey: SideBarMenuKey.initialPage.toString(),
    apiVersion: null,
};

export const dashboardSlide = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        changeKey: (state, action) => {
            state.sideBarMenuKey = action.payload
        },
        changeSubMenuKey: (state, action) => {
            state.openKeysSubMenu = action.payload
        },
        apiVersion: (state, action) => {
            state.apiVersion = action.payload
        },
        refreshKey: (state, action) => {
            state.sideBarMenuKey = action.payload
        },
    }
});

export const {apiVersion, changeKey, changeSubMenuKey, refreshKey} = dashboardSlide.actions;
