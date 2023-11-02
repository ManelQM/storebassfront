import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ( {

    name: "user",
    initialState: {
        user: {},
    },

    reducers: {
        updateUserProfile: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { updateUserProfile} = userSlice.actions;

export const selectUser = (state) => state.user; 
export default userSlice.reducer; 
