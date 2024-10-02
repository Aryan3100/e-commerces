import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slice/productSlice";


const store = configureStore({
    reducer : {
        pro: productSlice
    },
})

export default store;