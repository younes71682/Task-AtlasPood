import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CounterReducer from './CounterSlice'
import AuthSlice from './AuthSlice'
const reducer = combineReducers({
    COUNTER: CounterReducer,
    AUTH: AuthSlice
})


export const Store = configureStore({
    reducer: reducer
})

export default Store 