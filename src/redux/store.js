import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { WalletReducer } from "./WalletSlice";
import { authReducer } from "./AuthSlice";

const reducers = combineReducers({
    walletItems: WalletReducer,
    auth: authReducer,
})

export const store = configureStore({
    reducer: reducers,
})

