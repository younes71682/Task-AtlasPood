import { createSlice } from "@reduxjs/toolkit";
import { LoginError, LoginSuccess } from "../components/ConditionLohin";

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
                state.isLogin = true;
                LoginSuccess(username);
            } else {
                state.isLogin = false;
                LoginError();

            }
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;