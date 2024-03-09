import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: []
        },
        reducers: {
            addItem: (state, action) => {
                // mutating the initial state
                state.items.push(action.payload)
                console.log(state)
                console.log(current(state))
            },
            removeItem: (state) => {
                state.items.pop()
            },
            clearCart: (state) => {
                state.items.length = 0;
                // return {items:[]}
            }
        }
    }
)
export const { addItem, clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
