import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./reducers/adminSlice";
import basketSlice from "./reducers/basketSlice";
import productsSlice  from "./reducers/productsSlice";

export const store=configureStore({
    reducer:{
        products: productsSlice,
        basket: basketSlice,
        admin: adminSlice
    }
})