import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        login: null,
        password: null,
    },
    isLogged: true,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        register(state, action){
            state.isLogged = true
            state.user = action.payload
        },
        logIn(state, action){
            state.isLogged = true,
            state.user = action.payload
        },
        logOut(state, action){
            state.isLogged = false
            state.user = null
        } 
    }
})

export const authReducer = authSlice.reducer
export const {register, logIn, logOut} = authSlice.actions