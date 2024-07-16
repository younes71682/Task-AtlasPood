import { createSlice } from "@reduxjs/toolkit";
import { LoginError, LoginSuccess } from "../ConditionLohin";
import { ToastContainer } from "react-toastify";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        user: {
            username: 'atlaspood',
            password: '12345678'
        }
    },
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;

            if (state.user.username === username && state.user.password === password) {
                LoginSuccess(username);

                state.isLogin = true;
            } else {
                LoginError();
                state.isLogin = false;
            }
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;