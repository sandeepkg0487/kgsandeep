import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./appredex"
const store= configureStore({
    reducer:{
        counter:counterReducer,

    }
});

export default store;