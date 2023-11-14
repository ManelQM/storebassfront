import { createSlice } from "@reduxjs/toolkit";

const userUpdateSlice = createSlice ( {

    name: "user",
    initialState: {
        jwt: "",
        user: {},
    },

    reducers: {
        updateUserProfile: (state, action) => {
        state.user = action.payload;
        },
      },
});

export const { updateUserProfile} = userUpdateSlice.actions;

export const selectUser = (state) => state.user; 

export default userUpdateSlice.reducer; 
