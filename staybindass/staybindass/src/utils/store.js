import { configureStore } from "@reduxjs/toolkit"
import wishSlice from "./WishSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
 reducer :{
    cart: wishSlice,
    search : SearchSlice
 }
})

export default store;