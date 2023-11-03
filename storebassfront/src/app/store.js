import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../containers/Login/loginSlice";
import updateProfileReducder from "../components/UpdateProfileForm/updateProfileSlice";

export default configureStore ({
    reducer: {
        user: userReducer,
        updateProfile: updateProfileReducder,
    },
});