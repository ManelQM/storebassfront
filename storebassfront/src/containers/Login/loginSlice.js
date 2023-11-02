import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice ({
    name: "user",
    initialState: {
        token: "",
        user: {},
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        logout: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { login, logout } = loginSlice.actions;
export const userData = (state) => state.user;
export default loginSlice.reducer;