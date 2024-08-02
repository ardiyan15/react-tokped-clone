import { configureStore } from "@reduxjs/toolkit";
import focusedReducer from "./slices/focusedSlice";

const store = configureStore({
  reducer: { focused: focusedReducer },
});

export default store