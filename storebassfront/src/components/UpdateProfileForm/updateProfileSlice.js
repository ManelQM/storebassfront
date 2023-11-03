import { createSlice } from "@reduxjs/toolkit";

const userUpdateSlice = createSlice ( {

    name: "user",
    initialState: {
        token: "",
        user: {},
    },

    reducers: {
        updateUserProfile: (state, action) => {
            // state.user = {...state.user, ...action.payload};
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { updateUserProfile} = userUpdateSlice.actions;

export const selectUser = (state) => state.user; 

export default userUpdateSlice.reducer; 
