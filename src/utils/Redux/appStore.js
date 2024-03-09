import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore creates our store 

const appStore = configureStore(
    {
        reducer: {
            cart: cartReducer
        }
    }
)
export default appStore