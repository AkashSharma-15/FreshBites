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
                // state.items.push(action.payload)
                // console.log(state)
                // console.log(current(state))

                // check wheter item already exist if do then increase quantity else add that item
                const existingItemIndex = state.items.findIndex(
                    (item) => item.card.info.id === action.payload.card.info.id)

                existingItemIndex !== -1 ? state.items[existingItemIndex].quantity++ :
                    state.items.push({ ...action.payload, quantity: 1 })
            },

            removeItem: (state, action) => {
                // check element exist
                const existingItemIndex = state.items.findIndex(
                    (item) => item.card.info.id === action.payload.card.info.id
                );
                if (existingItemIndex !== -1) {
                    // if only 1 element exist than remove that
                    if (state.items[existingItemIndex].quantity === 1) {
                        state.items.splice(existingItemIndex, 1);
                    } else {
                        state.items[existingItemIndex].quantity--;
                    }
                }
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
