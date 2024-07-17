import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from './CounterSlice'
import AuthSlice from './AuthSlice'


export const Store = configureStore({
    reducer: {
        AUTH: AuthSlice,
        COUNTER: CounterReducer,
    }
})

export default Store 