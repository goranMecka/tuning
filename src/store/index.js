import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./card-slice";

const myStore = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
});

export default myStore;