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

// import { createSlice } from "@reduxjs/toolkit";

// export const loginSlice = createSlice({
//   name: "user",
//   initialState: {
//     token: localStorage.getItem("authToken") || "",
//     user: {},
//   },
//   reducers: {
//     login: (state, action) => {
//       const { jwt } = action.payload;
//       state.token = jwt;
//       localStorage.setItem("authToken", jwt);
//       state.user = action.payload.user; // Actualiza el estado del usuario
//     },
//     logout: (state) => {
//       state.token = "";
//       localStorage.removeItem("authToken");
//       state.user = {}; // Limpia el estado del usuario al cerrar sesión
//     },
//   },
// });

// export const { login, logout } = loginSlice.actions;
// export const userData = (state) => state.user;
// export default loginSlice.reducer;