import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slices/ProductSlice";
import CartSlice from "../Slices/CartSlice";
import UserSlice from "../Slices/UserSlice";



export const  Store = configureStore({
    reducer: {
        products:ProductSlice,
        cart:CartSlice,
        user:UserSlice
        
    }
})

