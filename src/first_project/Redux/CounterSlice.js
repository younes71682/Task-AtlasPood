import { createSlice } from "@reduxjs/toolkit";  

export const CounterSlice = createSlice({  
    name: "counter",  
    initialState: {  
        count: 1  
    },  

    reducers: {  
        increase: state => {  
            state.count += 1;  
        },  
    
        decrease: state => {  
            if (state.count > 1) {  
                state.count -= 1;  
            }  
        }  
    }  
});  

export const { increase, decrease } = CounterSlice.actions;  
export default CounterSlice.reducer;