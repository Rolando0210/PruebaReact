import {configureStore, ThunkAction, UnknownAction} from "@reduxjs/toolkit";
import {rootReducer} from "../reducers/RootReducers";

export function setupStore(preloadedState?: any) {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>;
