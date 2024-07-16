import { createSlice } from "@reduxjs/toolkit";

export const ShopingSlice = createSlice({
    name: 'SHOPING',
    initialState: {
        Cart: []
    },

    reducers: {
        ADD: (state, action) => {
            const { id, name, price } = action.payload
            if (!state.Cart.find((i) => i.id === action.payload.id)) {
                state.Cart.push({
                    ...state,
                    Cart: state.Cart = [
                        ...state, {
                            id: id,
                            name: name,
                            price: price,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return {
                    Cart: state.Cart.map((i) => {
                        if (i.id === id)
    })
                }
            }
        },

        INCREASE: () => {

        },

        DECREASE: (state, action) => {

        },
    }
})

export const { } = ShopingSlice.actions
export default ShopingSlice.reducer