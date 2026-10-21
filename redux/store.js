import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import profitReducer from "./profitSlice";


export const makeStore = () => 
    configureStore ({
        reducer: {
            cart: cartReducer,
            profit: profitReducer,
        },
    });

    