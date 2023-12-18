const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export default store;