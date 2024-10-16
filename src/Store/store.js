import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./Slices/sidebarToggleSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice
    }
})

export default store;
