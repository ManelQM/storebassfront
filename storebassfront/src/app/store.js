import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../containers/Login/loginSlice";


export default configureStore ({
    reducer: {
        user: userReducer
    },
});